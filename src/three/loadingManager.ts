import * as THREE from "three";

export type LoadingState = {
  isLoading: boolean;
  itemsLoaded: number;
  itemsTotal: number;
  progress: number;
  loaded: boolean;
  firstFrameRendered: boolean;
  ready: boolean;
  lastUrl?: string;
  errorUrl?: string;
};

type Listener = (state: LoadingState) => void;

const listeners = new Set<Listener>();

let bootCompleted = false;

let state: LoadingState = {
  isLoading: true,
  itemsLoaded: 0,
  itemsTotal: 0,
  progress: 0,
  loaded: true,
  firstFrameRendered: false,
  ready: false,
};

function computeDerived(next: LoadingState): LoadingState {
  const progress =
    next.itemsTotal > 0
      ? next.itemsLoaded / next.itemsTotal
      : next.loaded
        ? 1
        : 0;
  const ready = Boolean(next.loaded && next.firstFrameRendered);

  if (bootCompleted) {
    return {
      ...next,
      progress: 1,
      ready: true,
      isLoading: false,
    };
  }

  return {
    ...next,
    progress,
    ready,
    isLoading: !ready,
  };
}

function setState(partial: Partial<LoadingState>) {
  if (bootCompleted) return;
  state = computeDerived({ ...state, ...partial });
  if (state.ready) bootCompleted = true;
  for (const l of listeners) l(state);
}

export function getLoadingState(): LoadingState {
  return state;
}

export function subscribeLoadingState(listener: Listener): () => void {
  listeners.add(listener);
  listener(state);
  return () => {
    listeners.delete(listener);
  };
}

export function markFirstFrameRendered() {
  if (state.firstFrameRendered) return;
  setState({ firstFrameRendered: true });
}

export const loadingManager = new THREE.LoadingManager();

loadingManager.onStart = (url, itemsLoaded, itemsTotal) => {
  if (bootCompleted) return;
  setState({
    lastUrl: url,
    itemsLoaded,
    itemsTotal,
    loaded: false,
  });
};

loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
  if (bootCompleted) return;
  setState({
    lastUrl: url,
    itemsLoaded,
    itemsTotal,
  });
};

loadingManager.onLoad = () => {
  if (bootCompleted) return;
  setState({
    loaded: true,
  });
};

loadingManager.onError = (url) => {
  if (bootCompleted) return;
  setState({
    errorUrl: url,
  });
};

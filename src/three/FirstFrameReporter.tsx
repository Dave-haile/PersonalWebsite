import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { markFirstFrameRendered } from "./loadingManager";

export default function FirstFrameReporter() {
  const reportedRef = useRef(false);

  useFrame(() => {
    if (reportedRef.current) return;
    reportedRef.current = true;
    markFirstFrameRendered();
  });

  return null;
}

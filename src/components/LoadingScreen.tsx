import React, { useEffect, useState } from "react";
import LoadingOverlay from "./LoadingOverlay";
import { subscribeLoadingState } from "../three/loadingManager";

export const LoadingScreen: React.FC = () => {
    const [loading, setLoading] = useState({ visible: true, progress: 0 });

    useEffect(() => {
        return subscribeLoadingState((s) => {
            setLoading({ visible: !s.ready, progress: s.progress });
        });
    }, []);

    return <LoadingOverlay visible={loading.visible} progress={loading.progress} />;
};

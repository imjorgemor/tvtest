import { useEffect, useState, useRef } from "react";

interface Entries {
    isIntersecting: boolean
}

export const useInfiniteScroll = () => {
    const [showSlider, setShowSlider] = useState(false);
    const observeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onChange = (entries: Entries[]) => {
            const element = entries[0];
            if (element.isIntersecting) {
                setTimeout(() => {
                    setShowSlider(true);
                    observer.disconnect();
                }, 1000);
            }
        };

        const observer = new IntersectionObserver(onChange, { rootMargin: "5px" });
        observeRef.current && observer.observe(observeRef.current);
        return () => observer.disconnect();
    }, []);

    return { showSlider, observeRef };
};

export default useInfiniteScroll;
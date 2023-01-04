import { useEffect, useState } from 'react';

export const useBackground = (scrollTrigger: number) => {
    const [background, setBackground] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY; // => scroll position
        if (scrollPosition > scrollTrigger) {
            setBackground(true);
        } else {
            setBackground(false);
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return {background};
};
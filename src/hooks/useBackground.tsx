import { useEffect, useState } from 'react';

export const useBackground = (scrollTrigger: number) => {
    const [background, setBackground] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY; // => get scrollY position
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {background};
};
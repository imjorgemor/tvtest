import { useRef, useState, useEffect } from 'react';

export const useSlider = (totalFilms: number) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    // I number of films visible per scrolling block get from useEffect I
    const [filmsVisible, setFilmsVisible] = useState(3);
    // II. number of blocks to move (min 1) calc from totalfilms / films visible. Although I believe this data is controlled by the slider component as in the rakuten website always show 24 items. This would reduce the number of states and thus reduce the re-renders of updating each state;
    const [totalSlides, setTotalSlides] = useState(2);
    // III. slide position visible
    const [slideNumber, setSlideNumber] = useState(1);

    useEffect(() => {
        window.addEventListener('resize', handleWindowSize);
        return () => {
            window.removeEventListener('resize', handleWindowSize);
        };
    }, []);
   

    // handle window resize and sets items in row
    const handleWindowSize = () => {
        if (window.innerWidth >= 800) {
            setFilmsVisible(6);
            setTotalSlides(3);
        } else if (sliderRef.current && window.innerWidth < 800) {
            setFilmsVisible(3);
            setTotalSlides(6);
            setSlideNumber(1);
            sliderRef.current.style.transform = `translateX(-${0}px)`;
        }
    };

    //in case of resize>800 and its screening the last slide (edge case)
    // it is not 100% perfect but still smooth effect on the user experience
    useEffect(() => {
        const handleSlidesWhenResize = () => {
            if (sliderRef.current && slideNumber > totalSlides) {
                setSlideNumber(1);
                sliderRef.current.style.transform = `translateX(-${0}px)`;
            }
        };
        handleSlidesWhenResize();
    }, [totalSlides]);

    useEffect(() => {
        handleWindowSize();
        handleTotalSlides();
    }, []);

    const handleTotalSlides = () => {
        totalFilms && setTotalSlides(Math.ceil(totalFilms / filmsVisible));
    };

    const handleClickRight = () => {
        const distance = sliderRef.current ? sliderRef.current.getBoundingClientRect().width : 0;

        if (slideNumber < totalSlides) {
            setSlideNumber(slideNumber + 1);
            if (sliderRef.current) {
                sliderRef.current.style.transform = `translateX(-${distance * slideNumber}px)`;
            }
        }
    };

    const handleClickLeft = () => {
        const distance = sliderRef.current ? sliderRef.current.getBoundingClientRect().width : 0;

        if (slideNumber > 1) {
            setSlideNumber(slideNumber - 1);
            if (sliderRef.current) {
                sliderRef.current.style.transform = `translateX(-${distance * (slideNumber - 2)}px)`;
            }
        }
    };

  return {handleClickLeft, handleClickRight, sliderRef, slideNumber, totalSlides};
};

export default useSlider;
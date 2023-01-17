import { useRef, useState, useEffect } from 'react';
import { ListItemModel } from '../models/list/ListModel';
import { numberFilmsPerSection } from '../definitions/filmSections';

export const useSlider = (filmsByCategory?: ListItemModel[]) => {
    const totalFilms = numberFilmsPerSection;

    const sliderRef = useRef<HTMLDivElement>(null);
    const [totalSlides, setTotalSlides] = useState(2);
    const [currentSlidePosition, setCurrentSlidePosition] = useState(1);
    const [isRepeating, setIsRepeating] = useState(false);

    // handle window resize and sets items in row
    const handleWindowSize = () => {
        if (window.innerWidth >= 1100) {
            setTotalSlides(totalFilms / 7);
        } else if (window.innerWidth >= 800) {
            setTotalSlides(totalFilms / 6);
        } else if (window.innerWidth >= 450) {
            setTotalSlides(totalFilms / 4);
        } else if (window.innerWidth < 450) {
            setTotalSlides(totalFilms / 3);
        }
    };

    useEffect(() => {
        handleWindowSize();

        window.addEventListener('resize', handleWindowSize);
        return () => {
            window.removeEventListener('resize', handleWindowSize);
        };
    }, []);

    const handleClickRight = () => {
        setIsRepeating(true);
        const distance = sliderRef.current ? sliderRef.current.getBoundingClientRect().width : 0;
        if (sliderRef.current) {
            if (currentSlidePosition < totalSlides - 1) {
                sliderRef.current.style.transform = `translateX(-${distance * currentSlidePosition}px)`;
                setCurrentSlidePosition(prev => prev + 1);
            } else if (currentSlidePosition - totalSlides <= 1) {
                sliderRef.current.style.transform = `translateX(-${distance * (totalSlides - 1)}px)`;
                setCurrentSlidePosition(Math.ceil(totalSlides));
            }
        }
    };

    const handleClickLeft = () => {
        const distance = sliderRef.current ? sliderRef.current.getBoundingClientRect().width : 0;
        if (currentSlidePosition > 1 && sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${distance * (currentSlidePosition - 2)}px)`;
            setCurrentSlidePosition(prev => prev - 1);  
        }
    };

    return { handleClickLeft, handleClickRight, sliderRef, currentSlidePosition, totalSlides, isRepeating };
};

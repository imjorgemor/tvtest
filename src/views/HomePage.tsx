import { Highlight, MovieSlider } from '../components/organism';
import { filmSections } from '../definitions';
import { MainTemplate } from '../components/templates';

export const HomePage = () => {
    return (
        <>
            <Highlight />
            <MainTemplate>
                {
                    Object.entries(filmSections).map(([id, section]) =>
                        <MovieSlider key={id} section={section} />
                    )
                }
            </MainTemplate>
        </>
    );
};

export default HomePage;
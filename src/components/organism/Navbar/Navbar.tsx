import { Link } from 'react-router-dom';
import { TvTestLogo } from '../../../assets/svg';
import { useBackground } from '../../../hooks/useBackground';

export const Navbar = () => {
    const { background } = useBackground(1);

    return (
        <nav
            data-testid='tv-navbar'
            className={!background ? 'navbar-wrapper' : 'navbar-wrapper navbar-wrapper--black'}>
            <Link to='/'>
                <TvTestLogo />
            </Link>
        </nav>
    );
};
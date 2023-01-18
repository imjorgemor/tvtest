import { lazy, Suspense } from 'react';
const MoviePlayer = lazy(() => import('../components/organism/MoviePlayer/MoviePlayer'));


export const StreamPage = () => {
  return (
    <Suspense>
        <MoviePlayer />
    </Suspense>
  );
};

export default StreamPage;
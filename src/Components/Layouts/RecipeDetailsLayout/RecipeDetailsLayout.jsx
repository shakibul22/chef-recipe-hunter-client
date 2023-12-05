import  { lazy, Suspense } from 'react';

import { Outlet } from 'react-router-dom';


const LazyHeader = lazy(() => import('../../Header/Header'));
const LazyFooter = lazy(() => import('../../Footer/Footer'));

const RecipeDetailsLayout = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyHeader />
            </Suspense>
            <Outlet />
            <Suspense fallback={<div>Loading...</div>}>
                <LazyFooter />
            </Suspense>
        </div>
    );
};

export default RecipeDetailsLayout;

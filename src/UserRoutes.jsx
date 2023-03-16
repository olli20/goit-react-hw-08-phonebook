import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";

import PrivatRoute from 'modules/PrivateRoute/PrivateRoute';
import PublicRoute from 'modules/PublicRoute/PublicRoute';
import GlobalLoading from 'shared/components/GlobalLoading/GlobalLoading';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
    return (
        <Suspense fallback={<GlobalLoading />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route element={<PrivatRoute />}>
                    <Route path="/contacts" element={<ContactsPage />} />
                </Route>
                <Route element={<PublicRoute />}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
};

export default UserRoutes;
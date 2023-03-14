import {lazy, Suspense} from 'react';
import {Routes, Route} from "react-router-dom";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
    return (
        <Suspense>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
};

export default UserRoutes;

// fallback={<Loading />}
import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";

const MainPage = lazy(() => import("./main/main"));
const SignUp = lazy(() => import("./auth/singup"));
const SignIn = lazy(() => import("./auth/signin"));

export const Routing: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}
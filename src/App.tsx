import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Loader from "@/components/Loader";

// Lazy load pages for better performance
const Home = lazy(() => import("@/pages/Home"));

function App() {
    const location = useLocation();

    return (
        <Suspense fallback={<Loader />}>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                </Routes>
            </AnimatePresence>
        </Suspense>
    );
}

export default App;

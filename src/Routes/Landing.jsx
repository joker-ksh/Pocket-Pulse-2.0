import Card from "../Components/Landing/Card/Card";
import Background from "../Components/Landing/Background";
import Footer from "../Components/Landing/Footer";
import Hero from "../Components/Landing/Hero";
import Navbar from "../Components/Landing/Navbar";
import { ScrollProvider } from '../Components/Landing/Scroll/Context';
import React,{userState} from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Landing() {
    const location = useLocation();
    const navigate = useNavigate();
    const [hasShownToast, setHasShownToast] = React.useState(false);

    React.useEffect(() => {
        // Only show toast if we have a message and haven't shown it yet
        if (location.state?.logoutMsg && !hasShownToast) {
            toast.error(location.state.logoutMsg, {
                position: "bottom-left",
                autoClose: 3000,
                onClose: () => {
                    // Clear the location state after showing toast
                    navigate(location.pathname, { replace: true, state: {} });
                }
            });
            setHasShownToast(true);
        }
    }, [location.state?.logoutMsg, hasShownToast, navigate, location.pathname]);

    return (
        <div className="app">
            <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    pauseOnHover
            />
            <ScrollProvider>
                <section className="background">
                    <Background />
                </section>

                <nav className="navbar">
                    <Navbar />
                </nav>

                <section className="hero">
                    <Hero />
                </section>

                <section className="card">
                    <Card />
                </section>

                <footer className="footer">
                    <Footer />
                </footer>
            </ScrollProvider>
        </div>
    )
}

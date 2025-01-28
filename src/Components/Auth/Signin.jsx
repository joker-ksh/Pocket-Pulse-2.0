import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import logo from "./logo.png";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const providers = [{ id: "credentials", name: "Credentials" }];

const BRANDING = {
  logo: <img src={logo} alt="Pocket Pulse Logo" style={{ height: 40 }} />,
  title: "Pocket Pulse",
};

export default function Signin() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handle sign-in logic
  const signIn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      console.log("Login successful:", response.data);
      navigate(`/dashboard?user=${response.data.user.name}&id=${response.data.user.id}`,{
        state : {successMessage : "Logged in successfully"}
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed: Invalid credentials",
        {
          position: "top-right", // Direct string position
          autoClose: 3000,
          transition: Slide,
        }
      );
      console.error(
        "Login failed:",
        error.response?.data?.message || "An error occurred."
      );
    }
  };

  return (
    <AppProvider branding={BRANDING} theme={theme}>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{
          emailField: {
            value: email,
            onChange: (event) => setEmail(event.target.value),
          },
          passwordField: {
            value: password,
            onChange: (event) => setPassword(event.target.value),
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(100px)",
            borderRadius: "15px",
            padding: "20px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          },
          "& .MuiInputBase-root": {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            borderRadius: "8px",
            color: "#000",
          },
          "& .MuiButton-root": {
            marginTop: "16px",
            backgroundColor: "rgba(54, 87, 234, 0.8)",
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(85, 106, 202, 1)",
            },
          },
        }}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AppProvider>
  );
}

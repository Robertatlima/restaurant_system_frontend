import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProdiver } from "../contexts/AuthContext";
import "../../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProdiver>
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} />
    </AuthProdiver>
  );
}

export default MyApp;

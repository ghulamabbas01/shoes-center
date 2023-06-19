import "@/styles/globals.css";
import Head from "next/head";
import dynamic from "next/dynamic";
// components dynimic import
const Footer = dynamic(() => import("@/components/Footer"));
const Header = dynamic(() => import("@/components/Header"));
// import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shoes Center</title>
        <meta name="description" content="Shoes Center" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* google font start  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* google font start  */}
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

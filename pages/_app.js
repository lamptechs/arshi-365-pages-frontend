import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import Layout from "../component/layout/Layout";
import Meta from "../component/seo/Meta";
import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";
import { CartProvider } from "react-use-cart";
import AuthProvider from "../contexts/AuthProvider";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  //const getLayout = Component.getLayout || ((page) => page);
  //console.log("page is",getLayout)
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <Meta />
      </Head>
      {/* font awesome   */}
      <Script
        src="https://kit.fontawesome.com/61a6132c09.js"
        crossOrigin="anonymous"
      ></Script>
      {/* Bootstrap Bundle with Popper   */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      />

      <SessionProvider session={session}>
        <AuthProvider>
          <CartProvider>
            <Layout>
              <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} />
              </AnimatePresence>
            </Layout>
          </CartProvider>
        </AuthProvider>
      </SessionProvider>
    </>
  );
}
export default MyApp;

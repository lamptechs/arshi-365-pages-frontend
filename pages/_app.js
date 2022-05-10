import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../component/layout/Layout";
import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";

function MyApp({ Component, pageProps }) {
  //const getLayout = Component.getLayout || ((page) => page);
  //console.log("page is",getLayout)
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }  
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* css from brootstrap   */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
            crossOrigin="anonymous"
          />

          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
            integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
            crossOrigin="anonymous"
          ></link>
          {/* greensock text animate */}
          <link
            href="https://fonts.googleapis.com/css?family=Asap:400,700"
            rel="stylesheet"
            type="text/css"
          ></link>
        </Head>
        {/* font awesome   */}
        <Script
          src="https://kit.fontawesome.com/61a6132c09.js"
          crossOrigin="anonymous"
        ></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  
}
export default MyApp;

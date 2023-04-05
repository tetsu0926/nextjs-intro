import Layout from "./componets/Layout";
import NavBar from "./componets/NavBar";

export default function App({ Component, pageProps }) {
    console.log("pageProps", pageProps);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

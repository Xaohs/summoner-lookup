import Layout from "../src/components/Layout";
import { GlobalStyle } from "../src/styles/GlobalStyle";


function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle/>
            <Layout>
                <Component { ...pageProps } />
            </Layout>
        </>
    )
}

export default MyApp

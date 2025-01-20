import Layout from "@/components/Layout";
import { SearchProvider } from "@/context/SearchContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchProvider>
  );
}

import "@/styles/globals.css";
import "../styles/home.css";
import { ImageContextProvider } from "@/components/imageContext";

export default function App({ Component, pageProps }) {
  return (
    <ImageContextProvider>
      <Component {...pageProps} />
    </ImageContextProvider>
  );
}

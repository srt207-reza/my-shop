import "@/theme/styles/globals.css";
import "@/theme/styles/slider.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "./../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

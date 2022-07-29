import '../styles/globals.css';

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

import {Provider} from 'react-redux';
import store from '../store/store';

export default function MyApp({ Component, pageProps }) {
  return (<Provider store={store}>
    <Component {...pageProps} />
  </Provider>)
}

const progress = new ProgressBar({
  size: 3,
  color: "#03c6fc",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);
import "../styles/globals.css";
import { Provider } from "mobx-react";
import stores from "../src/stores";

const MyApp = ({ Component, pageProps }) => {
  return (
    // Provider를 사용함으로서 프로젝트 전역에 import없이 store들을 바로 주입(inject)하여 사용 가능.
    <Provider {...stores}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;

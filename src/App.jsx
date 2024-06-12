import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import MainRouter from "./router/MainRouter";

function App() {
  return (
    <>
      <Provider store={store}>
        <MainRouter />
      </Provider>
    </>
  );
}

export default App;

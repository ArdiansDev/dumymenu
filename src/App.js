import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import MainMenu from "./components/mainMenu";
import MainView from "./components/mainView";
function App() {
  return (
    <Provider store={store}>
      <div className="flex">
        <MainMenu />
        <MainView />
      </div>
    </Provider>
  );
}

export default App;

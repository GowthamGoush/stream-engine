import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import routes from "./routes";
import appStore from "./models/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import routes from "./routes";
import appStore from "./models/appStore";
import Header from "./pages/components/header";

function App() {
  return (
    <Provider store={appStore}>
      <main className="h-screen">
        <Header />
        <RouterProvider router={routes} />
      </main>
    </Provider>
  );
}

export default App;

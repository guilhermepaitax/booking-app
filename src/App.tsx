import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { routes } from "@/config/routes";

import { store } from "@/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;

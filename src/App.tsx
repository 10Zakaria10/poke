import React from "react";
import { StoreProvider } from "./store/provider";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

const App: React.FC = () => {
  return (
    <StoreProvider>
      <RouterProvider router={routes} />
    </StoreProvider>
  );
};

export default App;

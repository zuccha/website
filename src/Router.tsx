import { React, ReactRouterDOM } from "../deps.ts";
import HomeRoute from "./routes/HomeRoute.tsx";
import GuideRoute from "./routes/GuideRoute.tsx";
import SolairesAdventuresRoute from "./routes/GameRoute.tsx";

const App = () => {
  return (
    <ReactRouterDOM.HashRouter>
      <div className="router">
        <ReactRouterDOM.Routes>
          <ReactRouterDOM.Route path="/guides/:id" element={<GuideRoute />} />
          <ReactRouterDOM.Route
            path="/games/solaires-adventures"
            element={<SolairesAdventuresRoute />}
          />
          <ReactRouterDOM.Route path="/" element={<HomeRoute />} />
        </ReactRouterDOM.Routes>
      </div>
    </ReactRouterDOM.HashRouter>
  );
};

export default App;

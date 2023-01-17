import { React, ReactRouterDOM } from "../deps.ts";
import HomeRoute from "./routes/HomeRoute.tsx";
import MoreRoute from "./routes/MoreRoute.tsx";
import GuideRoute from "./routes/guides/GuideRoute.tsx";

const App = () => {
  return (
    <ReactRouterDOM.BrowserRouter>
      <div className="router">
        <div className="router-content">
          <ReactRouterDOM.Routes>
            <ReactRouterDOM.Route path="/guides/:id" element={<GuideRoute />} />
            <ReactRouterDOM.Route path="/more" element={<MoreRoute />} />
            <ReactRouterDOM.Route path="/" element={<HomeRoute />} />
          </ReactRouterDOM.Routes>
        </div>
      </div>
    </ReactRouterDOM.BrowserRouter>
  );
};

export default App;

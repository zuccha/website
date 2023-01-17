import { React, ReactRouterDOM } from "../deps.ts";
import HomeScreen from "./screens/HomeScreen.tsx";
import MoreScreen from "./screens/MoreScreen.tsx";
import GuideScreen from "./screens/guides/GuideScreen.tsx";

const App = () => {
  return (
    <ReactRouterDOM.BrowserRouter>
      <div className="router">
        <div className="router-content">
          <ReactRouterDOM.Routes>
            <ReactRouterDOM.Route
              path="/guides/:id"
              element={<GuideScreen />}
            />
            <ReactRouterDOM.Route path="/more" element={<MoreScreen />} />
            <ReactRouterDOM.Route path="/" element={<HomeScreen />} />
          </ReactRouterDOM.Routes>
        </div>
      </div>
    </ReactRouterDOM.BrowserRouter>
  );
};

export default App;

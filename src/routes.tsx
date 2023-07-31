import { Route, Routes } from "react-router-dom";
import Page404 from "./pages/404";
import Editor from "./pages/editor";
import Splash from "./pages/splash";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default Router;

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "../styles/globals.css";
import "../styles/App.css";
import "../output.css";

import "../components/hooks/i18n";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import Articles from "../components/Articles";
import TransitionEffect from "../components/TransitionEffect";

function App() {
  return (
    <>
      <TransitionEffect />
      <NavBar />
      <Outlet />

      <Footer />
    </>
  );
}

export default App;

//metodo con browser router

{
  /* <Home />
      <About /> */
}
{
  /* <Projects /> */
}
{
  /* <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          {/* <Route path="/Articles" element={<Articles />} /> */
}
{
  /* <Route path="*" element={<NotFound />} /> */
}
{
  /* <Route path="/Experience" element={<Experince />} /> */
}
{
  /* <Route path="/Projects" element={<Projects />} /> */
}
{
  /* <About /> */
}
{
  /* </Routes>
      </BrowserRouter> */
}

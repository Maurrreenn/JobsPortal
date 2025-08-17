import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [hideHeaderFooter, setHideHeaderfooter] = useState(false);
  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main>
      <Outlet context={{hideHeaderFooter,   setHideHeaderfooter}} />
      </main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default Layout;
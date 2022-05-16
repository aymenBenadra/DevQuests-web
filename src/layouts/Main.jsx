import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div>Layout</div>
      <nav>Navbar</nav>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default Layout;

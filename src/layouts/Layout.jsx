import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Alert from "../components/Alert";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import useAlert from "../hooks/useAlert";

function Layout() {
  const [showAlert, setShowAlert] = useState(false);
  const { alert } = useAlert();

  useEffect(() => {
    setShowAlert(!!alert);
  }, [alert]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [showAlert]);

  return (
    <>
      <NavBar />
      <main className="min-h-full relative">
        {showAlert && <Alert />}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;

import { useEffect, useState } from "react";
import useAlert from "../hooks/useAlert";

function Alert() {
  const { alert, icons } = useAlert();
  const [style, setStyle] = useState(
    "alert shadow-lg fixed top-10 right-2 w-fit btn-" + alert?.type
  );
  const [icon, setIcon] = useState(icons[alert?.type]);

  useEffect(() => {
    setStyle(
      "alert shadow-lg fixed bottom-10 right-4 w-fit animate-bounce z-50 btn-" +
        alert.type
    );
    setIcon(icons[alert?.type]);
  }, [alert]);

  return (
    <div className={style} aria-live="assertive">
      <div>
        {icon}
        <span>{alert?.message}</span>
      </div>
    </div>
  );
}

export default Alert;

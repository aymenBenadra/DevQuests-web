import { useEffect, useState } from "react";
import useAlert from "../hooks/useAlert";

function Alert() {
  const { alert, icons } = useAlert();
  const [style, setStyle] = useState(
    `alert ${"btn-" + alert?.type} shadow-lg absolute top-2 right-2 w-fit`
  );
  const [icon, setIcon] = useState(icons[alert?.type]);

  useEffect(() => {
    setStyle(
      `alert ${
        "btn-" + alert?.type
      } shadow-lg absolute top-2 right-2 w-fit animate-bounce z-50`
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

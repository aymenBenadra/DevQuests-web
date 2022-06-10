import { useEffect, useState } from "react";

function NavClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <span className="countdown text-xl font-mono">
      <span style={{ "--value": time.getHours() }}></span>:
      <span style={{ "--value": time.getMinutes() }}></span>:
      <span style={{ "--value": time.getSeconds() }}></span>
    </span>
  );
}

export default NavClock;

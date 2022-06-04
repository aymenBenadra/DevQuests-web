import Lost from "../images/404.svg";

function NotFound() {
  return (
    <div className="text-center flex space-y-4 w-full flex-col items-center">
      <h1 className="font-black text-7xl text-primary">404</h1>
      <img src={Lost} alt="404" className=" w-1/3" />
      <p className="text-xl text-primary">
        Looks like you've lost your way, turn around and continue straight.
      </p>
    </div>
  );
}

export default NotFound;

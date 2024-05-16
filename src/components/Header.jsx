import BGHEADER from "../assets/backgroundHeader.mp4";

function Header() {
  return (
    <header className="relative">
      <div className="absolute inset-0 overflow-hidden h-[15rem]">
        <video
          src={BGHEADER}
          autoPlay
          muted
          loop
          className="w-full h-[25rem] object-cover object-center"
        />
      </div>
      <div className="relative z-20 text-lime-500 pt-10 text-center mb-6">
        {" "}
        <a className="btn btn-ghost text-4xl">Code Nature</a>
      </div>
    </header>
  );
}

export default Header;

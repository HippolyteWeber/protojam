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
      <div className="relative z-20 text-lime-500"></div>
    </header>
  );
}

export default Header;

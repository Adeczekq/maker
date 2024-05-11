import Logo from "./../assets/logo.svg";
function NavBar() {
  return (
    <div className="flex items-center justify-center font-bold text-xl md:justify-start ">
      <img src={Logo} alt="Logo"></img>
    </div>
  );
}

export default NavBar;

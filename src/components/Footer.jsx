function Footer() {
  return (
    <div className="flex flex-col gap-6">
      <span className="text-2xl font-extrabold text-center text-white p-14 md:p-5">
        Get notified when we launch
      </span>
      <div className=" flex flex-col gap-6 md:flex-row md:items-center md:justify-center ">
        <input
          className="rounded-full bg-secondary p-3 outline-none focus:ring-2 focus:ring-green-500 md:max-w-80 md:w-full "
          placeholder="Email adress"
        ></input>

        <button className="border-2 border-primary rounded-full bg-primary text-background font-extrabold p-3 cursor-pointer hover:bg-transparent hover:text-white">
          Get notified
        </button>
      </div>
    </div>
  );
}

export default Footer;

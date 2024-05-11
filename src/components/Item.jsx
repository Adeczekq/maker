function Item({ imgSrc, title, desc, up }) {
  return (
    <div
      className={`flex flex-col gap-6 justify-center items-center  xl:flex-col  md:flex-row md:items-start ${up} md:gap-16 `}
    >
      <div className="w-32 h-32 rounded-badge flex items-center bg-secondary justify-center ">
        <img className="w-16 " src={imgSrc}></img>
      </div>
      <div className="flex text-white flex-col h-32 items-center md:items-start md:max-w-80 md:justify-center gap-3">
        <span className=" text-center text-lg font-extrabold   md:text-left ">
          {title}
        </span>
        <p className="text-grey text-center  md:text-left">{desc}</p>
      </div>
    </div>
  );
}

export default Item;

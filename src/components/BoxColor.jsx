const BoxColor = ({ color, selected }) => {
  const styleColor = { backgroundColor: color };
  const styleBackground =
    color === selected ? { backgroundColor: selected } : {};

  return (
    <div
      className="border rounded-full p-3 w-fit cursor-pointer hover:animate-pulse "
      style={styleBackground}
    >
      <div
        className={`rounded-full p-1 w-8 h-8 flex items-center justify-center`}
        style={styleColor}
      >
        <div
          className={`rounded-full w-6 h-6 border-4 border-white`}
          style={styleColor}
        ></div>
      </div>
    </div>
  );
};

export default BoxColor;

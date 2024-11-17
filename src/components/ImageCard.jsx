import React from "react";
const ImageCard = () => {
  return (
    <div className="rounded-full w-32 overflow-hidden h-32">
      {/* here my image  */}
      <img
        src="benrabah_mohamed.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageCard;

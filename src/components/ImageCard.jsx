import React from "react";
import { useNavigate } from "react-router-dom";
const ImageCard = () => {
  const navigate = useNavigate()
  
  const handleGo = () => {
    navigate('/tasks')
  }

  return (
    <div className="rounded-full w-32 overflow-hidden h-32" onDoubleClick={handleGo }>
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

import { useState } from "react";
import ICONS from "../assets/constants/icons";

const SearchBar = ({ search, setSearch }) => {
  const [edit, setEdit] = useState(false);

  return (
    <div>
      <img src={ICONS.SEARCH} alt="" className="w-8 h-8" />
    </div>
  );
};

export default SearchBar;

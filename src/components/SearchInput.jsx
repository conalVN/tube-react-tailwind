import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import HistoriesSearch from "./HistoriesSearch";
import * as actions from "../store/action";

function SearchInput() {
  const [keyword, setKeyword] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSearch() {
    dispatch(actions.search(keyword));
    navigate(`/search/${keyword}`);
  }
  return (
    <div className="flex items-center justify-center gap-2">
      <label className="relative flex-labelInput flex items-center border border-gray-200 rounded-full">
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="flex-input w-full h-full py-2 pl-4 outline-none rounded-l-full placeholder:font-normal"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onFocus={() => setShowHistory(true)}
          onBlur={() => setShowHistory(false)}
        />
        {showHistory && <HistoriesSearch />}
        {keyword && (
          <span
            className="w-10 h-10 flex items-center justify-center p-1 cursor-pointer rounded-full hover:bg-gray-100"
            onClick={() => setKeyword("")}
          >
            <span className="material-symbols-outlined">close</span>
          </span>
        )}
        <span
          className="p-2 flex items-center justify-center w-20 bg-gray-100 hover:bg-gray-200 rounded-r-full cursor-pointer"
          onClick={handleSearch}
        >
          <span className="material-symbols-outlined">search</span>
        </span>
      </label>
      <span className="p-2 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
        <span className="material-symbols-outlined">mic</span>
      </span>
    </div>
  );
}

export default memo(SearchInput);

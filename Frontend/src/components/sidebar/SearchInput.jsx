import React from "react";

const SearchInput = () => {
  return (
    <div>
      <form className="flex items-center gap-2">
        <input
          type="text"
          placeholder="search "
          className="input input-bordered rounded-full"
        />
        <button type="submit " className="btn btn-circle bg-sky-500 text-white">
          Icon
        </button>
      </form>
    </div>
  );
};

export default SearchInput;

import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="search here..."
          className="bg-gray-700 text-white border-none outline-none w-[400px] rounded-md px-2 py-2"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </form>
    
    </div>
  );
};

export default Search;

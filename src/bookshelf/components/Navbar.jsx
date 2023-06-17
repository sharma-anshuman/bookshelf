import {
  faBackspace,
  faBackward,
  faBackwardStep,
  faSearch,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { GetBooks } from "../context/BooksContext";

const Navbar = () => {
  const loc = useLocation().pathname;
  const {dispatch} = GetBooks();
  const navigate = useNavigate();
  const [currSearch, setSearch] = useState("");
  const searchHandler = (event) => {
    setSearch(event.target.value);
    dispatch({type: "search", id: event.target.value})
  }

  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <h1
          onClick={() => navigate("/")}
          className="text-[1.3rem] cursor-pointer no-underline text-grey-darkest hover:text-blue-dark"
        >
          Bookshelf
        </h1>
      </div>

      {loc === "/search" && (
        <div>
          <input
            className="px-1 py-[3px] text-md border-gray-400 outline-none h-max-[5px] m-0 w-[20rem] border border-2 rounded"
            placeholder="Search"
            type="text"
            value={currSearch}
            onChange={searchHandler}
          />
        </div>
      )}

      <div className="flex items-center gap-8">
        {loc === "/" && (
          <h3
            onClick={() => navigate("/search")}
            className="text-xl cursor-pointer hover:underline"
          >
            Search <FontAwesomeIcon className="text-lg" icon={faSearch} />
          </h3>
        )}
        {loc === "/search" && (
          <h3
            onClick={() => navigate("/")}
            className="text-xl cursor-pointer hover:underline"
          >
            Back to main <FontAwesomeIcon icon={faStepBackward} />
          </h3>
        )}
        <h3 className="text-xl">{loc === "/" ? "Home" : "Search"}</h3>
      </div>
    </nav>
  );
};

export default Navbar;

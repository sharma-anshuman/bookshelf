import React from "react";
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import { GetBooks } from "../context/BooksContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";

const SearchBooks = () => {
  const { BooksCategories, Books } = GetBooks();
  const SearchedBooks = Books.filter(({ id }) =>
    BooksCategories.search.includes(id)
  );
  console.log("here", BooksCategories);
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex flex-wrap justify-left my-2 mx-3 gap-6">
        {SearchedBooks.map(({ id, img, name, author }) => (
          <BookCard id={id} img={img} name={name} author={author} />
        ))}
      </div>
      {SearchedBooks.length === 0 && (
        <div className="text-center text-3xl font-[500] mt-[10%]">
          <h1>
            Nothing to show here <FontAwesomeIcon icon={faSmile} />
          </h1>
        </div>
      )}
    </React.Fragment>
  );
};

export default SearchBooks;

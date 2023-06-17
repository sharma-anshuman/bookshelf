import React from "react";
import { GetBooks } from "../context/BooksContext";
import BookCard from "./BookCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";

const ShelfSection = ({ heading, type }) => {
  const { Books, BooksCategories } = GetBooks();
  const SectionBooks = Books.filter(({ id }) =>
    BooksCategories[type].includes(id)
  );
  console.log(Books, SectionBooks, BooksCategories);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-[600]">{heading}</h1>
      <hr />
      {SectionBooks.length === 0 && (
        <h2 className="text-xl">
          Nothing here <FontAwesomeIcon icon={faSmile} />
        </h2>
      )}
      <div className="flex flex-wrap justify-left my-2 mx-3 gap-6">
        {SectionBooks.map(({ id, img, name, author }) => (
          <BookCard id={id} img={img} name={name} author={author} />
        ))}
      </div>
    </div>
  );
};

export default ShelfSection;

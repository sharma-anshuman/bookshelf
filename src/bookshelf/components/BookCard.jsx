import React from "react";
import { GetBooks } from "../context/BooksContext";

const BookCard = ({ id, name, img, author }) => {
  const { dispatch, BooksCategories: cate } = GetBooks();
  const getCurrType = () => {
    if (cate.none.includes(id)) return "none";
    if (cate.reading.includes(id)) return "reading";
    if (cate.read.includes(id)) return "read";
    if (cate.want.includes(id)) return "want";
  };
  const currType = getCurrType(id);
  const handleChange = (event) => {
    let where = event.target.value,
      from = currType[0];
    if (where === "reading") where = "c";
    if (currType === "reading") from = "c";
    where = where[0];
    dispatch({ id: id, type: `${from}t${where}` });
  };
  return (
    <div className="w-[10rem]" id={id}>
      <img className="w-[10rem] h-[14rem]" src={img} alt="book image" />
      <div className="flex p-1 flex-col">
        <h2 className="text-lg">{name}</h2>
        <p className="text-sm">{author}</p>
        <select
          value={currType}
          onChange={handleChange}
          className="p-[3px] text-sm rounded bg-gray-100 w-fit"
        >
          <option value="none">None</option>
          <option value="reading">Reading</option>
          <option value="want">Want to read</option>
          <option value="read">Read</option>
        </select>
      </div>
    </div>
  );
};

export default BookCard;

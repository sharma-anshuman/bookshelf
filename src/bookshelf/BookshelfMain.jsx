import React from "react";
import BookshelfRoutes from "./BookshelfRoutes";
import { BrowserRouter } from "react-router-dom";
import BooksContext from "./context/BooksContext";

const BookshelfMain = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <BooksContext>
          <BookshelfRoutes />
        </BooksContext>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default BookshelfMain;

import React, { createContext, useContext, useState, useReducer } from "react";
import { Books } from "../db/Books";
const MainBooksContext = createContext();

const BooksContext = ({ children }) => {
  const HandleCategories = (acc, { type, id }) => {
    switch (type) {
      case "search": {
        return id.length !== 0
          ? {
              ...acc,
              search: [
                ...Books.filter(({ name }) =>
                  name.toLowerCase().includes(id.toLowerCase())
                ).map(({ id: i }) => i),
              ],
              searchQuery: id
            }
          : { ...acc, search: [], searchQuery: id };
      }

      case "ntc": {
        return {
          ...acc,
          none: [...acc.none.filter((num) => num != id)],
          reading: [...acc.reading, id],
        };
      }
      case "ntw": {
        return {
          ...acc,
          none: [...acc.none.filter((num) => num != id)],
          want: [...acc.want, id],
        };
      }
      case "ntr": {
        return {
          ...acc,
          none: [...acc.none.filter((num) => num != id)],
          read: [...acc.read, id],
        };
      }

      case "ctn": {
        return {
          ...acc,
          reading: [...acc.reading.filter((num) => num != id)],
          none: [...acc.none, id],
        };
      }
      case "ctw": {
        return {
          ...acc,
          reading: [...acc.reading.filter((num) => num != id)],
          want: [...acc.want, id],
        };
      }
      case "ctr": {
        return {
          ...acc,
          reading: [...acc.reading.filter((num) => num != id)],
          read: [...acc.read, id],
        };
      }

      case "wtn": {
        return {
          ...acc,
          want: [...acc.want.filter((num) => num != id)],
          none: [...acc.none, id],
        };
      }
      case "wtc": {
        return {
          ...acc,
          want: [...acc.want.filter((num) => num != id)],
          reading: [...acc.reading, id],
        };
      }
      case "wtr": {
        return {
          ...acc,
          want: [...acc.want.filter((num) => num != id)],
          read: [...acc.read, id],
        };
      }

      case "rtn": {
        return {
          ...acc,
          read: [...acc.read.filter((num) => num != id)],
          none: [...acc.none, id],
        };
      }
      case "rtc": {
        return {
          ...acc,
          read: [...acc.read.filter((num) => num != id)],
          reading: [...acc.reading, id],
        };
      }
      case "rtw": {
        return {
          ...acc,
          read: [...acc.read.filter((num) => num != id)],
          want: [...acc.want, id],
        };
      }
    }
  };

  const getFilteredBooks = (curr) => {
    return Books.filter(({ type }) => type === curr).map(({ id }) => id);
  };

  const [BooksCategories, dispatch] = useReducer(HandleCategories, {
    none: [...getFilteredBooks("none")],
    reading: [...getFilteredBooks("reading")],
    read: [...getFilteredBooks("read")],
    want: [...getFilteredBooks("want")],
    searchQuery: "",
    search: [],
  });

  const elements = { Books, BooksCategories, dispatch };

  return (
    <MainBooksContext.Provider value={elements}>
      {children}
    </MainBooksContext.Provider>
  );
};

export const GetBooks = () => {
  return useContext(MainBooksContext);
};

export default BooksContext;

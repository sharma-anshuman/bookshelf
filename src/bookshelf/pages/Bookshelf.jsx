import React from "react";
import Navbar from "../components/Navbar";
import ShelfSection from "../components/ShelfSection";

const Bookshelf = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="p-7 flex flex-col gap-8">
        <ShelfSection heading="Currently Reading" type="reading" />
        <ShelfSection heading="Want to read" type="want" />
        <ShelfSection heading="Done Reading" type="read" />
      </div>
    </React.Fragment>
  );
};

export default Bookshelf;

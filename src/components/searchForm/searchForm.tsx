import "./searchForm.css";
import React, { useRef } from "react";

type searchProps = {
  inputReader: (bookName: string) => void;
};

const SearchForm: React.FC<searchProps> = (props) => {
  const searchFieldRef = useRef<HTMLInputElement>(null);

  const submitHandle = (event: React.FormEvent) => {
    event.preventDefault();
    const BookNameEntered = searchFieldRef.current!.value;
    if (BookNameEntered.trim().length === 0) {
      alert("No Book Name Entered");
    }
    props.inputReader(BookNameEntered);
  };

  return (
    <div>
      <p className="p_form">
        "You can never get a cup of tea large enough or a book long enough to
        suit me.” – C.S. Lewis
      </p>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          id="text"
          placeholder="  אני מחפש את הספר..."
          ref={searchFieldRef}
        ></input>
        <button type="submit">חיפוש</button>
      </form>
    </div>
  );
};

export default SearchForm;

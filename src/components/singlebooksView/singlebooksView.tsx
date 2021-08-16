import "./singlebooksView.css";
import React from "react";
import BookInfo from "../typeRef/bookInfo";

const SingleBookDetails: React.FC<{ bookEditionInfo: BookInfo }> = (props) => {
  let book = props.bookEditionInfo;
  return (
    <div className="singlebookView">
      <img
        className="singlebookImg"
        src={book.ThumbnailUrl}
        alt="singleBookImage"
      />
      <h2 className="singlebookName">
        <span className="bookM">שם הספר: </span> {book.DisplayName}
      </h2>
      <p>
        <span className="bookM">נכתב על ידי: </span>
        {book.DisplayAuthor}
      </p>
    </div>
  );
};

export default SingleBookDetails;

import "./bookList.css";
import { useEffect, useState } from "react";
import BookDetails from "../listbooksView/listbooksView";
import BookEditionsApi from "../../apiCalls/BookEditionsApi";
import BookInfo from "../typeRef/bookInfo";

const BookList: React.FC<{ bookTitle: string }> = () => {
  const [receivedBookEditions, setReceivedBookEditions] = useState<BookInfo[]>(
    []
  );

  useEffect(() => {
    BookEditionsApi.GetAllEditions().then(setReceivedBookEditions);
  }, []);

  return (
    <div>
      {receivedBookEditions === null ? (
        <h1>Waiting For Your List</h1>
      ) : (
        <div className="bookInfo">
          {receivedBookEditions.map((book) => {
            return <BookDetails bookEditionInfo={book} key={book.Id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default BookList;

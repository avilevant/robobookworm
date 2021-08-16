import "./listbooksView.css";
import { Link } from "react-router-dom";
import BookInfo from "../typeRef/bookInfo";
import RouteConstants from "../../routing/RouteConstants";

const BookDetails: React.FC<{ bookEditionInfo: BookInfo; key: number }> = (
  props
) => {
  let book = props.bookEditionInfo;
  return (
    <Link
      to={`/${RouteConstants.BookEditionPagePath}/${props.bookEditionInfo.Id}`}
    >
      <div className="bookView">
        <img className="bookImg" src={book.ThumbnailUrl} alt="bookImage" />
        <h2 className="bookName">{book.DisplayName}</h2>
        <p>{book.DisplayAuthor}</p>
        <p>{book.Price}</p>
      </div>
    </Link>
  );
};

export default BookDetails;

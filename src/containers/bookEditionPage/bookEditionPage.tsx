import "./bookEditionPage.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ErrorBoundary } from "react-error-boundary";
import SingleBookDetails from "../../components/singlebooksView/singlebooksView";
import BookInfo from "../../components/typeRef/bookInfo";
import BookEditionsApi from "../../apiCalls/BookEditionsApi";
import Header from "../../components/header/header";
import ErrorFallback from "../../components/errorHandle/errorHandle";

const BookEditionPage: React.FC = () => {
  let { id } = useParams<{ id: string }>();
  const [state, setState] = useState<{ isLoaded: Boolean; book?: BookInfo }>({
    isLoaded: false,
    book: undefined,
  });

  useEffect(() => {
    BookEditionsApi.GetBookEdition(id).then((book) =>
      setState({ isLoaded: true, book: book })
    );
  }, [id]);

  let bookElement = <h1>wait for it...</h1>;
  if (state.isLoaded) {
    bookElement = state.book ? (
      <SingleBookDetails bookEditionInfo={state.book} />
    ) : (
      <h1>Book not found</h1>
    );
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div>
          <Header />
          <Link to="/">
            <button className="returnToSearchButton">
              חזרה לעמוד חיפוש הספרים
            </button>
          </Link>
        </div>

        <div>{bookElement}</div>
      </motion.div>
    </ErrorBoundary>
  );
};

export default BookEditionPage;

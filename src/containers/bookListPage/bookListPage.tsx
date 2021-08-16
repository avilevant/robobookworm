import { useState } from "react";
import { motion } from "framer-motion";
import { ErrorBoundary } from "react-error-boundary";
import BookList from "../../components/bookList/bookList";
import SearchForm from "../../components/searchForm/searchForm";
import Header from "../../components/header/header";
import ErrorFallback from "../../components/errorHandle/errorHandle";

const BookListPage = () => {
  const [bookTitle, setBookTitle] = useState("");

  const bookTitleReceiver = (input: string) => {
    console.log(input);
    return setBookTitle(input);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header />
        <SearchForm inputReader={bookTitleReceiver} />
        <BookList bookTitle={bookTitle} />
      </motion.div>
    </ErrorBoundary>
  );
};

export default BookListPage;

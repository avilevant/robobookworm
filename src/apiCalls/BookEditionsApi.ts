import BookInfo from "../components/typeRef/bookInfo";

class BookEditionsApi {
  static GetAllEditions = async () => {
    const res = await fetch(
      process.env.REACT_APP_BOOK_SERVICE_URL + "/BookEditions"
    );
    return await res.json();
  };

  static GetBookEdition = async (id: string) => {
    const res = await BookEditionsApi.GetAllEditions();
    const filteredData = res.filter((el: BookInfo) => el.Id === parseInt(id));

    return filteredData.length > 0 ? filteredData[0] : null;
  };
}

export default BookEditionsApi;

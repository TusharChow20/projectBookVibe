import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utilites/localStorageData";
import Book from "../Book/Book";
import { MoveDown } from "lucide-react";
const ListedBooks = () => {
  const [readDoc, setReadDoc] = useState([]);
  const [sorting, setSorting] = useState("");
  const { data } = useLoaderData();
  useEffect(() => {
    const stroedData = getStoredBook();
    const fetchIdBooks = stroedData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      fetchIdBooks.includes(book.bookId)
    );
    setReadDoc(myReadList);
  }, []);

  const handleSort = (sortType) => {
    setSorting(sortType);
    if (sortType === "Pages") {
      const sortedPages = [...readDoc].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadDoc(sortedPages);
    } else {
      const sortedPages = [...readDoc].sort((a, b) => a.rating - b.rating);
      setReadDoc(sortedPages);
    }
  };
  return (
    <div>
      <div className="dropdown flex items-center justify-center mt-10">
        <div tabIndex={0} role="button" className="btn m-1 bg-green-600 ">
          Sort By: {sorting ? sorting : ""} <MoveDown></MoveDown>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => handleSort("Pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("Ratings")}>Ratings</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>Read Books : {readDoc.length}</h2>
          {readDoc.map((dataSolo) => (
            <Book eachData={dataSolo}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utilites/localStorageData";
import Book from "../Book/Book";
const ListedBooks = () => {
  const [readDoc, setReadDoc] = useState([]);
  const { data } = useLoaderData();
  useEffect(() => {
    const stroedData = getStoredBook();
    const fetchIdBooks = stroedData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      fetchIdBooks.includes(book.bookId)
    );
    setReadDoc(myReadList);
  }, []);

  return (
    <div>
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

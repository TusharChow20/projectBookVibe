import { Divide } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

const getStoredBook = () => {
  const storedBook = localStorage.getItem("readBooks");
  if (storedBook) {
    const storedData = JSON.parse(storedBook);
    return storedData;
  } else {
    return [];
  }
};

const addToLocalStorage = (id) => {
  const storedBook = getStoredBook();

  if (storedBook.includes(id)) {
    toast.error("You Already Read The Book");
  } else {
    storedBook.push(id);

    const storeStr = JSON.stringify(storedBook);
    localStorage.setItem("readBooks", storeStr);
    toast.success("Book Added to Read List!");
  }
};

export { addToLocalStorage, getStoredBook };

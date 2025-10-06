import { Divide } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
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
    MySwal.fire({
      title: "You Already Read The Book",
      text: "Book is in you Book List. Try New Book.",
      icon: "info",
    });
  } else {
    storedBook.push(id);

    const storeStr = JSON.stringify(storedBook);
    localStorage.setItem("readBooks", storeStr);
    toast.success("Book Added to Read List!");
    MySwal.fire({
      title: "Lets Read the Book!",
      text: "You Have Done IT",
      icon: "success",
    });
  }
};

export { addToLocalStorage, getStoredBook };

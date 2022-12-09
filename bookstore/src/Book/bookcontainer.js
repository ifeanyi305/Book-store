import React from "react";
import BookList from "./BookList";
import FormInput from "./FormInput";

const BookContainer = () => {
  const books = [
      {
        title: 'ifeanyi',
        author: "merchant of venice",
        completed: true
      },
      {
        title: 'joseph',
        author: "things fall apart",
        completed: true
      },
      {
        title: 'antony',
        author: "go to the ant",
        completed: true
      }
    ]
    return (
      <BookList books={books} />,
      <FormInput />
    );
}

export default BookContainer

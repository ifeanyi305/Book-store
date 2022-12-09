import React from "react";
import BookList from "./BookList";
import FormInput from "./FormInput";
import { v4 as uuid4} from 'uuid'

const BookContainer = () => {
  const books = [
      {
        title: 'ifeanyi',
        author: "merchant of venice",
        completed: true,
        id: uuid4()
      },
      {
        title: 'joseph',
        author: "things fall apart",
        completed: true,
        id: uuid4()
      },
      {
        title: 'antony',
        author: "go to the ant",
        completed: true,
        id: uuid4()
      }
    ]
    return (
      <div>
        <BookList books={books} />,
        <FormInput />
      </div>
    );
}

export default BookContainer

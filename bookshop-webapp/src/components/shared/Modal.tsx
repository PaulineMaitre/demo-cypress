import React, {useState} from "react";
import {Book} from "../../domain/Book";
import { v4 as uuidv4 } from 'uuid';

const Modal: any = ({
  onClose,
  id,
  onSubmit = (book: Book) => book
}: any) => {

  const [title, setTitle] = useState<string>("")
  const [author, setAuthor] = useState<string>("")
  const [publishDate, setPublishDate] = useState<string>("")
  const [quantity, setQuantity] = useState<number>(0)

  const handleSubmit = (): void => {
    const book : Book = {
      id: uuidv4(),
      title: title,
      author: author,
      publish_date: publishDate,
      quantity: quantity
    }
    // console.log('book', book)
    onSubmit(book)
    onClose()
  }

  return (
    <div id={id} className="fixed z-50 top-0 right-0 left-0 h-full">
      <div className="text-white bg-slate-700 rounded-lg mx-auto w-[400px] relative p-5 mt-[30vh]">
        <div className="relative"
            onClick={onClose}
        > <span className="close-button text-gray-50 right-0 hover:bg-gray-800 rounded-lg p-1.5"/></div>
        <h1 className="font-medium text-lg mb-3">Ajouter un livre</h1>
        <form className="text-sm" onSubmit={handleSubmit}>
          <label>Titre</label>
          <input type="text" name="title" id="book-title"
                 value={title}
                 onChange={(e): void => setTitle(e.target.value)}
                 className="border rounded-lg focus:border-blue-500 w-full p-2 bg-gray-600 border-gray-500 placeholder-gray-400 mt-2 mb-2"
                 required={true}
          />
          <label>Auteur</label>
          <input type="text" name="author" id="book-author"
                 value={author}
                 onChange={(e): void => setAuthor(e.target.value)}
                 className="border rounded-lg focus:border-blue-500 w-full p-2 bg-gray-600 border-gray-500 placeholder-gray-400 mt-2 mb-2"
                 required={true}
          />
          <label>Année de publication</label>
          <input type="text" name="publish-date" id="book-publish-date"
                 value={publishDate}
                 onChange={(e): void => setPublishDate(e.target.value)}
                 className="border rounded-lg focus:border-blue-500 w-full p-2 bg-gray-600 border-gray-500 placeholder-gray-400 mt-2 mb-2"
                 required={true}
          />
          <label>Quantité en stock</label>
          <input type="number" name="quantity" id="book-quantity"
                 value={quantity}
                 onChange={(e): void => setQuantity(parseInt(e.target.value))}
                 className="border rounded-lg focus:border-blue-500 w-full p-2 bg-gray-600 border-gray-500 placeholder-gray-400 mt-2 mb-2"
                 required={true}
          />
          <button id="submit-btn" type="submit"
                  className="bg-teal-200 h-[40px] rounded-md text-black w-full mt-4"
          >Valider</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

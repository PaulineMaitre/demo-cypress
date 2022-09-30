import React, {useEffect, useState} from "react";
import {Book} from "../../domain/Book";

const Modal: any = ({
  onClose,
  id,
  onSubmit = (book: Book) => book
}: any) => {

  const [title, setTitle] = useState<string>()
  const [author, setAuthor] = useState<string>()
  const [publishDate, setPublishDate] = useState<number>()
  const [quantity, setQuantity] = useState<number>(0)

  const [valid, setValid] = useState<boolean>(false)

  const handleSubmit = (): void => {
    if (valid) {
      const book: Book = {
        id: 0,
        title: title || '',
        codeName: '',
        author: author || '',
        publishDate: publishDate || 2022,
        quantity: quantity
      }
      // console.log('book', book)
      onSubmit(book)
      onClose()
    }
  }

  useEffect((): void => {
    if (title && title !== '' && author && author !== '' && publishDate && quantity && quantity !== 0) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [title, author, publishDate, quantity])

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
          <input type="number" name="publish-date" id="book-publish-date"
                 value={publishDate}
                 onChange={(e): void => {
                   if (e.target.value) {
                     setPublishDate(parseInt(e.target.value))
                   } else {
                     setPublishDate(0)
                   }
                 }}
                 className="border rounded-lg focus:border-blue-500 w-full p-2 bg-gray-600 border-gray-500 placeholder-gray-400 mt-2 mb-2"
                 required={true}
          />
          <label>Quantité en stock</label>
          <input type="number" name="quantity" id="book-quantity"
                 value={quantity}
                 onChange={(e): void => {
                   if (e.target.value) {
                     setQuantity(parseInt(e.target.value))
                   } else {
                     setQuantity(0)
                   }
                 }}
                 className="border rounded-lg focus:border-blue-500 w-full p-2 bg-gray-600 border-gray-500 placeholder-gray-400 mt-2 mb-2"
                 required={true}
          />
          <button id="submit-btn" type="submit"
                  className="bg-teal-200 h-[40px] rounded-md text-black w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!valid}
          >Valider</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

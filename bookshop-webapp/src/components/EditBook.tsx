import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Book} from "../domain/Book";
import {getBook, updateBook} from "../service/BookService";
import {toast} from "react-toastify";

export const EditBook: React.FC = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState<Book>()

    const [title, setTitle] = useState<string>()
    const [author, setAuthor] = useState<string>()
    const [publishDate, setPublishDate] = useState<number>()
    const [quantity, setQuantity] = useState<number>(0)

    const [valid, setValid] = useState<boolean>(false)

    useEffect((): void => {
        if (id) {
            getBook(id).then((res: Book | Error) => {
                if (!(res instanceof Error)) {
                    setBook(res);
                    setTitle(res.title)
                    // setCodeName(res.codeName)
                    setAuthor(res.author)
                    setPublishDate(res.publishDate)
                    setQuantity(res.quantity)
                }
            })
        }
    }, [])

    const edit = (): void => {
        if (id && book && valid) {
            const updatedBook: Book = {
                id: book?.id,
                title: title ? title : book.title,
                author: author ? author : book.author,
                codeName: book?.codeName,
                publishDate: publishDate ? publishDate : book.publishDate,
                quantity: quantity ? quantity : book.quantity,
            }
            updateBook(id, updatedBook).then((res) => {
                if (res instanceof Error) {
                    toast("Erreur lors de la modification du livre", {autoClose: 5000})
                } else {
                    navigate(`/books/${id}/view`)
                }
            })
        }
    }

    useEffect((): void => {
        if (title && title !== '' && author && author !== '' && publishDate && publishDate !== 0 && quantity && quantity !== 0) {
            setValid(true)
        } else {
            setValid(false)
        }
    }, [title, author, publishDate, quantity])

    return (
        <div className="p-4 lg:px-[15%] lg:py-[2%]">
            <div className="bg-teal-50 mx-auto rounded-md shadow-sm p-8">
                <div>
                    <label>Titre</label>
                    <input type="text" name="title"
                           id="book-title"
                           data-testid="book-title"
                           value={title}
                           onChange={(e): void => setTitle(e.target.value)}
                           className="border rounded-lg focus:border-blue-500 w-full p-2 bg-teal-50 border-slate-800 placeholder-gray-400 mt-2 mb-2"
                           required={true}
                    />
                    <label>Auteur</label>
                    <input type="text" name="author"
                           id="book-author"
                           data-testid="book-author"
                           value={author}
                           onChange={(e): void => setAuthor(e.target.value)}
                           className="border rounded-lg focus:border-blue-500 w-full p-2 bg-teal-50 border-slate-800 placeholder-gray-400 mt-2 mb-2"
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
                           className="border rounded-lg focus:border-blue-500 w-full p-2 bg-teal-50 border-slate-800 placeholder-gray-400 mt-2 mb-2"
                           required={true}
                    />
                    <label>Quantité en stock</label>
                    <input type="number" name="quantity"
                           id="book-quantity"
                           data-testid="book-quantity"
                           value={quantity}
                           onChange={(e): void => {
                               if (e.target.value) {
                                   setQuantity(parseInt(e.target.value))
                               } else {
                                   setQuantity(0)
                               }
                           }}
                           className="border rounded-lg focus:border-blue-500 w-full p-2 bg-teal-50 border-slate-800 placeholder-gray-400 mt-2 mb-2"
                           required={true}
                    />
                    <div className="flex justify-between">
                        <button
                            id="cancel-edit-btn"
                            data-testid="cancel-edit-btn"
                            type="submit"
                            className="bg-slate-300 h-[40px] rounded-md text-black w-[20%] mt-4"
                            disabled={!valid}
                            onClick={(): void => navigate(`/books/${id}/view`)}
                        >
                            Annuler
                        </button>
                        <button
                            id="submit-edit-btn"
                            data-testid="submit-edit-btn"
                            type="submit"
                            className="bg-teal-200 h-[40px] rounded-md text-black w-[20%] mt-4 disabled:bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!valid}
                            onClick={edit}
                        >
                            Sauvegarder
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React, {useEffect, useState} from "react";
import NoCover from "../assets/book_cover.png"
import {useNavigate, useParams} from "react-router-dom";
import {Book} from "../domain/Book";
import {deleteBook, getBook} from "../service/BookService";
import {toast} from "react-toastify";

export const ViewBook: React.FC = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState<Book>()

    const refreshBook = (): void => {
        if (id) {
            getBook(id).then((res: Book | Error) => {
                if (!(res instanceof Error)) {
                    setBook(res);
                }
            })
        }
    }

    useEffect((): void => {
        refreshBook()
    }, [])

    const remove = (): void => {
        if (id) {
            deleteBook(id).then((res: Book | Error) => {
                if (res instanceof Error) {
                    toast("Erreur lors de la suppression du livre", {autoClose: 5000})
                } else {
                    navigate(`/`)
                }
            })
        }
    }

    return (
        <div className="p-4 lg:px-[15%] lg:py-[2%]">
            <div className="bg-teal-50 mx-auto rounded-md shadow-sm p-8">
                <div className="flex flex-row">
                    <img className="w-[40%]" src={NoCover}/>
                    <div className="w-[60%] ml-[20%] flex flex-col justify-between">
                        {book ? (<>
                            <div>
                                <div className="mt-4 mb-4" id="title-label" data-testid="title-label"><span
                                    className="font-semibold mr-4">Titre : </span>{book.title}
                                </div>
                                <div className="mb-4" id="author-label" data-testid="author-label"><span
                                    className="font-semibold mr-4">Auteur :  </span>{book.author}
                                </div>
                                <div className="mb-4" id="publish-date-label" data-testid="publish-date-label"><span
                                    className="font-semibold mr-4">Année de publication : </span> {book.publishDate}
                                </div>
                                <div className="mb-4" id="quantity-label" data-testid="quantity-label"><span
                                    className="font-semibold mr-4">Quantité en stock : </span> {book.quantity}</div>
                            </div>
                            <div className="flex justify-between">
                                <button
                                    id="edit-book-btn"
                                    data-testid="edit-book-btn"
                                    className="bg-teal-200 h-[50px] rounded-md px-4"
                                    onClick={(): void => navigate(`/books/${id}/edit`)}
                                >
                                    Modifier
                                </button>
                                <button
                                    id="delete-book-btn"
                                    data-testid="delete-book-btn"
                                    className="bg-red-200 h-[50px] rounded-md px-4"
                                    onClick={remove}
                                >
                                    Supprimer
                                </button>
                            </div>
                        </>) : 'No data'}
                    </div>
                </div>
            </div>
        </div>
    );
}

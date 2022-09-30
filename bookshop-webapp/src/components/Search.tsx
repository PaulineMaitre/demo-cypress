import React, {useState} from "react";
import Modal from "./shared/Modal";
import {Book} from "../domain/Book";
import {createBook} from "../service/BookService";
import {toast} from "react-toastify";

interface Props {
    onChange: (query: string) => void;
    onCreate: () => void;
}

export const Search: React.FC<Props> = (props: Props) => {

    const [showCreateBookModal, setShowCreateBookModal] = useState<boolean>(false)

    const handleInputChange = (e: any): void => {
        props.onChange(e.target.value)
    }

    const addBook = (book: Book): void => {
        createBook(book).then((res): void => {
            if (res instanceof Error) {
                toast("Erreur lors de la création du livre", { autoClose: 5000 })
            }
            props.onCreate()
            }
        )
    }

    return (
        <div className="bg-teal-50 mx-auto rounded-md shadow-sm p-6 mb-6">
            <div className="bg-slate-200 rounded-md min-h-[50px] p-2 mb-4">
                <input
                    id="search-book-input"
                    type="text"
                    className="w-full bg-inherit p-3 focus:outline-none font-semibold text-gray-600 text-lg"
                    placeholder="Rechercher un livre, un auteur ..."
                    onChange={handleInputChange}
                />
            </div>
            <button
                id="add-book-btn"
                className="bg-teal-200 h-[40px] rounded-md w-1/2 lg:w-1/6"
                onClick={(): void => setShowCreateBookModal(true)}
            >
                Ajouter
            </button>
            {showCreateBookModal && (
                <Modal
                    id="create-book-modal"
                    onClose={(): void => setShowCreateBookModal(false)}
                    title={"Nouveau livre"}
                    onSubmit={(newBook: Book): void => addBook(newBook)}
                />
                /*<div id="popup-modal"
                     className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button"
                                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                    data-modal-toggle="popup-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </button>
                            <div className="p-6 text-center">
                                <svg className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure
                                    you want to delete this product?</h3>
                                <button data-modal-toggle="popup-modal" type="button"
                                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                    Yes, I'm sure
                                </button>
                                <button data-modal-toggle="popup-modal" type="button"
                                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No,
                                    cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>*/
            )}
        </div>
    );
}

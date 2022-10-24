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
                    data-testid="search-book-input"
                    type="text"
                    className="w-full bg-inherit p-3 focus:outline-none font-semibold text-gray-600 text-lg"
                    placeholder="Rechercher un livre, un auteur ..."
                    onChange={handleInputChange}
                />
            </div>
            <button
                id="add-book-btn"
                data-testid="add-book-btn"
                className="bg-teal-200 h-[40px] rounded-md w-1/2 lg:w-1/6"
                onClick={(): void => setShowCreateBookModal(true)}
            >
                Ajouter
            </button>
            {showCreateBookModal && (
                <Modal
                    id="create-book-modal"
                    data-testid="create-book-modal"
                    onClose={(): void => setShowCreateBookModal(false)}
                    title={"Nouveau livre"}
                    onSubmit={(newBook: Book): void => addBook(newBook)}
                />
            )}
        </div>
    );
}

import React, {useState} from "react";
import Modal from "./shared/Modal";

interface Props {
    onChange: (query: string) => void;
}

export const Search: React.FC<Props> = (props: Props) => {

    const [showCreateBookModal, setShowCreateBookModal] = useState<boolean>(false)

    const handleInputChange = (e: any): void => {
        props.onChange(e.target.value)
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
                    onClose={(): void => setShowCreateBookModal(false)}
                    title={"Nouveau livre"}
                />
            )}
        </div>
    );
}

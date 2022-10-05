import React from "react";
import {Book} from "../domain/Book";
import {useNavigate} from "react-router-dom";

interface Props {
    book: Book;
}

export const BookCard: React.FC<Props> = (props: Props) => {
    const navigate = useNavigate();
    const book = props.book

    return (
        <div key={book.id} id={`book-card-${book.id}`} className="bg-teal-50 rounded-md p-3 shadow-sm cursor-pointer" onClick={() : void => navigate(`/books/${book.id}/view`)}>
            <div className="flex flex-row">
                <img className="w-24 h-24 rounded-full mr-auto"
                     src={require(`../assets/book.png`)}
                    // src={require(`../assets/${book.name}.png`)}
                     alt=""/>
                <div id="book-name" className="flex-col text-right font-semibold text-lg text-slate-900">
                    {book.title}<br/>
                    <span id="book-author" className="text-sm text-gray-400">{book.author}</span>
                </div>
            </div>
        </div>
    );
}

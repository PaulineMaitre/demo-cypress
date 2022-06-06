import React from "react";
import {Book} from "../domain/Book";

interface Props {
    book: Book;
}

export const BookCard: React.FC<Props> = (props: Props) => {
    const book = props.book

    return (
        <div key={book.id} className="bg-white rounded-md p-3 shadow-sm cursor-pointer">
            <div className="flex flex-row">
                <img className="w-24 h-24 rounded-full mr-auto"
                     src={require(`../assets/logo.png`)}
                     // src={require(`../assets/${book.name}.png`)}
                     alt=""/>
                <div className="flex-col text-right font-semibold text-lg">
                    {book.name}<br/>
                    <span className="text-sm text-gray-400">{book.author}</span>
                </div>
            </div>
        </div>
    );
}

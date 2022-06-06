import React from "react";

interface Props {
    onChange: (query: string) => void;
}

export const Search: React.FC<Props> = (props: Props) => {

    const handleInputChange = (e: any): void => {
        props.onChange(e.target.value)
    }

    return (
        <div className="bg-white mx-auto rounded-md shadow-sm p-6 mb-6">
            <div className="bg-slate-200 rounded-md min-h-[50px] p-2 mb-4">
                <input
                    type="text"
                    className="w-full bg-inherit p-3 focus:outline-none font-semibold text-gray-600 text-lg"
                    placeholder="Rechercher un livre, un auteur ..."
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
}

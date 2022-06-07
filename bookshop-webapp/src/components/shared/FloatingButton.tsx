import React from "react";
import ArrowUp from "../../assets/arrow-up-solid.svg"

export const FloatingButton: React.FC = () => {

    return (
        <a id="go-to-top-btn" href="#top"
           className="flex items-end ml-auto mr-5 bg-teal-200 rounded-full cursor-pointer w-[50px] h-[50px] fixed right-[2%] bottom-[4%] transition duration-700 ease-linear"
        >
            <img src={ArrowUp}
                 className="w-[30px] h-[30px] self-center mx-auto"
                 alt={"go-to-the-top"}/>
        </a>
    );
}

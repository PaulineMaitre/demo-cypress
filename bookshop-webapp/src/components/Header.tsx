import React from "react";
import appIcon from "../assets/logo.png"
import {useNavigate} from "react-router-dom";

export const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div id="top" className="bg-rose-400 shadow-sm p-3">
            <img
                alt="app-logo"
                className="rounded-full w-[50px] h-[50px] inline cursor-pointer mr-5"
                src={appIcon}
                onClick={() : void => navigate(`/`)}
            />
            <span className="font-semibold text-lg cursor-default">Book shop</span>
        </div>
    );
}

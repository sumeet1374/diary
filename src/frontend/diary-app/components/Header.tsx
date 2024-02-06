import React from "react";

export default function Header() {
    return <header className='flex justify-between bg-blue-800 shadow bg-gradient-to-r from-blue-800 m-1 rounded'>
        <div className="m-3 text-white">Diary</div>
        <ul className="hidden md:flex md:justify-evenly list-none m-3 ">
            <li><a href="#" className="p-2 text-white hover:text-gray-200 align-top">My Diary</a></li>
            <li><a href="#" className="p-2  text-white hover:text-gray-200 align-top">Welcome Sumeet</a>
                <div className="relative bg-white">
                    <ul className="absolute top-0 right-0 list-none bg-white border border-gray-500 ">
                        <li><a href="#" className="p-3 text-gray-700 hover:text-gray-900">Settings</a></li>
                        <li><a href="#" className="p-3 text-gray-700 hover:text-gray-900">Log Out</a></li>
                    </ul>
                </div>

            </li>
        </ul>
    </header>;
}
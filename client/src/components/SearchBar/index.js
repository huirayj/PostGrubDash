import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const SearchBar = () => {
    return (
        <div className="bg-gray-200">
            <div className="container h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <input type="text" className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Find a restaurant..." />
                    <div className="absolute top-4 right-3">
                        <FontAwesomeIcon className="text-gray-400 z-20 hover:text-gray-500" icon={faSearch} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
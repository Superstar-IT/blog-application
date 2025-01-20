import { useState } from "react";
import { useSearchContext } from "@/context/SearchContext";
import { hashtags } from "@/constants.js/hashtags";

export default function HashtagFilter() {
  const { selectedHashtag, setSelectedHashtag } = useSearchContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (hashtag) => {
    setSelectedHashtag(hashtag === selectedHashtag ? "" : hashtag);
    setIsOpen(false);
  };

  const handleClear = () => {
    setSelectedHashtag("");
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none"
      >
        {selectedHashtag ? selectedHashtag : "All"}
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <div
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => handleClear()}
            >
              All
            </div>
            {hashtags.map((hashtag) => (
              <div
                key={hashtag}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                  selectedHashtag === hashtag ? "bg-blue-600 text-white" : ""
                }`}
                onClick={() => handleClick(hashtag)}
              >
                {hashtag}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

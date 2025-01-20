import { createContext, useState, useContext } from "react";

// Create the context
const SearchContext = createContext();

// Create a provider component
export function SearchProvider({ children }) {
  const [selectedHashtag, setSelectedHashtag] = useState("");

  return (
    <SearchContext.Provider
      value={{
        selectedHashtag,
        setSelectedHashtag,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

// Custom hook for easier use
export function useSearchContext() {
  return useContext(SearchContext);
}

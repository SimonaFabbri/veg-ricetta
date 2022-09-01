import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchContext from "./SearchContext";
import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";

function App() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const updateQuery = (query) => {
    console.log("SEARCH UPDATED");
    setSearchQuery(query);
  };

  return (
    <SearchContext.Provider value={searchQuery}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home updateQuery={updateQuery} />}></Route>
          <Route path="/:id" element={<Recipe />}></Route>
        </Routes>
      </BrowserRouter>
    </SearchContext.Provider>
  );
}

export default App;

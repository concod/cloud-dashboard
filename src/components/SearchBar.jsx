// components/SearchBar.js
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={{ marginBottom: "20px", paddingTop: 20 }}>
      <TextField
        label="Search Resources"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default SearchBar;

function SearchBar({ searchTerm, onSearch }) {
    return (
      <div className="search-container">
      <span className="search-icon">🔍</span>
      <input
        className="search-bar"
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
       </div>
    );
  }
  
  export default SearchBar;
  
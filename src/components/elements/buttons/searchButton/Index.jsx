const SearchButton = ({ searchInput }) => {
  return (
    <div className="max-w-sm dark:bg-gray-200 bg-gray-900 rounded-xl min-h-fit flex justify-center items-center gap-1">
      <input
        type="text"
        placeholder="Search for Cities"
        className="w-full rounded-l-lg outline-none px-4 py-1 dark:bg-gray-200 dark:text-gray-900 bg-gray-900 text-white placeholder-gray-300 dark:placeholder-gray-600"
        onChange={(e) => searchInput(e.target.value)}
      />
      <span className="dark:text-gray-900 text-white text-2xl flex items-center px-3 cursor-pointer">
        <ion-icon name="search-outline"></ion-icon>
      </span>
    </div>
  );
};

export default SearchButton;

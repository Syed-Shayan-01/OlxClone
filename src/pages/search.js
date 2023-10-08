// import React from 'react';

// const SearchInput = ({ handleSearch }) => {
//   return (
//     <input
//       type="text"
//       placeholder="Search..."
//       onChange={(e) => handleSearch(e.target.value)}
//     />
//   );
// };

// export default SearchInput;



// import React, { useState } from 'react';
// import SearchInput from './search';
// import FilteredList from './filter';


// const Home = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   return (
//     <div>
//       <h1>Search Filter Example</h1>
//       <SearchInput handleSearch={handleSearch} />
//       <FilteredList items={items} searchQuery={searchQuery} />
//     </div>
//   );
// };

// export default Home;
'use client';
import SearchManufacturer from './SearchManufacturer';
import { useState } from 'react';

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState(''); // ['BMW', 'Audi', 'Mercedes'
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('searching...');
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;

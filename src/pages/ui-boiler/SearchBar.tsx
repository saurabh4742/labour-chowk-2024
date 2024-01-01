import React from 'react';
import { Input } from '@/components/ui/input';

function SearchBar({ setSearchQuery }) {
  
  return (
    <div className='flex justify-center w-full'>
      <Input className='bg-white shadow-md max-w-80 ring-2 ring-gray-900 ring-opacity-40' placeholder='Search...' onChange={(e) => setSearchQuery(e.target.value)} />
    </div>
  );
}

export default SearchBar;

import { Input } from '@/components/ui/input';

function LaborSearchBar() {
  
  return (
    <div className='flex justify-center w-full'>
      <Input className='bg-white shadow-md max-w-80 ring-2 ring-gray-900 ring-opacity-40' placeholder='Search...' onChange={(e) => (e.target.value)} />
    </div>
  );
}

export default LaborSearchBar;

import { useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from 'react';
import CoffeeCard from './components/CoffeeCard';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees , setCoffees] = useState(loadedCoffees);

  return (
    <>
      
      <h1 className='text-4xl text-purple-600 font-bold'>Coffee Store: {loadedCoffees.length}</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee = {coffee} />)
        }
      </div>
    </>
  )
}

export default App

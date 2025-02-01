import { useState } from 'react'
import SuperheroesCard from './components/SuperheroesCard.tsx'
import AddSuperheroCard from './components/AddSuperheroCard.tsx';

function App() {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddSuperhero = () => {
    setIsAdding(true);
  }

  const handleToggleList = () => {
    setIsAdding(false);
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      {isAdding ? 
      <AddSuperheroCard onToggleList={handleToggleList} /> : <SuperheroesCard onAddSuperhero={handleAddSuperhero} />
      
      }
    </div>
  )
}

export default App

import { useState } from 'react';
import ContextMarvel from './ContextMarvel';

function ProviderMarvel({ children }) {
  const [title, setTitle] = useState('');
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [loading, setLoading,] = useState(true);

  return (
    <ContextMarvel.Provider
      value={
        {
          title, setTitle,
          loading, setLoading,
          characters, setCharacters,
          comics, setComics,
        }
      }
    >
      {children}
    </ContextMarvel.Provider>
  );
}

export default ProviderMarvel;
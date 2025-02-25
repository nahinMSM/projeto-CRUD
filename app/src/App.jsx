import { useState } from 'react';
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import ItemSearch from "./components/ItemSearch";
import './App.css';
import useItems from './hooks/useItems';

function App() {
  const {items, loading, error, addItem, updateItem, deleteItem} = useItems();
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    const results = items.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h1>CRUD App</h1>
      {loading && <p>Carregando...</p>}
      {error && <p>Erro: {error.message}</p>}
      <Form addItem={addItem} />
      {/* Componente de busca */}
      
      <ItemList 
        items={items} 
        updateItem={updateItem} 
        deleteItem={deleteItem} 
      />

      <ItemSearch 
        search={search} 
        handleSearchChange={handleSearchChange} 
        handleSearch={handleSearch}
        results={searchResults} 
      />
    </div>
  );
}

export default App;

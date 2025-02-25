function ItemSearch({ search, handleSearchChange, handleSearch, results }) {
  return (
    <div>
      <h2>Buscar Itens</h2>
      <input
        type="text"
        placeholder="Buscar itens..."
        value={search}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearch}>Buscar</button>
      {/* Exibe os resultados somente após clicar no botão */}
      {results.length > 0 && (
        <ul>
          {results.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemSearch;
function ItemList({ items, updateItem, deleteItem }) {
  const handleUpdate = (id) => {
    const updatedTitle = prompt("Digite o novo título");
    const updatedDescription = prompt("Digite a nova descrição");
    if (updatedTitle && updatedDescription) {
      updateItem(id, { title: updatedTitle, description: updatedDescription });
    }
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div>
            <button onClick={() => handleUpdate(item.id)}>Atualizar</button>
            <button onClick={() => deleteItem(item.id)}>Deletar</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
import { useEffect, useState } from "react";
import { fetchItems, createItem, deleteItemById, updateItemById } from '../api/items'


function useItems() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError,] = useState(null);

  const fetchData = async () => {
    setLoading(true)
    try {
      const data = await fetchItems();
      setItems(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false)
    }
  };

  const addItem = async (newItem) => {
    try {
      await createItem(newItem);
      fetchData();
    } catch (error) {
      setError(error);
    }
  }

  const updateItem = async (id, updatedData) => {
    try {
      await updateItemById(id, updatedData);
      fetchData();
    } catch (error) {
      setError(error);
    }
  }

  const deleteItem = async (id) => {
    try {
      await deleteItemById(id);
      fetchData();
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { items, loading, error, addItem, updateItem, deleteItem };
};

export default useItems;
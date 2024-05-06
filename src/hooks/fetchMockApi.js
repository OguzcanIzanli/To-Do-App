import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      await fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error))
        .finally(setLoading(false));
    };

    fetchData();
  }, [url]);

  // Post data
  const postData = async (newData) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((res) => setData([...data, res]))
      .catch((error) => console.log(error));
  };

  // Change data

  const updateData = async (id, updatedData) => {
    // Fetch the existing data
    const existingData = await fetch(`${url}/${id}`).then((res) => res.json());
    console.log(existingData);
    console.log(updatedData);
    // Update the todos array in the existing data
    const updatedObject = {
      ...existingData,
      todos: [...existingData.todos, updatedData],
    };
    // console.log(updatedObject);
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedObject),
      });
      if (!response.ok) {
        throw new Error("Failed to update data");
      }
      const jsonData = await response.json();
      setData((prevData) =>
        prevData.map((item) => (item.id === id ? jsonData : item))
      );
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Data
  const deleteData = async (id) => {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setData(data.filter((item) => item.id !== id));
    } else {
      throw new Error("Failed to delete item");
    }
  };

  return { data, loading, postData, deleteData, updateData };
};

export default useFetch;

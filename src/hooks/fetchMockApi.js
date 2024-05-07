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

  // Post Data
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

  // Complete Data
  const completeData = async (clickedItem) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === clickedItem.id
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      )
    );
    await fetch(`${url}/${clickedItem.id}`, {
      method: "PUT",
      body: JSON.stringify({ isCompleted: !clickedItem.isCompleted }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  };

  // Change Data
  const changeData = async (changedItem) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === changedItem.id
          ? {
              ...item,
              content: changedItem.content,
              isEditible: false,
              isCompleted: false,
            }
          : item
      )
    );
    await fetch(`${url}/${changedItem.id}`, {
      method: "PUT",
      body: JSON.stringify({
        content: changedItem.content,
        isEditible: false,
        isCompleted: false,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  };

  // Delete Data
  const deleteData = async (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));

    await fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));
  };

  return {
    data,
    setData,
    loading,
    postData,
    completeData,
    changeData,
    deleteData,
  };
};

export default useFetch;

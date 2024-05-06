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

  return { data, loading, postData };
};

export default useFetch;

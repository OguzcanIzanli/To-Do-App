import "./List.style.css";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/fetchMockApi";
import { useUsername } from "../../context/UserContext";

const todoInitialValue = {
  content: "",
  isCompleted: false,
  isEditible: false,
};

const List = () => {
  const [toDo, setToDo] = useState(todoInitialValue);
  const { username } = useUsername();

  const url = `https://6319c72e6b4c78d91b4337fb.mockapi.io/todos`;
  const { data, updateData } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();

    // const loggedInUser = data.filter((item) => item.username == username);
    // console.log(loggedInUser);
    // updateData(1, loggedInUser[0].id);
  };

  return (
    <div className="toDoList">
      <h1>To Do List</h1>
      <form className="toDoInputForm" onSubmit={handleSubmit}>
        <input
          className={`toDoInput`}
          onChange={(e) => setToDo({ ...toDo, content: e.target.value })}
          value={toDo.content}
          placeholder="A New To Do"
        />
      </form>
    </div>
  );
};

export default List;

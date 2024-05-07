import "./List.style.css";
import { useState } from "react";
import useFetch from "../../hooks/fetchMockApi";

const todoInitialValue = {
  content: "",
  isCompleted: false,
  isEditible: false,
};

const List = () => {
  const [toDo, setToDo] = useState(todoInitialValue);
  const [changeTodo, setChangeTodo] = useState();
  const [selectedFilter, setSelectedFilter] = useState("All");

  const url = `https://6319c72e6b4c78d91b4337fb.mockapi.io/todos`;
  const { data, setData, postData, completeData, changeData, deleteData } =
    useFetch(url);

  // Post Todo
  const addToDo = (e) => {
    e.preventDefault();
    setToDo(todoInitialValue);
    postData(toDo);
  };

  // Complete Todo
  const completeToDo = (item) => {
    completeData(item);
  };

  // Edit Todo
  const editToDo = async (id, content) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isEditible: !item.isEditible } : item
      )
    );
    setChangeTodo(content);
  };

  // Save Todo
  const saveToDo = (item) => {
    item.content = changeTodo;
    changeData(item);
  };

  // Delete Todo
  const deleteToDo = (item) => {
    console.log(item);
    deleteData(item);
  };

  // Filter Todo
  const selection = (e) => {
    e.preventDefault();
    setSelectedFilter(e.target.value);
  };

  // Clear Completed

  const clearCompleted = () => {
    data.map((item) => {
      if (item.isCompleted === true) {
        deleteData(item.id);
      }
    });
  };

  return (
    <div className="toDoList">
      <h1>To Do List</h1>
      <form className="toDoInputForm" onSubmit={addToDo}>
        <input
          className={`toDoInput`}
          onChange={(e) => setToDo({ ...toDo, content: e.target.value })}
          value={toDo.content}
          placeholder="A New To Do"
        />
      </form>
      {data
        .filter(
          (item) =>
            item.isCompleted.toString() === selectedFilter ||
            "All" === selectedFilter
        )
        .map((item) => (
          <div key={item.id} className="toDoContainer">
            <div className="toDoItem">
              {!item.isEditible ? (
                <div
                  className={`content ${
                    item.isCompleted == true ? "completed" : ""
                  }`}
                  onClick={() => completeToDo(item)}
                >
                  {item.content}
                </div>
              ) : (
                <form>
                  <input
                    className={`edit-input ${item.isCompleted} `}
                    onChange={(e) => setChangeTodo(e.target.value)}
                    value={changeTodo}
                  />
                </form>
              )}
            </div>

            <div className="toDoBtns">
              {!item.isEditible ? (
                <i
                  className="fa-regular fa-pen-to-square"
                  onClick={() => editToDo(item.id, item.content)}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-floppy-disk"
                  onClick={() => saveToDo(item)}
                ></i>
              )}
              <i
                className="ESDbutton fa-regular fa-trash-can"
                onClick={() => deleteToDo(item.id)}
              ></i>
            </div>
          </div>
        ))}
      <div className="listFooter">
        <div className="numberOfItems">
          {data.filter((item) => item.isCompleted == false).length} Items Left
        </div>
        <div className="filterBtns">
          <button onClick={selection} value="All">
            All
          </button>
          <button onClick={selection} value="false">
            Active
          </button>
          <button onClick={selection} value="true">
            Completed
          </button>
        </div>
        {data.find((item) => item.isCompleted === true) && (
          <button onClick={clearCompleted}>Clear Completed</button>
        )}
      </div>
    </div>
  );
};

export default List;

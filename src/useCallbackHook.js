import React,{ useState,useCallback } from "react";
import Todos from "./Todos";

// export default function UseCallBackHook () {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   const increment = () => {
//       console.log("asdfgh")
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     console.log("asdfgh")
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <>
//       <Todos todos={todos} addTodo={addTodo} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };

export default function UseCallBackHook () {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
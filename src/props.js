import { useState } from "react";
import ReactDOM from "react-dom/client";

export default function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  const changeName = ()=>{
    setUser("James");
  }

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} changeName={changeName} />
    </>
  );
}

function Component2({ user , changeName }) {
  console.log(user);
  return (
    <>
      <h1 onClick={()=> changeName()}>Component 2</h1>
      <Component3 user={user} changeName={changeName} />
    </>
  );
}

function Component3({ user, changeName }) {
  return (
    <>
      <h1 onClick={()=> changeName()}>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  console.log(user);
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
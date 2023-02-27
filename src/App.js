import logo from './logo.svg';
import './App.css';
import React from 'react'
import ArrayDestructure,{ArrayDestructureData} from './ArrayDestructure'
import MapFunc from './MapFunc'
import Operators from './Operators'
import ThisKeyword from './ThisKeyword'
import UserRefComp from  './UserRefComp'
import Events from  './Events'
import Component1 from  './props'
import Component from  './context'
import UseCallBackHook from  './useCallbackHook'
import Form from  './form'
import Calculations from './Calculations'

import { Routes,Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  console.log(ArrayDestructureData);

  return (
    <div className="main-class">
     <Routes>
        <Route path="/" element={<ArrayDestructure />} />
        <Route path="/mapFunc" element={<MapFunc />} />
        <Route path="/operators" element={<Operators />} />
        <Route path="/thisKeyword" element={<ThisKeyword />} />
        <Route path="/userRefComp" element={<UserRefComp />} />
        <Route path="/events" element={<Events />} />
        <Route path="/props" element={<Component1 />} />
        <Route path="/context" element={<Component />} />
        <Route path="/callbackhook" element={<UseCallBackHook />} />
        <Route path="/form" element={<Form />} />
        <Route path="/calculations" element={<Calculations />} />
      </Routes>

      <div className="pagebtn">
            <button type='button' onClick={()=> navigate('/')} className="main-class">Array destructure</button>
            <button type='button' onClick={()=> navigate('/mapFunc')} className="main-class">MapFunc</button>
            <button type='button' onClick={()=> navigate('/operators')} className="main-class">Operators</button>
            <button type='button' onClick={()=> navigate('/thisKeyword')} className="main-class">This Keyword</button>
            <button type='button' onClick={()=> navigate('/userRefComp')} className="main-class">User Ref Component</button>
            <button type='button' onClick={()=> navigate('/events')} className="main-class">Events Component</button>
            <button type='button' onClick={()=> navigate('/props')} className="main-class">Props Component</button>
            <button type='button' onClick={()=> navigate('/context')} className="main-class">Context Component</button>
            <button type='button' onClick={()=> navigate('/callbackhook')} className="main-class">use Callback Hook Component</button>
            <button type='button' onClick={()=> navigate('/form')} className="main-class">React Hook form Component</button>
            <button type='button' onClick={()=> navigate('/calculations')} className="main-class">Calculations Component</button>
      </div>
    </div>
  );
}

export default App;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {color: "red"};
//   }
//   render() {
//     return <h2>I am a {this.state.color} Car!</h2>;
//   }
// }

// export default App;
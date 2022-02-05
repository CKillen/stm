import './App.css';
import { useState } from 'react';
import Header from './Components/Header/Header';
import SideSection from './Components/Side/SideSection';


function App() {
  const [reactableComponents, setReactableComponents] = useState([]);
  const [id, incrementId] = useState(0);
  return (
    <div className="App">
      <SideSection />
      <Header setReactableComponents={setReactableComponents} id={id} setId={() => incrementId(id + 1)} />
      <div className="main">
        {reactableComponents.map(component => {
          return component;
        })}
      </div>
    </div>
  );
}

export default App;

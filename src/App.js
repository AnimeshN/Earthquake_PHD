import {useEffect, useState} from 'react'
import {Map} from "./Components/Map/Map"
import {SideBar} from "./Components/SideBar/SideBar";
import {useData} from './useData'
import './App.scss';

function App() {
  
  const data = useData();
  const [selVillage, setSelVillage] = useState(null);


  if(!data){
    return <div className="loading"><i class="fas fa-cog fa-spin fa-10x"></i></div>

  }


  return (
    <div className="app">
      <div id="app__left">
      <Map data={data} setSelVillage={setSelVillage}/>
      </div>
      <div id="app__right">
        <SideBar data={data} selVillage={selVillage} setSelVillage={setSelVillage}/>
      </div>
    </div>
  );
}

export default App;

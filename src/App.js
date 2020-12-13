import {useEffect, useState} from 'react'
import {FormControl, Select, MenuItem,InputLabel,ButtonGroup,Button} from '@material-ui/core';
import {Map} from "./Components/Map/Map"
import {useData} from './useData'
import './App.scss';

function App() {
  
  const data = useData();
  const [selVillage, setSelVillage] = useState(null);


  if(!data){
    return <div className="loading"><i class="fas fa-cog fa-spin fa-10x"></i></div>

  }

  const handleChange = e =>{
    setSelVillage(e.target.value);
  }
  return (
    <div className="app">
      <div id="app__left">
      <Map data={data} setSelVillage={setSelVillage}/>
      </div>
      <div id="app__right">
        <div id="sidebar">
        <FormControl style={{width:"100%"}}>
          <InputLabel id="demo-simple-select-label">Select Village</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            
            value={selVillage}
            onChange={handleChange}
          >
            {data.map(d => (
            <MenuItem value={d.ID}>{d.ID}</MenuItem>
            ))}
          </Select>

          {/* <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button>High</Button>
            <Button>Moderate</Button>
            <Button>Low</Button>
          </ButtonGroup> */}

        </FormControl>
            
        </div>
      </div>
    </div>
  );
}

export default App;

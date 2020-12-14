import {FormControl, Select, MenuItem,InputLabel} from '@material-ui/core';

import {SusceptibilityAlert} from "./SusceptibilityAlert";

import {InfoTable} from "./InfoTable";


import "./SideBar.scss"
export const  SideBar = ({data, selVillage, setSelVillage,location,setLocation}) => {
    
    const handleChange = e =>{
        let village_id = e.target.value;
        setSelVillage(village_id);
        setLocation(data.filter(d => d.ID === village_id)[0])
      }

    console.log(location)


    return(
    <div id="sidebar">
    <FormControl style={{width:"100%"}}>
      <InputLabel id="demo-simple-select-label">Select Location</InputLabel>
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

        <InfoTable location={location}/>
        <SusceptibilityAlert value={location?.Susceptibility}/>

    </FormControl>
    </div>
)}
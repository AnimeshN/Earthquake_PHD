import {useEffect,useState} from 'react'
import {FormControl, Select, MenuItem,InputLabel} from '@material-ui/core';
import {SusceptibilityAlert} from "./SusceptibilityAlert";
import {InfoTable} from "./InfoTable";


import "./SideBar.scss"
export const  SideBar = ({data, selVillage, setSelVillage,location,setLocation}) => {
    
    const [sus, setSus] = useState(null);
    // setSus(location?.Susceptibility);

    const handleChange = e =>{
        let village_id = e.target.value;
        setSelVillage(village_id);
        setLocation(data.filter(d => d.ID === village_id)[0])
      }

    
    useEffect(()=>{
        if(location){
            const arg1 = location.Rockstate 
            const arg2 = location.Hydrology	
            const arg3 = location.Weathering	
            const arg4 = location.Overburden_Depth	
            const arg5 = location.Erosion	
            const arg6 = location.Rainfall	
            const arg7 = location.Road_Influence	
            const arg8 = location.Joint_failure	
            const arg9 = location.River_Bank_failure	
            const arg10 = location.Toe_failure
    
            const url = `http://localhost:8000/api/${arg1}/${arg2}/${arg3}/${arg4}/${arg5}/${arg6}/${arg7}/${arg8}/${arg9}/${arg10}`;
            fetch(url)
            .then(response => response.json())
            .then(json => setSus(json.Susceptibility));

        }
    },[location])


    return(
    <div id="sidebar">
    <FormControl  style={{width:"100%"}}>
      <InputLabel id="demo-simple-select-label">Select Location</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        
        value={selVillage}
        onChange={handleChange}
      >
        {data.map(d => (
        <MenuItem key={d.ID} value={d.ID}>{d.ID}</MenuItem>
        ))}
      </Select>
      </FormControl>

        <SusceptibilityAlert value={sus}/>
        <div id="infotable">
            <InfoTable location={location} setLocation={setLocation}/>
        </div>

    </div>
)}
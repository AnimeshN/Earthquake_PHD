import {FormControl, Select, MenuItem,InputLabel,ButtonGroup,Button} from '@material-ui/core';

export const  SideBar = ({data, selVillage, setSelVillage}) => {
    
    const handleChange = e =>{
        setSelVillage(e.target.value);
      }

    return(
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
)}
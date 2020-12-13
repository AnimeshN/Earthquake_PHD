import {FormControl, Select, MenuItem,InputLabel,ButtonGroup,Button, TableContainer, TableHead, TableBody, TableCell,Table,TableRow} from '@material-ui/core';
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
      {/* Erosion: "no"
Hydrology: "Dry"
ID: "L3"
Joint_failure: "no"
Lat: 30.811111111111114
Long: 78.2183888888889
Overburden Depth: "1-2m"
Rainfall: "no"
River_Bank_failure: "no"
Road_Influence: "no"
Rockstate: "massive"
Susceptibility: "HIGH"
Toe_failure: "no"
Village: "Dubatta"
Weathering: "high" */}

<TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Parameters</TableCell>
                <TableCell>Value</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell> Village Name</TableCell>
                <TableCell> {location?.Village}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell> Rainfall</TableCell>
                <TableCell> {location?.Rainfall}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell> River_Bank_failure</TableCell>
                <TableCell> {location?.River_Bank_failure}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell> Overburden Depth</TableCell>
                <TableCell> {location?.Overburden_Depth}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell> Road_Influence</TableCell>
                <TableCell> {location?.Road_Influence}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell> Rockstate</TableCell>
                <TableCell> {location?.Rockstate}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell> Toe_failure</TableCell>
                <TableCell> {location?.Toe_failure}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell> Weathering</TableCell>
                <TableCell> {location?.Weathering}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell> Erosion</TableCell>
                <TableCell> {location?.Erosion}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell> Hydrology</TableCell>
                <TableCell> {location?.Hydrology}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell> Susceptibility</TableCell>
                <TableCell> {location?.Susceptibility}</TableCell>
            </TableRow>
        </TableBody>
    </Table>
</TableContainer>
     

    </FormControl>
    </div>
)}
import {useState} from 'react';
import {Select,MenuItem,TableContainer, TableHead, 
    TableBody, TableCell,Table,TableRow, FormControl} from '@material-ui/core'

export const InfoTable = ({location,setLocation}) => {
    const handleChange = (event) =>{
        const name = event.target.name;
        setLocation({...location,[name]:event.target.value})
    }
    if(location){
    return (
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
                    <TableCell> Rock State</TableCell>
                    <TableCell>
                        <Select value={location?.Rockstate} onChange={handleChange} inputProps={{name:'Rockstate'}}>
                            <MenuItem value="Fractured">Fractured</MenuItem>
                            <MenuItem value="sheared">Sheared</MenuItem>
                            <MenuItem value="massive">Massive</MenuItem>
                            <MenuItem value="jointed">Jointed</MenuItem>
                        </Select>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Hydrology</TableCell>
                    <TableCell>
                        <Select value={location?.Hydrology} onChange={handleChange} inputProps={{name:'Hydrology'}}>
                            <MenuItem value="Dry">Dry</MenuItem>
                            <MenuItem value="Wet">Wet</MenuItem>
                            <MenuItem value="Damp">Damp</MenuItem>
                        </Select>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Weathering</TableCell>
                    <TableCell>
                        <Select value={location?.Weathering} onChange={handleChange} inputProps={{name:'Weathering'}}>
                            <MenuItem value="high">High</MenuItem>
                            <MenuItem value="Moderate">Moderate</MenuItem>
                            <MenuItem value="low">Low</MenuItem>
                        </Select>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Overburden Depth</TableCell>
                    <TableCell> 
                        <FormControl>
                            <Select value={location?.Overburden_Depth} onChange={handleChange} inputProps={{name:'Overburden_Depth'}}>
                                <MenuItem value="0-1m">0-1m</MenuItem>
                                <MenuItem value="1-2m">1-2m</MenuItem>
                                <MenuItem value="2-5m">2-5m</MenuItem>
                                <MenuItem value=">5m">>5m</MenuItem>
                            </Select>
                        </FormControl>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Erosion</TableCell>
                    <TableCell>
                            <Select value={location?.Erosion} onChange={handleChange} inputProps={{name:'Erosion'}}>
                                <MenuItem value="yes">Yes</MenuItem>
                                <MenuItem value="no">No</MenuItem>
                            </Select>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Rainfall</TableCell>
                    <TableCell> 
                    <FormControl>
                        <Select value={location?.Rainfall} onChange={handleChange} inputProps={{name:'Rainfall'}}>
                            <MenuItem value="yes">Yes</MenuItem>
                            <MenuItem value="no">No</MenuItem>
                        </Select>
                    </FormControl>
                  
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Road Influence</TableCell>
                    <TableCell>
                        <Select value={location?.Road_Influence} onChange={handleChange} inputProps={{name:'Road_Influence'}}>
                            <MenuItem value="yes">Yes</MenuItem>
                            <MenuItem value="no">No</MenuItem>
                        </Select>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Joint Failure</TableCell>
                    <TableCell>
                    <Select value={location?.Joint_failure} onChange={handleChange} inputProps={{name:'Joint_failure'}}>
                            <MenuItem value="yes">Yes</MenuItem>
                            <MenuItem value="no">No</MenuItem>
                        </Select>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> River Bank failure</TableCell>
                    <TableCell> 
                    <FormControl>
                        <Select value={location?.River_Bank_failure} onChange={handleChange} inputProps={{name:'River_Bank_failure'}}>
                            <MenuItem value="yes">Yes</MenuItem>
                            <MenuItem value="no">No</MenuItem>
                        </Select>
                    </FormControl>
                    
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Toe failure</TableCell>
                    <TableCell>
                        <Select value={location?.Toe_failure} onChange={handleChange} inputProps={{name:'Toe_failure'}}>
                            <MenuItem value="yes">Yes</MenuItem>
                            <MenuItem value="no">No</MenuItem>
                        </Select></TableCell>
                </TableRow>
           
                
            </TableBody>
        </Table>
    </TableContainer>
    )
    }else{ return <TableContainer>
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
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Rainfall</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> River Bank failure</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Overburden Depth</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Road Influence</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Rock State</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Toe failure</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Weathering</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Erosion</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Hydrology</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
    }}
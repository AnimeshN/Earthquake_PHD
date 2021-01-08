import {useState} from 'react';
import {Select,MenuItem,TableContainer, TableHead, 
    TableBody, TableCell,Table,TableRow, FormControl} from '@material-ui/core'

export const InfoTable = ({location,setLocation}) => {
    const handleChange = (event) =>{
        const name = event.target.name;
        setLocation({...location,[name]:event.target.value})
    }

    // Geomorphology,RochChar,OverburdenThickness,Hydrology,Erosion,Rainfall,Anthropogenic,SlopeType,LandslideMaterial,Movement,Style
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
                    <TableCell> {location?.Vill}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Geomorphology</TableCell>
                    <TableCell>
                        <Select value={location?.Geomorphology} onChange={handleChange} inputProps={{name:'Geomorphology'}}>
                            <MenuItem value="AF">AF</MenuItem>
                            <MenuItem value="AFP">AFP</MenuItem>
                            <MenuItem value="CC">CC</MenuItem>
                            <MenuItem value="CFS">CFS</MenuItem>
                            <MenuItem value="DHS">DHS</MenuItem>
                            <MenuItem value="DMD">DMD</MenuItem>
                            <MenuItem value="HDDHS">HDDHS</MenuItem>
                            <MenuItem value="LDDHS">LDDHS</MenuItem>
                            <MenuItem value="MDDHS">MDDHS</MenuItem>
                            <MenuItem value="RBM">RBM</MenuItem>
                            <MenuItem value="Terrace">Terrace</MenuItem>
                            <MenuItem value="TMS">TMS</MenuItem>
                        </Select>
                    </TableCell>
                </TableRow>
        
                <TableRow>
                    <TableCell> RockChar</TableCell>
                    <TableCell>
                        <Select value={location?.RockChar} onChange={handleChange} inputProps={{name:'RockChar'}}>
                            <MenuItem value="Sheared">Sheared</MenuItem>
                            <MenuItem value="Massive">Massive</MenuItem>
                            <MenuItem value="Fractured">Fractured</MenuItem>
                            <MenuItem value="Jointed">Jointed</MenuItem>
                        </Select>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> OverburdenThickness</TableCell>
                    <TableCell> 
                        <FormControl>
                            <Select value={location?.OverburdenThickness} onChange={handleChange} inputProps={{name:'OverburdenThickness'}}>
                                <MenuItem value="0-1m">0-1m</MenuItem>
                                <MenuItem value="1-2m">1-2m</MenuItem>
                                <MenuItem value="2-5m">2-5m</MenuItem>
                                <MenuItem value=">5m">>5m</MenuItem>
                            </Select>
                        </FormControl>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Hydrology</TableCell>
                    <TableCell>
                        <Select value={location?.Hydrology} onChange={handleChange} inputProps={{name:'Hydrology'}}>
                            <MenuItem value="Dry">Dry</MenuItem>
                            <MenuItem value="Wet">Wet</MenuItem>
                            <MenuItem value="Damp">Damp</MenuItem>
                            <MenuItem value="Flowing">Flowing</MenuItem>
                            <MenuItem value="Dripping">Dripping</MenuItem>
                        </Select>
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
                    <TableCell> Anthropogenic</TableCell>
                    <TableCell>
                        <Select value={location?.Anthropogenic} onChange={handleChange} inputProps={{name:'Anthropogenic'}}>
                            <MenuItem value="yes">Yes</MenuItem>
                            <MenuItem value="no">No</MenuItem>
                        </Select>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> SlopeType</TableCell>
                    <TableCell>
                    <Select value={location?.SlopeType} onChange={handleChange} inputProps={{name:'SlopeType'}}>
                            <MenuItem value="steep">Steep</MenuItem>
                            <MenuItem value="Moderate">Moderate</MenuItem>
                            <MenuItem value="gentle">Gentle</MenuItem>
                        </Select>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> LandslideMaterial</TableCell>
                    <TableCell> 
                    <FormControl>
                        <Select value={location?.LandslideMaterial} onChange={handleChange} inputProps={{name:'LandslideMaterial'}}>
                            <MenuItem value="Rock">Rock</MenuItem>
                            <MenuItem value="Debris">Debris</MenuItem>
                        </Select>
                    </FormControl>
                    
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Movement</TableCell>
                    <TableCell>
                        <Select value={location?.Movement} onChange={handleChange} inputProps={{name:'Movement'}}>
                            <MenuItem value="Fall">Fall</MenuItem>
                            <MenuItem value="Slide">Slide</MenuItem>
                            <MenuItem value="Topple">Topple</MenuItem>
                        </Select></TableCell>
                </TableRow>
           
                <TableRow>
                    <TableCell> Style</TableCell>
                    <TableCell> 
                    <FormControl>
                        <Select value={location?.Style} onChange={handleChange} inputProps={{name:'Style'}}>
                            <MenuItem value="Single">Single</MenuItem>
                            <MenuItem value="Multi">Multi</MenuItem>
                            <MenuItem value="Complex">Complex</MenuItem>
                        </Select>
                    </FormControl>
                    
                    </TableCell>
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
                    <TableCell> Geomorphology</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> RockChar</TableCell>
                    <TableCell></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> OverburdenThickness</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Hydrology</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Erosion</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Rainfall</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Anthropogenic</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> SlopeType</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> LandslideMaterial</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Movement</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Style</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
    }}
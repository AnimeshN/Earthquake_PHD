import {TableContainer, TableHead, 
    TableBody, TableCell,Table,TableRow} from '@material-ui/core'

export const InfoTable = ({location}) => {
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
                    <TableCell> Rainfall</TableCell>
                    <TableCell> {location?.Rainfall}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> River Bank failure</TableCell>
                    <TableCell> {location?.River_Bank_failure}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Overburden Depth</TableCell>
                    <TableCell> {location?.Overburden_Depth}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Road Influence</TableCell>
                    <TableCell> {location?.Road_Influence}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Rock State</TableCell>
                    <TableCell> {location?.Rockstate}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Toe failure</TableCell>
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
            </TableBody>
        </Table>
    </TableContainer>
    )
}

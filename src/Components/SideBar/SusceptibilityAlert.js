import {Alert} from '@material-ui/lab';

export const SusceptibilityAlert = ({value}) =>{
    if(value === "low")
        return <Alert severity="success">Susceptibility :LOW</Alert>
    else if(value === "moderate")
        return <Alert severity="warning">Susceptibility :MODERATE</Alert>
    else if(value === "high")
        return <Alert severity="error">Susceptibility: HIGH</Alert>
    else
        return <Alert severity="info">Susceptibility</Alert>
}

import {Alert} from '@material-ui/lab';

export const SusceptibilityAlert = ({value}) =>{
    if(value === "LOW")
        return <Alert severity="success">Susceptibility :LOW</Alert>
    else if(value === "Moderate")
        return <Alert severity="warning">Susceptibility :MODERATE</Alert>
    else if(value === "HIGH")
        return <Alert severity="error">Susceptibility: HIGH</Alert>
    else
        return <Alert severity="info">Susceptibility</Alert>
}

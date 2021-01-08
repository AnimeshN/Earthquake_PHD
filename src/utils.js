export const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2,
            marginTop:"1px",
            marginBottom:"1px"
        }}
    />
  );

export const degreeToDecimal = (val) =>{
    console.log(val)
    let degree = parseInt(val.split("°")[0])
    let minute = parseFloat(val.split("°")[1].split("'")[0])/60;
    let second;
    if(typeof val.split("°")[1].split("'")[1] === "undefined")
        second = 0
    else
        second = parseFloat(val.split("°")[1].split("'")[1].split('"')[0])/3600
    return (degree+minute+second)
}
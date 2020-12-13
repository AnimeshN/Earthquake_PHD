import {useEffect, useState} from 'react'
import ReactMapGL, {Marker, Popup, ScaleControl,NavigationControl, BaseControl} from 'react-map-gl'
import {csv} from 'd3-request'
import {FormControl, Select, MenuItem,InputLabel,ButtonGroup,Button} from '@material-ui/core';

import './App.scss';


const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 2
      }}
  />
);

function App() {

  const [viewport,setViewport] = useState({
      width: "100%",
      height: "100vh",
      latitude: 30.820,
      longitude: 78.2196,
      zoom: 11
  })

  const [data,setData] = useState(null);
  const [location,setLocation] = useState(null);
  const [selVillage, setSelVillage] = useState(null);
  const url = "https://gist.githubusercontent.com/AnimeshN/31cc0cb84c3cfb4769f38acb46a17df1/raw/16e19b887d6dcda85fac5722a5566f450e034ae9/earthquake.csv"

  useEffect(()=>{
    csv(url,d=>{
      d.forEach(element => {
        //Lat degree to decimal
        let degree = parseInt(element.Lat.split("°")[0])
        let minute = parseFloat(element.Lat.split("°")[1].split("'")[0])/60;
        let second;
        if(typeof element.Lat.split("°")[1].split("'")[1] === "undefined")
          second = 0
        else
          second = parseFloat(element.Lat.split("°")[1].split("'")[1].split('"')[0])/3600
        element.Lat = degree+minute+second


        //Long degree to decimal
        degree = parseInt(element.Long.split("°")[0])
        minute = parseFloat(element.Long.split("°")[1].split("'")[0])/60;
        if(typeof element.Long.split("°")[1].split("'")[1] === "undefined")
          second = 0
        else
          second = parseFloat(element.Long.split("°")[1].split("'")[1].split('"')[0])/3600
        element.Long = degree+minute+second

      });
      setData(d)
    })
  },[url])


  const setLocationIcon = susceptibility =>{
    if(susceptibility === "HIGH")
      return <i class="fas fa-map-pin m-1 red-text fa-lg"></i>
    else if(susceptibility === "LOW")
      return <i class="fas fa-map-pin m-1 green-text fa-lg"></i>
    else
      return <i class="fas fa-map-pin m-1 yellow-text fa-lg"></i>
  } 
  if(!data){
    return <div className="loading"><i class="fas fa-cog fa-spin fa-10x"></i></div>

  }

  const handleChange = e =>{
    setSelVillage(e.target.value);
  }
  return (
    <div className="app">
      <div id="app__left">
        <div id="map">
          <ReactMapGL {...viewport} 
          mapStyle="mapbox://styles/animeshn07/ckij1x4eg0sxf19pir65fv2p3"
          mapboxApiAccessToken=
          "pk.eyJ1IjoiYW5pbWVzaG4wNyIsImEiOiJja2lqMTE1YnUwbXlnMnJueHd1a2NpZnlnIn0.XNfx80gfeZ4XJZiBqUePVQ"
          onViewportChange={ viewport =>{setViewport(viewport)}}>
            {data.map(d=>{
              return <Marker
                        key={d.Lat+d.Long+d.Village}
                        latitude={d.Lat}
                        longitude={d.Long}
                        >
                      <div onClick={e =>{
                          e.preventDefault();
                          setLocation(d);
                        }}>
                        {setLocationIcon(d.Susceptibility)}

                      </div>
                      

                      </Marker>
        })
        
        
        }

{location ? (
          <Popup latitude={location.Lat} longitude={location.Long}
                  onClose={()=>{setLocation(null)}}
          >
             <div>
               {location.Village}
               </div> 
          </Popup>
        ):null}
        <div className="navigation" style={{display:'flex',margin:"10px"}}>
        {/* <NavigationControl/> */}
        <div style={{backgroundColor:"rgb(0, 0, 0,.3)",color:"white",padding:"10px",display:"flex",flexDirection:"column",gap:"10px",borderRadius:"20px"}}>
        <h6><b>Susceptibility</b></h6><ColoredLine color="white" />
          <span><i class="fas fa-map-pin m-1 red-text fa-lg" ></i>High</span>
          <span><i class="fas fa-map-pin m-1 yellow-text fa-lg"></i>Moderate</span>
          <span><i class="fas fa-map-pin m-1 green-text fa-lg"></i>Low</span>
        </div>
        </div>
        
          </ReactMapGL>
        </div>
      </div>
      <div id="app__right">
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
            <MenuItem value={d.Village}>{d.Village}</MenuItem>
            ))}
          </Select>

          {/* <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button>High</Button>
            <Button>Moderate</Button>
            <Button>Low</Button>
          </ButtonGroup> */}

        </FormControl>
            
        </div>
      </div>
    </div>
  );
}

export default App;

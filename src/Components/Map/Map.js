import React,{useState} from 'react';
import ReactMapGL, {Marker, Popup, ScaleControl,NavigationControl, BaseControl} from 'react-map-gl'
import {ColoredLine} from "../../utils"
export const Map = ({data, setSelVillage,location,setLocation}) =>{
    const [viewport,setViewport] = useState({
        width: "100%",
        height: "100vh",
        latitude: 30.820,
        longitude: 78.2196,
        zoom: 11
    })

    const setLocationIcon = susceptibility =>{
      if(susceptibility === "HIGH")
        return <i class="fas fa-map-pin m-1 red-text fa-lg"></i>
      else if(susceptibility === "LOW")
        return <i class="fas fa-map-pin m-1 green-text fa-lg"></i>
      else
        return <i class="fas fa-map-pin m-1 yellow-text fa-lg"></i>
    } 

    return   (<div id="map">
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
                    setSelVillage(d.ID)
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
       <div style={{display:'flex',flexDirection:"column"}}>
         <h4 class="text-center">{location.Village}</h4>
         <ColoredLine/>
         <div style={{display:"flex",gap:"10px"}}>
          <span><small><b>Latitude: </b>{(location.Lat).toFixed(4)}</small></span>
          <span><small><b>Longitude: </b>{(location.Long).toFixed(4)}</small></span>
         </div>
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
  </div>)
}
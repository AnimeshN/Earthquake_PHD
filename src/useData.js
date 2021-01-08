import {useState,useEffect} from 'react';
import {csv} from 'd3-request'
import {degreeToDecimal} from './utils'


export const useData = () =>{
    const [data,setData] = useState(null);
    const url="https://gist.githubusercontent.com/AnimeshN/9a4a3cb798a8bad7a60127d0c5916b1c/raw/823fc656150bc754bb472a485f6752a0ac52e460/landslide_suscepV2_1.csv"
    useEffect(()=>{
        csv(url,d=>{
          d.forEach(element => {
            //Lat degree to decimal
            element.Lat = degreeToDecimal(element.Lat)
            element.Long = degreeToDecimal(element.Long)
    
          });
          setData(d)
        })
      },[url])
      return data;
}
import {useState,useEffect} from 'react';
import {csv} from 'd3-request'
import {degreeToDecimal} from './utils'


export const useData = () =>{
    const [data,setData] = useState(null);
    const url = "https://gist.githubusercontent.com/AnimeshN/696616e2a14dfc4c9283d04be2ab949b/raw/6a220e91ce22948ca72b60de300421d6fb933549/earthquakeV2.csv"

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
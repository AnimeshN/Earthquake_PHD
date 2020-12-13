import {useState,useEffect} from 'react';
import {csv} from 'd3-request'
import {degreeToDecimal} from './utils'


export const useData = () =>{
    const [data,setData] = useState(null);
    const url ="https://gist.githubusercontent.com/AnimeshN/559e4a8d5c72f231e2230209118223fa/raw/dd166ca1c9a051438d9e2cd6f3344831f7c9f169/earthquakeV2_1.csv"
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
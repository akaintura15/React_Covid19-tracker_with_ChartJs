import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from "@material-ui/core"
import styles from "./CountryPicker.module.css";
import { fetchCountries } from '../../api';


const CountryPicker=({handleCountryChange})=> {
const [featchedCountries,setFeatchedCountries]=useState([]);

useEffect(()=>{
    const fetchAPI=async()=>{       
    setFeatchedCountries(await fetchCountries());     //setting data to state 
    }

fetchAPI()        
},[setFeatchedCountries])//with this we can select a country

    return (
        <div>
            <FormControl className="styles.formControl">
            <NativeSelect defaultValue="" onChange={(event)=>handleCountryChange(event.target.value)}>
            <option value="">Global</option>
            {featchedCountries.map((country,index)=><option key={index} value={country}>{country}</option>)}
            </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker

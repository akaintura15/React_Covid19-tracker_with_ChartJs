import React from "react";

import Cards from "./components/Cards/Cards"
import CountryPicker from "./components/CountryPicker/CountryPicker"
import Chart from "./components/Chart/Chart"
import coronaImage from "./Image/c.jpg"

import styles from "./App.module.css"
import { featchData } from "./api";


class App extends React.Component{

state={
    data:{},
    country:"",
}

handleCountryChange= async(country)=>{   //pass this method as a prop to CountryPicker
  const featchedData=await featchData(country)
  this.setState({data:featchedData,country:country})
//fetch the data

//set the state
}


  async  componentDidMount(){          //making a call to data
        const featchedData=await featchData()//created a variable stored data in it
     this.setState({data:featchedData})//storing that data in the state
    }

    render(){ 
      const{data,country}=this.state
        return(<div className={styles.container}>
          <img className={styles.image} src={coronaImage} alt="coronaImage"/>
        <Cards data={this.state.data}/> 
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
       
            
            </div>)
    }
}
export default App;
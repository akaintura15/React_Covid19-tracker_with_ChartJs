import axios from "axios";

const url='https://covid19.mathdro.id/api';

export const featchData=async(country)=>{

let changeableUrl=url;
if(country){
    changeableUrl=`${url}/countries/${country}`
}
try{
const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(changeableUrl);//getting specific data out of api //destructuring

return{confirmed,recovered,deaths,lastUpdate} //{} when returning more than one
}

catch(error){
console.log(error)
}
}
 
export const featchDailyData= async()=>{
    try{
 const {data}=await axios.get(`${url}/daily `);

const modifiedData= data.map((dailyData)=>({
    confirmed:dailyData.confirmed.total,
    recovered:dailyData.recovered.total,
    deaths:dailyData.deaths.total,
    date:dailyData.reportDate
}))
 return(modifiedData)
    }
    catch(error){

    }
}
export const fetchCountries=async()=>{
try{
const {data:{countries}}=await axios.get(`${url}/countries`);
return countries.map((country)=>country.name)
}
catch(error){
    console.log(error)

}
};
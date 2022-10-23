import React,{Component} from 'react';
// import axios from 'axios';
import './App.css';
import Input from './components/input/input';
import Info from './components/info/info';


// API_KEY We Ge It From openweathermap Site After We Make A Log In 
const Api_Key = "dbc395d345d633f957efa1b8191abfeb";

//*--> API URL From openweathermap Site
//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

class App extends Component {

state={
    
    pressure:"",
    humidity:"",
    temp:"",
    weather:"",
    description:"",
    error:"",
    name:"",
    country:""

}


// We Have To Write Or Add (-- async--> Asynchronous --) Word  Before The Function Which Is Resposable For fetching Data From API URL Then setState The Component State Object To Push It's Values To The Another Component Which Showing That Data Of The Weather
getWeather = async (e)=>{

// Here To Select The Value Of The Form Elements (2 Inputs) And To Specifiy Them We Use It's Name Attribute Value Then Get The Value Of Them When We Enter Them ---> e.target.elements.(name's attribute value).value
const city = e.target.elements.city.value
const country = e.target.elements.country.value

// The Constant Api fetch(Or Bring) Data From The API URL Using Method --> fetch( API URL ) And We Use ((await)) To Wait That Line To Finish And Never Go To The Next Line Till Finish That One
const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`)

// Here Data Which Brought Or Fetched From The URL Is Not Cabable To Use So We Have To Use (json) Function On It Or On The Variable Which Carry It So ---> Another Const = await Api.json() ===> Here You Will Find The JSON Object Which You Can Use Directly ملاحظه هتلاقيه هنا اوبجيكت و ليس اراى We Can Call that Step Of json Is A Formatting For The Object (JSON Formatting Or Beautifier)
const data = await api.json();

////////// console.log(data);
/* Output = 
{coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 10000, …}
base: "stations"
clouds: {all: 0}
cod: 200
coord: {lon: 31.2497, lat: 30.0626}
dt: 1657803486
id: 360630
main:
feels_like: 306.55
humidity: 35
pressure: 1007
temp: 306.57
temp_max: 306.57
temp_min: 306.57
[[Prototype]]: Object
name: "Cairo"
sys: {type: 1, id: 2514, country: 'EG', sunrise: 1657767786, sunset: 1657817888}
timezone: 7200
visibility: 10000
weather: Array(1)
0: {id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}
length: 1
[[Prototype]]: Array(0)
wind: {speed: 5.66, deg: 310}
[[Prototype]]: Object

*/

if(city && country){
    this.setState({
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temp: data.main.temp,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        name: data.name,
        country: data.sys.country,
        error:"",
    })
}else{
    this.setState({
        error:"Please Enter Full Data",
    })
}



//***-- The Second Way To Do The Weather Application Is To Use axios.get( API URL ).then((res)=> res.data )
    // axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
    //     this.setState({
    //         weather:res.data
    //     })
    // })

}


render(){

    return ( 

    <div className = "App" >
        <Input getWeather={this.getWeather} />
        <Info  info={this.state}/>
    </div>
    );
}
}
export default App;
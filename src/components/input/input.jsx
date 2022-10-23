import React,{Component} from 'react';
import './form.css'

class Input extends Component{

add=(e)=>{
    e.preventDefault();
    this.props.getWeather(e);
    e.target.elements.city.value = '';
    e.target.elements.country.value = '';
}


    render(){

        return(
            <form onSubmit={this.add}>
                <input type="text" name="city" placeholder='Enter Your City...' />
                <input type="text" name="country" placeholder='Enter Your Country...' />
                <button> Search </button>
            </form>
        )
    }
}

export default Input;
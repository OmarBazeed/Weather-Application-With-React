import React,{Component} from 'react';
import './weather.css'

class Info extends Component{

show=()=>{

    const {info} = this.props

    return(
            <>

            {/* Using And Operator Instead Of If Condition --> If info.pressure Is Not Null Or False Show The Paragraph */}

            { info.name && <p> <span> City Is : </span>{info.name} </p> }
            { info.country && <p> <span> Country Is : </span> {info.country} </p> }
            { info.weather && <p> <span> weather Is : </span> {info.weather} </p> }
            { info.temp && <p> <span> temp Is : </span> { (info.temp - 273.15).toFixed(2) } </p> }
            { info.humidity && <p> <span> humidity Is : </span> {info.humidity} </p> }
            { info.pressure && <p> <span> Pressure Is : </span> {info.pressure} </p> }
            { info.description && <p> <span> description Is : </span> {info.description} </p> }
            { info.error && <p> <span> Error : </span> {info.error} </p> } 
            </>
    )
}

render(){

        
return(
            <div className='theParent'>
                { this.props.info.name === '' ? <p> You Have To Search To See Resualts </p> :  this.show() }
            </div>
        )
    }
}

export default Info;

import React, { Component } from 'react'
const key="PmNHdNlftFya5fhneWnSA0XoESJZqwe97Toept5c"

const useStyles=makeStyles({
         root:{
             
         }
})

export class Astroid extends Component {

constructor(props) {
    super(props)

    this.state = {
        astroid:"",
        status:true
    }
}
handleChange=(e)=>{
    this.setState({
        astroid:e.target.value,
        status:e.target.value.length==0?true:false
    })
}
 

callApi=()=>{

}

    render() {
        return (
            <div>
                <input name="astroid" placeholder="Enter Asteroid ID"
                 value={astroid} onChange={handleChange}/>
                 <button disabled={status}> Submit</button>       
            </div>
        )
    }
}

export default Astroid

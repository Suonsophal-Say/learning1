import React from 'react'


class Set extends React.Component{
    constructor(){
        super();
        this.state={Message: 'Welcome visitor'}
    }
    changeMessage(){
        this.setState({
            Message:"Hello Sophal"
        })
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={()=>this.changeMessage()}>Submite</button>
                
            </div>
        
        )
    }
}
export default Set;
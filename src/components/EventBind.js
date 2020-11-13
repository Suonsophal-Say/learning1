import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)

        this.state={
            Message: "Hello"
        }
        // this.clickHendler=this.clickHendler.bind(this); //class constructor
    }
    clickHendler(){
        this.setState({
            Message:"Welcome"
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.Message}</div>
                {/* <button onClick={this.clickHendler.bind(this)}>Click</button> */}
                {/* <button onClick={()=>this.clickHendler()}>Click</button> */}
                {/* <button onClick={this.clickHendler}>Click</button>class constructor */}

            </div>
        )
    }
}

export default EventBind

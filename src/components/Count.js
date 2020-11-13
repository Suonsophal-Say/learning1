import React from 'react'

class Count extends React.Component{
    constructor(){
        super();
        this.state={count: 0}
    }
    Countnumber(){
        // //first parater set new value
        // this.setState({
        //     count: this.state.count +1
        // },
        // //update setState count value
        // () => {
        //         console.log('Message',this.state.count)
        // })
        this.setState((prevState)=>({
            count:prevState.count +1//
        }))
        console.log(this.state.count);
            
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.Countnumber()}>count Number</button>
            </div>
        )
    }
}
export default Count;
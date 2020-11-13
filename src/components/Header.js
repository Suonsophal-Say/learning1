import React from 'react';
import Title from './Header/Title';

export default class Header extends React.Component{
    headlChange(e){
        const title=e.target.value;
        this.props.changeTitle(title);
    }
    
    render(){
        return(
            <div>
               <Title title={this.props.title}/>
               {/* you want to write in box for change header,you need to make new function in header.js to taking
               function changetitle in App.js */}
               <input value={this.props.title} onChange={this.headlChange.bind(this)}/>
            </div>
        );
    }
}






//function Header(){
    // const firstName='Say'
    // const lastName='Suonsophal'
   
    // return(
    // <header>This is header
    //     { <h3>{`${firstName} ${lastName}`}</h3>
    //     }
    // </header>
    // )
// }
// export default Header
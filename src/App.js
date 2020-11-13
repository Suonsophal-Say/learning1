import React from 'react'

import './App.css'
import Header from './components/Header'
import { MainContent } from './components/MainContent'
import Footer from './components/Footer'
import Set from './components/Set'
import Count from './components/Count'
import EventBind  from './components/EventBind'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Form from './components/Form'

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state={title:"Welcome"};
  // }

    // changeTitle(title){
    //   this.setState({title});
    // }
  render(){
    return (
      <div className='App'>
        {/* <Form /> */}
        {/* <Stylesheet color={true} /> */}
        {/* <NameList /> */}
        {/* <EventBind /> */}
        {/* <Header   title={this.state.title}/> */}
        {/* <Set /> */}
        <Count />
        {/* making header take your title, you need to go change in Header.js and Title.js. {this.props.title} 
        this is call header in App.js taking title*/}
        {/* <Header title={'Other title'}/> */}

        {/* <MainContent name="box body" /> */}
        {/* <Footer /> */}
      </div>
    );
  }
  
}
export default App;


import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

  state={

    counters:[
      { id:1,value:4 },
      { id:2,value:2 },
      { id:3,value:6 },
      { id:4,value:9 },
      { id:5,value:4 },
      { id:6,value:7 },
      { id:7,value:9 }
    ]
  };

  handleIncrement = counter => {  
    const counters = [... this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {  
    const counters = [... this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter( c => c.id !== counterId);
    this.setState ({counters}); 
  };

  reset = () =>{
    const counters = this.state.counters.map (c =>{
      c.value = 0;
      return c;
    });

    this.setState ({counters});
  };


  render() {
    return (
      <React.Fragment>
      <NavBar 
      totalCounter = {this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
      <Counters 
        counters = {this.state.counters}
        onIncrement = {this.handleIncrement}
        onReset = {this.reset}
        onDecrement = {this.handleDecrement}
        onDelete = {this.handleDelete}
       
      />
      </main>
      </React.Fragment>
    );
  }
}

export default App;

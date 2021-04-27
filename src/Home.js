import React, { Component } from 'react';
import logo from './logo.svg';

import Form from './Form';

class Home extends Component {

    constructor(props) {
       super(props);

       this.state = {
          header: "my name is Ben"
        }

    }

  render() {
    return (
      <div style={{backgroundColor: "lightblue", width: "100%", height: "1000px", padding: "100px"}}>
      <Form myHeader={this.state.header}/>

      </div>
    );
  }
}

export default Home;

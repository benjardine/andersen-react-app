import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class Form extends Component {

  constructor(props) {
      super(props);

      this.state = {
        selectedDate: new Date()
      }
  }

  setStartDate(date) {
    this.setState({
      selectedDate: date
    });
    console.log(date)
  }

  render() {
    return (
      <>

        <form>
          <h1>{this.props.text}</h1>
          <h6>Dignissimos minus pariatur, tempore doloremque velit, aspernatur!</h6>
            <DatePicker selected={this.state.selectedDate} onChange={date => this.setStartDate(date)}/>

        </form>
        </>
    );
  }
}

export default Form; // Don’t forget to use export default!

import React, { Component } from 'react';
import Details from './Details';

export default class App extends Component {
  render() {
    var student={
      name: 'Aboli Patne',
      age: 19,
      rollno: 1
    }
    return (
      <>
        <Details{...student} />
      </>
    )
  }
}

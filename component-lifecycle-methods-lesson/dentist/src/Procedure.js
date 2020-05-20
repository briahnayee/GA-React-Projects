import React, { Component } from 'react';
class Procedure extends Component {
  constructor() {
    console.log('constructor')
    super();
    this.state = {
      title: '...',
      description: '...'
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    const id = this.props.match.params.id;
    const procedures = this.props.procedures;
    console.log(`Fetching id#${id}`)
    setTimeout( ()=>{
      this.setState( (prevState) => ({
        title: procedures[id].title,
        description: procedures[id].description
      }));
    }, 1000);
  }



  render() {
      console.log('render');
    return (
      <>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
      </>
    );
  }
}
export default Procedure;
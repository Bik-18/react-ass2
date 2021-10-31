import React,{ Component } from 'react';
import FeedbackComponent from "./components/FeedbackComponent";
import './App.css';

class App extends Component {
  state={
    feedbacks:[],
    name:"",
    departement:"CSE",
    rating:0
  }
  changeName=(e)=>{
    const value=e.target.value;
    this.setState({name:value})
  }
  changeDepartement=(e)=>{
    const value=e.target.value;
    this.setState({departement:value})
  }
  changeRating=(e)=>{
    const value=e.target.value;
    this.setState({rating:value})
  }
  addState=()=>{
    if(this.state.name !== ""){
      const feedback={
        name : this.state.name,
        departement : this.state.departement,
        rating : this.state.rating
      }
      const feedbacks=[...this.state.feedbacks,feedback];
      this.setState({
        feedbacks:feedbacks,
        name:"",
        departement:"CSE",
        rating:0
      })

    }
    console.log(this.state.feedbacks)
  }
  render(){
    return (
      <>
      <div className="App">
              <h1>Employee FeedBack Form</h1>
              <div id="formDiv">
                    <label>NAME :
                      <input type="text" value={this.state.name} onChange={this.changeName}></input>
                    </label>
                    <label>DEPARTEMENT :
                      <input type="text" value={this.state.departement} onChange={this.changeDepartement}></input>
                    </label>
                    <label>RATINGS :
                      <input type="number" value={this.state.rating} onChange={this.changeRating}></input>
                    </label>
                    <button onClick={this.addState}>SUBMIT</button>
              </div>
              <hr></hr>
              <div id="feedbacksResultDiv">
                {this.state.feedbacks.map((value)=>{
                  return <FeedbackComponent name={value.name} departement={value.departement} rating={value.rating}/>
                })}
                
              </div>

      </div>
      </>
    );
  }
}

export default App;

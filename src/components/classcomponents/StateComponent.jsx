import "../../css/PropsComponent.css"
import React,{Component} from "react";
class StateComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "KEC",
            course: "Mern"
        }
    }
    changeState = () => {
        this.state.name ="Kongu Engineering College"
        console.log("Kongu Engineering College")//useState should be used when 
    }

render()
{
    return (
        <div>
            <h1>This is State Componennt</h1>
            <h2>Hello,{this.state.name}<br></br>This is {this.state.course}</h2>
            <h3>I am changing the state of the name{this.state.name} to {this.changeState()}</h3>
            <button onMouseOver={this.changeState}>Click me to Change the state</button>
        </div>
    )
}
}
export default StateComponent;
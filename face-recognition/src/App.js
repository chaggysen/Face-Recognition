import React, {Component} from "react"
import Particles from "react-particles-js"
import Clarifai from 'clarifai';
import Navigation from "./Components/Navigation/Navigation"
import Logo from "./Components/Logo/Logo"
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm"
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition"
import Rank from "./Components/Rank/Rank"
import "./App.css"

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
  apiKey: '4922c51c3de94396a2ec8de5c93722e5'
 });
 
// https://samples.clarifai.com/face-det.jpg

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component{
  constructor (){
    super()
    this.state = {
      input :"",
      imageUrl: ""
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl:this.state.input})
    console.log("click")
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(
      function(response){
        console.log(response)
      },
      function(err){
        // there was an error
      }
    )
  }

  render(){
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions}/>
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    )
  }
}

export default App
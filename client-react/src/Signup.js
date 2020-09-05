import React from 'react'
import { useHistory } from "react-router-dom"

class Signup extends React.Component {
    constructor (props) {
      super(props)
      this.state = { 
            nick: '',
            password: '',
            email: '',
            password2: '',
       }
    this.handleChange =this.handleChange.bind(this)
    }
  
    handleSubmit (evt) {
      evt.preventDefault()
      this.props.sendMessage(this.state.formValue, this.props.room)
    }
  
    handleChange (evt, key) {
      this.setState({ [key]: evt.target.value })
    }

    render () {
        return (
          <form id='send-message' onSubmit={this.handleSubmit.bind(this)}>
            <input id='nickname' type='text' placeholder='Enter nickname...' value={this.state.nick} onChange={(evt) => {this.handleChange(evt, 'nick')}
            } />
            <input id='password' type='password' placeholder='Enter password...' value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
            <input id='password2' type='password' placeholder='Verify password...' value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
            <button type='submit'>Login</button>
          </form>
        )
      }
    }
  export default Signup
  
  // now) just be a component that redirects to the login page
// Meaning, when a user navigates to /logout, the result is simply that they are redirected to /login

//Evan, hide the password

//figure out how to set the key dynamically for 'field'

// Using dot notation:
// obj.key3 = "value3";
// Using square bracket notation:
// obj["key3"] = "value3";

//the reason we wanted to wrap handle change in an arrow function is b/c we wanted to pass the event as the 1st argument and pass in whatever val we wanted for the key to the 2nd arg

//the arrow func is only getting called with the event

//the key is something that comes into play as soon as we call handle change

//we could call it with the key as well

//mistake:'this' object scoping must be within constructor
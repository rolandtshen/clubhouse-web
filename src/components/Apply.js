import React, { Component } from 'react';
import AuthHeader from './AuthHeader'
import '../apply.css';

class Apply extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    org: "",
    essay: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.firstName);
  }

  change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <AuthHeader />
        <div class="contain">
          <div class="form">
            <h3>Apply</h3>
            <form onSubmit={this.handleSubmit}>
               <p>
                 <input onChange={this.change} name="firstName" placeholder="First Name" type="text" />
               </p>
               <p>
                 <input onChange={this.change} name="lastName" placeholder="Last Name" type="text" />
               </p>
               <p className="full-width">
                 <input onChange={this.change} name="email" placeholder="Email Address" type="text" />
               </p>
               <p className="full-width">
                 <input onChange={this.change} name="org" placeholder="Company, school, or organization" type="text" />
               </p>
               <p className="full-width">
                 <textarea onChange={this.change} name="essay" placeholder="Tell us a bit about who you are and what you do." name="" id="" cols="30" rows="7"></textarea>
               </p>
               <p className="full-width">
                 <label>Skill Sheet (This could be a resume, list of skills, or any other PDF document that represents your skills to a company.)</label>
                 <input onChange={this.change} type="file" name="pic" accept="image/*" />
               </p>
               <button className="full-width" type="submit">Submit</button>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Apply;

import React, { Component } from 'react';
import AuthHeader from './AuthHeader'
import '../apply.css';
import axios from 'axios';
import Route from 'react-router-dom';

class Apply extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    essay: "",
    skillSheet: "",
    validSubmission: true
  }

  validate(firstName, lastName, email, organization, essay, skillSheet) {
    const errors = [];
    if(this.state.email.toLowerCase().indexOf("@") === -1 || this.state.email.toLowerCase().indexOf(".") === -1) {
      console.log("Invalid email");
      errors.push("Invalid email.")
    }
    if(this.state.firstName.length < 2) {
      console.log("Invalid first name.");
      errors.push("Invalid first name.")
    }
    if(this.state.lastName.length < 2) {
      console.log("Invalid last name.");
      errors.push("Invalid last name.")
    }
    if(this.state.organization.length === 0) {
      console.log("Invalid organization");
      errors.push("Invalid organization.")
    }
    if(this.state.essay.length < 5) {
      console.log("Invalid essay");
      errors.push("Invalid essay.")
    }
    return errors;
  }

  sendConfirmationEmail = () => {
    axios.post('http://localhost:8000/api/email/sendConfirmation', {
      app: {
        firstName: this.state.firstName,
        email: this.state.email
      }
    })
    .then((response) => {
      if(response != null) {
        console.log("Application submitted, email sent.");
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // reset submission
    var errors = this.validate(this.state.firstName, this.state.lastName, this.state.email, this.state.organization, this.state.essay);

    if(errors.length === 0) {
      axios.post('http://localhost:8000/api/apply', {
        app: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          organization: this.state.organization,
          essay: this.state.essay,
          skillSheet: "temp skillsheet"
        }
        // skillSheet: this.state.skillSheet
      })
      .then((response) => {
        if(response != null) {
          //route to next page?
          console.log("Application submitted!")
          this.sendConfirmationEmail();
          window.location = "/thanks";
        }
      })
      .catch((err) => {
        console.log("Error");
      })
    }
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
      <div className="apply-wrapper">
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
                 <input onChange={this.change} name="organization" placeholder="Company, school, or organization" type="text" />
               </p>
               <p className="full-width">
                 <textarea onChange={this.change} value={this.state.essay} name="essay" placeholder="Tell us a bit about who you are and what you do." cols="30" rows="7"></textarea>
               </p>
               <p className="full-width">
                 <label>Skill Sheet (This could be a resume, list of skills, or any other PDF document that represents your skills to a company.)</label>
                 <input className="resume-input" onChange={this.change} type="file" name="resume" accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*" />
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

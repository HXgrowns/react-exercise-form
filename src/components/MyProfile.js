import React, { Component } from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: '',
    gender: 'Male',
    description: '',
    isRead: false,
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  handleGender = (event) => {
    this.setState({
      gender: event.target.value,
    })
  }

  handleTextarea = (event) => {
    this.setState({
      description: event.target.value,
    })
  }

  handleCheckout = (event) => {
    this.setState({
      isRead: event.target.checked,
    })
  }

  submit = (event) => {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form className='form' onSubmit={this.submit}>
        <h1 className='form-title section'>My Prodile</h1>
        <section className='section'>
          <label className='lable' htmlFor='name'>Name</label>
          <input className='input' name='name' type='text' placeholder='Your name' onChange={this.handleName}></input>
        </section>

        <section className='section'>
          <label className='lable' htmlFor='gender'>Gender</label>
          <select className='input' name="gender" onChange={this.handleGender}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </section>

        <section className='section'>
          <label className='lable' htmlFor='description'>Description</label>
          <textarea className='input textarea-input' name='description' type='textarai' placeholder='Description about yourself' 
          onChange={this.handleTextarea}></textarea>
        </section>

        <section className='section checkout-section'>
          <input type='checkbox' onChange = {this.handleCheckout}></input>
          I have read the terms of conduct
        </section>

        <section className='submit-section'>
          <input className='submit' type='submit' name='submit' value='Submit'
          disabled = {this.state.name === '' || this.state.description === '' || this.state.isRead === false}></input>
        </section>
      </form>
    );
  }
}

export default MyProfile;



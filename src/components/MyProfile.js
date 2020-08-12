import React, { Component } from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: '',
    gender: 'Male',
    description: '',
    isRead: false,
  }

  

  render() {
    return (
      <form className='form'>
        <h1 className='form-title section'>My Prodile</h1>
        <section className='section'>
          <label className='lable' htmlFor='name'>Name</label>
          <input className='input' name='name' type='text' placeholder='Your name'></input>
        </section>

        <section className='section'>
          <label className='lable' htmlFor='gender'>Gender</label>
          <select className='input' name="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </section>

        <section className='section'>
          <label className='lable' htmlFor='description'>Description</label>
          <textarea className='input textarea-input' name='description' type='textarai' placeholder='Description about yourself'></textarea>
        </section>

        <section className='section checkout-section'>
          <input type='checkbox'></input>
          I have read the terms of conduct
        </section>

        <section className='submit-section'>
          <input className='submit' type='submit' name='submit' value='Submit'></input>
        </section>
      </form>
    );
  }
}

export default MyProfile;



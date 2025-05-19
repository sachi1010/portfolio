
import React from 'react'

export const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div>
          <form action="">
            <p>
              <label htmlFor="">Name :</label>
              <input type="text" placeholder='Enter your Name' />
            </p>
            <p>
              <label htmlFor="">Email :</label>
              <input type="email" name="" id="" placeholder='Enter your Eamil' />
            </p>
            <p>
              <label htmlFor="">Phone No :</label>
              <input type="number" placeholder='Enter Your Phone No' />
            </p>
            <p>
              <label htmlFor="">Write Something :</label>
              <textarea name="" id="" placeholder='Write Here .....'></textarea>
            </p>
          </form>
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import axios from 'axios'
import { Link } from 'react-router-dom'

// import egcologo from 'public/images/egcologo.png'

//do i need useEffect?
//difference between resp and response?
//.data . results ?
//axios not working?

const HomePage = () => {
  const [minerals, getMinerals] = useState()

  // const getApiData = async () => {
  //   const resp = await axios.get('')
  //   const response = resp.data.results
  //   getMinerals(resp.data.results)
  // }

  return (
    <>
      <div className="linkContainer">
        <div className="linkBackground">
          <a
            className="logoClick"
            href="https://www.etsy.com/shop/EternallyGratefulCo"
          >
            <img
              className="linkLogo"
              src="https://i.etsystatic.com/isla/fad52c/38072018/isla_500x500.38072018_aafl4hcb.jpg?version=0"
            />
          </a>
          <a
            className="textClick"
            href="https://www.etsy.com/shop/EternallyGratefulCo"
          >
            Shop with us on Etsy!
          </a>
        </div>
      </div>

      <div className="moreOutContainer">
        <div className="outerContainer">
          <div className="container">
            <p>Shop With us on Etsy!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage

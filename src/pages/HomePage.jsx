import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [minerals, getMinerals] = useState()

  const getApiData = async () => {
    const resp = await axios.get('https://localhost:5001/api/Tektite') //entire response from API
    // const response = resp.data
    getMinerals(resp.data)
  }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <>
      <div className="linkContainer">
        <div className="linkBackground">
          <a
            className="logoClick"
            href="https://www.etsy.com/shop/EternallyGratefulCo"
          >
            <img className="linkLogo" src="../images/egcologo.png" />
          </a>
          <button class="button button2">
            <a
              className="textClick"
              href="https://www.etsy.com/shop/EternallyGratefulCo"
            >
              Shop with us on Etsy
            </a>
          </button>
        </div>
      </div>

      {/* <div className="moreOutContainer">
        <div className="outerContainer">
          <div className="container">
            <p>Shop With us on Etsy!</p>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default HomePage

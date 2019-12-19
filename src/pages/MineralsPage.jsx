import React from 'react'
import Minerals from '../components/Minerals'

const MineralsPage = props => {
  return (
    <>
      <div className="mineralsContainer">
        <div className="mineralsBackground">
          <div className="mineralsBody">Minerals Go Here !</div>
        </div>
      </div>
      <Minerals />
    </>
  )
}

export default MineralsPage

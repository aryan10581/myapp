import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
 
  Link
} from "react-router-dom";
import icon from './icon.svg'
import './Card1.css'
export class Card1 extends Component {
  static propTypes = {}

  render() {
    return (
    <div className="container">
        <button className='rate' id='star' >
      <img src={icon} alt="" />

        </button>
        <p className='head'> How did we do?</p>
        <p className='para'>Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!</p>
  <Link to='/1' ><button id='frs' className='rate'> 1 </button></Link>
  <Link to='/2'><button id='ses' className='rate'> 2 </button></Link>
  <Link to='/3'><button id='ths' className='rate'> 3 </button></Link>
  <Link to='/4'><button id='fos' className='rate'> 4 </button></Link>
  <Link to='/5'><button id='fis' className='rate'> 5 </button></Link>
  <Link to='/'><button className="submit rate">Submit </button></Link>
    </div>
    )
  }
}

export default Card1
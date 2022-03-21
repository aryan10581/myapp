import React, { Component } from 'react'
import thanks from './thanks.svg'
import './Card3.css'
export class Card3 extends Component {
  render(props) {
      let {num}= this.props;
     
    return (
        
        <div className="resp">
      
<img src={thanks} alt="" id='resp' />
      
<button className="select">You selected {this.props.num} out of 5 </button>
<p id="thank">Thank you!</p>
<p id='para' className="para">We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
    </div>
    )
  }
}

export default Card3
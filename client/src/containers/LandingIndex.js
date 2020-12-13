import React, {Component} from 'react';
import EmailPage from '../components/EmailPage'

class LandingIndex extends Component{
  render() {
    return (
        <div className="parent">
            <div className="half">
            <a><img className="logo" src="logo.png"/></a>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
                <p className="message"><strong>Beating Diabetes</strong></p>

                <h1>We've something <strong>valuable</strong> for those struggling with <strong>DIABETES</strong></h1>
                <p><strong>Enter your email to win a free order.</strong></p>

                <EmailPage/>
                <br />
                <br />
                <p id="paragraph">100% Privacy Guaranteed</p>
            </div>

            <div className="half right">

            </div>
        </div>

    )
  }

}
export default LandingIndex

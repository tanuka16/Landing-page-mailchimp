import React, {Component} from 'react';
import Logo from "./Logo";
import Title from "./Title";
import logo from "../images/logo.png";
import EmailPage from '../components/EmailPage';
import Notification from '../components/Notification';
import check from "../images/check-mark.svg";
import xmark from "../images/x-mark.svg";
import exclamation from "../images/exclamation.svg";
class LandingIndex extends Component{
  state={
    logo: {
      alt: "Happy Heal",
      src: logo
    },
    title: {
      text: "Weve something valuable for those struggling with DIABETES"
    },
    notification: {
      src:"",
      alt:"",
      message: "",
      visible: false,
      level:""
    }
  }

showNotification = () => {
  const notification = {...this.state.notification}

    notification.visible = true
    this.setState({notification}, () => {
      setTimeout(() => {
        notification.visible = false;
        this.setState({notification})
      }, 3000)
    })
  }

configureNotification = (level) => {
  const notification = {...this.state.notification}
  // console.log(notification);
  notification.level = level

  if(level === "success"){
    notification.src = check;
    notification.alt = "Check Mark";
    notification.message = "Thank you for subscribing in our mailing list."
  }else if (level === "warning") {
    notification.src = exclamation;
    notification.alt = "Exclamation Point";
    notification.message = "The email you entered is already on our mailing list. Thank you for joing the community.";
  }else{
    notification.src = xmark;
    notification.alt = "X Mark";
    notification.message = "There was an issue with your email submission. Please check your email and try again.";
  }
  this.setState({notification})
}






  render() {
    const {title, logo, notification} = this.state
    return (
        <div className="parent">
            <div className="half">
            <Logo alt={logo.alt} src={logo.src}/>
            {/*<a><img className="logo" src="logo.png" alt=""/></a>*/}
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

                <Title text={title.text} />
                {/*<h1>Weve something <strong>valuable</strong> for those struggling with <strong>DIABETES</strong></h1>*/}
                <div>
                    <p src={notification.src}
                       alt={notification.alt}
                       message={notification.message}
                       level={notification.level}
                       visible={notification.visible}>
                       <strong>Enter your email to win a free order.</strong>
                    </p>

                    <Notification
                          src={notification.src}
                          alt={notification.alt}
                          message={notification.message}
                          level={notification.level}
                          visible={notification.visible}
                    />
                </div>
                <EmailPage showNotification={this.showNotification} configureNotification={this.configureNotification}/>
                <br />
                <br />
                <p id="paragraph">100% Privacy Guaranteed</p>
            </div>

            {/*<div className="half right">

            </div>*/}
        </div>

    )
  }

}
export default LandingIndex

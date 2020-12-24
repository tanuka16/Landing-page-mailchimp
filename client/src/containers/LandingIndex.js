import React, {Component} from 'react';
import Logo from "./Logo";
import Title from "./Title";
import Instruction from "./Instruction";
import EmailPage from '../components/EmailPage';
// import Notification from '../components/Notification';
import logo from "../images/logo.png";
import xmark from "../images/x-mark.svg";
import check from "../images/check-mark.svg";
import exclamation from "../images/exclamation.svg";


class LandingIndex extends Component{
  state={
    logo: {
      alt: "Happy Heal",
      src: logo
    },
    title: {
      text: "We've Something VALUABLE For Those Living With DIABETES"
    },
    instruction:{
      text: "Enter your email to win a free order."
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
  notification.level = level

  if(level === "success"){
    notification.src = check
    notification.alt = "Check Mark"
    notification.message = "Thank you for subscribing in our mailing list."
  }else if (level === "warning") {
    notification.src = exclamation
    notification.alt = "Exclamation Point"
    notification.message = "The email you entered is already on our mailing list."
  }else{
    notification.src = xmark
    notification.alt = "X Mark"
    notification.message = "There was an issue with your email submission. Please check your email and try again."
  }
  this.setState({notification})
}

  render() {
    const {title, logo, instruction, notification} = this.state

    return (
        <div className="parent">
              <Logo alt={logo.alt} src={logo.src}/>
              <div className="slogan-text">
                <p className="message">Beating Diabetes</p>
              </div>
              <Title text={title.text} />
              <Instruction
                  text={instruction.text}
                  src={notification.src}
                  alt={notification.alt}
                  message={notification.message}
                  level={notification.level}
                  visible={notification.visible}
              />
              <EmailPage
                  showNotification={this.showNotification}
                  configureNotification={this.configureNotification}
              />
              <div className="privacy">
                  <p className="privacy-text">100% Privacy Guaranteed</p>
              </div>
        </div>

    )
  }

}
export default LandingIndex

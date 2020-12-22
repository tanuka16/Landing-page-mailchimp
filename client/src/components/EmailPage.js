import React, {Component} from 'react';


class EmailPage extends Component{
  state = {
    email:""
  }

  handleChange = (e)=>{
    this.setState({email: e.target.value.trim()})
    console.log(e.target.value);
  }



  subscribe=(e)=>{
    e.preventDefault();

    if(this.state.email){
      fetch(`api/memberAdd?email=${this.state.email}`)
      .then(res => res.json())
      .then(json => {
        if(json.status === "subscribed"){
          this.props.configureNotification("success")
        }else if (json.title === "Member Exists") {
          this.props.configureNotification("warning")
        }else {
          this.props.configureNotification("danger")
        }
        this.props.showNotification()
      })
      .catch(err => {
        console.log("error", err);
      })

      this.setState({ email: ""})
    }

  }


  render() {

    return (

      <form onSubmit={this.subscribe}>

        <div className="subscribe">
          <input
            id="u_email"
            type="email"
            placeholder="Enter your email here..."
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div className="sub-button">

              <button type = 'submit'>
                <span>Win A Free Order</span>
              </button>

          </div>
        </div>
      </form>
    )
  }

}
export default EmailPage

import {Component} from 'react'
import './index.css'

class RegisterForm extends Component {
  state = {
    orderNo: '',
    name: 'Karthik',
    isFormSubmitted: true,
  }

  toUnsubmit = () => {
    this.setState({isFormSubmitted: false})
  }

  handleInputChange = e => {
    this.setState({isFormSubmitted: false})
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit = e => {
    const {orderNo, name} = this.state
    document.getElementById('hi').value = ''
    this.setState({isFormSubmitted: true, orderNo: '', name: 'Karthik'})

    e.preventDefault()
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbzku5bPASDZXpGsJnGectKFyo9aVvZcCa2J6gAMAEqkCXUBjL-u859fcAvYQBpaZ8Q3ww/exec'
    const formData = new FormData()
    formData.append('Order No.', orderNo)
    formData.append('Name', name)

    fetch(scriptURL, {method: 'POST', body: formData})
      .then(() => {})
      .catch(error => console.error('Error!', error.message))
  }

  render() {
    const {orderNo, name, isFormSubmitted} = this.state
    return (
      <div className="container register">
        <div className="row">
          <div className="col-md-12">
            <div
              className="tab-pane fade show active text-align form-new"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row register-form">
                <div className="col-md-12">
                  {isFormSubmitted && (
                    <p className="text-center h3 mb-4 font-weight-bold">
                      Thanks for Submitting.
                    </p>
                  )}
                  <form
                    method="post"
                    name="google-sheet"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="form-group">
                      <input
                        type="date"
                        name="date"
                        id="hi"
                        className="form-control"
                        placeholder="Date"
                        onClick={this.toUnsubmit}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="number"
                        name="orderNo"
                        className="form-control"
                        placeholder="Order Number*"
                        value={orderNo}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name*"
                        value={name}
                        onChange={this.handleInputChange}
                        required
                        disabled
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="submit"
                        name="submit"
                        className="btnSubmit btn-block"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterForm

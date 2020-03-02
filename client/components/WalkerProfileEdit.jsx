import React from "react"
import { editWalker } from '../api/walkerApi'
import {IfAuthenticated} from './Authenticated'

//Josh Sat 29/2

class WalkerProfileEdit extends React.Component {
    constructor(){
        super()

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            blurb: '',
            location: '',
            photo:''
        }
    }

handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        blurb: this.state.blurb,
        location: this.state.location,
        photo: this.state.photo
    })
    let walker = this.state
    let id = this.props.match.params.id
    editWalker(id, walker)
    this.props.history.push('/walker/' + id)
 
}


    render() {

        return (
            <div>
                <ifAuthenticated>
                    <h1>Edit Walker Details</h1>
                    <form onSubmit = {this.handleSubmit}>
                        <br />
                        <label> First name:
            <input type='text' name='first_name' placeholder='First name' onChange={this.handleChange} />
                        </label>
                        <br />
                        <label> Last name:
            <input type='text' name='last_name' placeholder='Last name' onChange={this.handleChange} />
                        </label>
                        <br />
                        <label> email:
            <input type='text' name='email' placeholder='email' onChange={this.handleChange} />
                        </label>
                        <br />
                        <label> Blurb:
            <input type='text' name='blurb' placeholder='Blurb' onChange={this.handleChange} />
                        </label>
                        <br />
                        <label> Location:
            <input type='text' name='location' placeholder='Location' onChange={this.handleChange} />
                        </label>
                        <br />
                        <label> Photo:
            <input type='text' name='photo' placeholder='Image URL' onChange={this.handleChange} />
                        </label>
                        <br />
                        <br />
                        <input type="submit" value="Submit"  />
                    </form>
                </ifAuthenticated>
            </div>
        )
    }



}
export default WalkerProfileEdit
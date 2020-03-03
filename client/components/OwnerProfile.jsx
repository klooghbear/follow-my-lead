import React from 'react'
import { getOwner } from '../api/ownerApi'
import { Link } from 'react-router-dom'


class OwnerProfile extends React.Component {
  constructor(props) {
    super()

      this.state = {
        owner:{}
      }

    }


  componentDidMount() {

    getOwner(this.props.match.params.id)
      .then(ownerInfo => {
        this.setState({
          owner: ownerInfo
        })
      })
  }

  render() {
    return (
      <>
      <h1 className="page-title">My Owner Profile</h1>
      <div className="profile-container">
        
        <img className="profile-picture" src =  {this.state.owner.photo}/>
        <p>Location: {this.state.owner.location}</p>
        <br/>
        <div className="profile-info">
        {this.state.owner && 
          <>
            <p>Name: {this.state.owner.first_name} {this.state.owner.last_name} </p>
            
            <p>Email: {this.state.owner.email}</p>
            
          </>
        }
        </div>
      
        <Link className="button" to={'/owner/' + this.state.owner.id + '/edit'}>

        Edit Profile
        </Link>

        <Link className="button" to="/register/dog">
          
            Register your dog
          
        </Link>
      </div>
      </>
    )
  }




}


export default OwnerProfile
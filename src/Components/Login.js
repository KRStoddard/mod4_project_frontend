import React from 'react'
import {connect} from 'react-redux'
import {onLogin} from '../actions/user'
import {Link} from 'react-router-dom'

class Login extends React.Component{

    //local state for error message
    state = {
        error: null
    }

    //loginHandler creates new auth token if user exists
    //it will then dispatch onLogin action
    //if user doesn't exist, it shows error
    loginHandler = e => {
        e.preventDefault()
        const reqObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"username": e.target.username.value, "password": e.target.password.value})
        }

        fetch(`http://localhost:3001/auth`, reqObj)
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                this.setState({error: user.error})
            } else {
                localStorage.setItem('userToken', user.token)
                this.props.onLogin(user.user)
                this.props.history.push('/notes')
            }
        })
        
    }

    //renders form to login
    render(){
        return(
            <div className="container-fluid">
                <div className="edit-form">
                    <h2>Please Login</h2>
                    {<h4 style={{ color: 'red'}}>{this.state.error}</h4>}
                    <form onSubmit={this.loginHandler}>
                        <div className="form-group user-form-group">
                            <input type="text" className="form-control" name="username" placeholder="username" />
                            <input type="password" className="form-control" name="password" placeholder="password"/>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <Link className="formlink" to="/newaccount">No Account? Make One Here</Link>
                </div>
            </div>
        )
    }
}

//maps dispatch action to component's props
const mapDispatchToProps = {
    onLogin
}

//default exports Login componenet with Dispatch Redux store connection
export default connect(null, mapDispatchToProps)(Login)



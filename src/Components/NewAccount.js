import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {onLogin} from '../actions/user'

class NewAccount extends React.Component{

    state = {
        error: null
    }
    submitHandler = e => {
        const password = e.target.password.value
        e.preventDefault()
        const reqObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"username":e.target.username.value, "password": password})
        }

        fetch(`http://localhost:3001/users`, reqObj)
        .then(resp => resp.json())
        .then(user => {
            if (user.error){
                this.setState({error: user.error})
            }
            else {
                this.loginHandler(user, password)
            }
        })
    }

    loginHandler = (user, password) => {
        const reqObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"username": user.username, "password": password})
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

    render(){
        return(
            <div className="container-fluid">
            <div className="edit-form">
                <h2>New Account</h2>
                {<h4 style={{ color: 'red'}}>{this.state.error}</h4>}
                <form onSubmit={this.submitHandler}>
                    <div className="form-group user-form-group">
                        <input type="text" className="form-control" name="username" placeholder="username" />
                        <input type="password" className="form-control" name="password" placeholder="password"/>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
                <Link className="formlink" to="/login">Have an Account? Login</Link>
            </div>
        </div>
        )
    }
}

const mapDispatchToProps = {
    onLogin
}
export default connect(null, mapDispatchToProps)(NewAccount)
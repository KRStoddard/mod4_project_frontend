import React from 'react'

export default class Login extends React.Component{


    loginHandler = e => {
        e.preventDefault()
        this.props.onLogin()
        this.props.history.push('/notes')
        
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="edit-form">
                    <h2>Please Login</h2>
                    <form onSubmit={this.loginHandler}>
                        <div className="form-group">
                            <input type="text" className="form-control" name="username" placeholder="username" />
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



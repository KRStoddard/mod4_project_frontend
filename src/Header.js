import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {onLogout} from './actions/user'

class Header extends React.Component{


    
    render(){
        return(
            <>
            <nav className="navbar sticky-top navbar-custom"  style={{backgroundColor: "rgba(56, 31, 77, 1)"}}>
                <Link className="navbar-brand navbar-custom" to="/notes" >FlatNotes</Link>
                <div className="d-flex justify-content-end">
                {this.props.user.username ? 
                <>
                    <Link className="nav-link navbar-custom" to="/notes/new">New Note</Link>
                        <div class="nav-item dropdown">
                            <a className="nav-link dropdown-toggle navbar-custom" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Welcome, {this.props.user.username}</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link onClick={this.props.onLogout} className="dropdown-item" to="/login">Logout</Link>
                            </div>
                        </div>
                </>
                : null}
                </div>
            </nav>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    } 
}

const mapDispatchToProps = {
    onLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
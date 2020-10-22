import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {onLogout} from './actions/user'
import Search from './Search'
import {viewGrid, viewList} from './actions/view'

class Header extends React.Component{


    logoutHandler = () => {
        localStorage.removeItem('userToken')
        this.props.onLogout()
    }
    
    render(){
        return(
            <>
            <nav className="navbar sticky-top navbar-custom"  style={{backgroundColor: "rgba(56, 31, 77, 1)"}}>
                <Link className="navbar-brand navbar-custom" to="/notes" >FlatNotes</Link>
                <div className="d-flex justify-content-end">
                {this.props.user.username ? 
                <>
                <Search />
                    <Link className="nav-link navbar-custom" to="/notes/new">New Note</Link>
                    
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle navbar-custom" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Welcome, {this.props.user.username}</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link onClick={this.logoutHandler} className="dropdown-item" to="/login">Logout</Link>
                                {this.props.view === "list" ?
                                    <li onClick={this.props.viewGrid} className="dropdown-item" to="/login">Grid View</li>
                                :
                                    <li onClick={this.props.viewList} className="dropdown-item" to="/login">List View</li>}
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
        user: state.user,
        view: state.view
    } 
}

const mapDispatchToProps = {
    onLogout,
    viewGrid,
    viewList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
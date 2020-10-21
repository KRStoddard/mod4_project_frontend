import React from 'react'
import {Link} from 'react-router-dom'

export default class Header extends React.Component{

    render(){
        return(
            <>
            <nav className="navbar sticky-top navbar-custom"  style={{backgroundColor: "rgba(56, 31, 77, 1)"}}>
                <Link className="navbar-brand navbar-custom" to="/notes" >FlatNotes</Link>
                <div className="d-flex justify-content-end">
                    <Link className="nav-link navbar-custom" to="/notes/new">New Note</Link>
                </div>
            </nav>
            </>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//     username: state.username
// }
// }
// export default connect(mapStateToProps, null)(Header)
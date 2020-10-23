import React from 'react'
import {onSearch} from '../actions/search'
import {connect} from 'react-redux'

class Search extends React.Component{

    //prevents form submission
    submitHandler = e => {
        e.preventDefault()
    }

    //renders search form
    render(){

        return(
            <form onSubmit={this.submitHandler} className="searchform">
                <input onChange={e => this.props.onSearch(e.target.value)} className="searchbar"type="text" name="search" placeholder="Search"/>
            </form>
        )
    }
}

//maps dispatch action to component's props
const mapDispatchToProps = {
    onSearch
}

//default exports Search component with Dispatch connection to Redux store
export default connect(null,mapDispatchToProps)(Search)
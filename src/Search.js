import React from 'react'
import {onSearch} from './actions/search'
import {connect} from 'react-redux'

class Search extends React.Component{

    submitHandler = e => {
        e.preventDefault()
    }

    render(){

        return(
            <form onSubmit={this.submitHandler} className="searchform">
                        <input onChange={e => this.props.onSearch(e.target.value)} className="searchbar"type="text" name="search" placeholder="Search"/>
            </form>
        )
    }
}

const mapDispatchToProps = {
    onSearch
}

export default connect(null,mapDispatchToProps)(Search)
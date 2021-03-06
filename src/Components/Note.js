import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {onSearch} from '../actions/search'

class Note extends React.Component{
    
    //tagList renders tags from note
     tagList = () => {
        return this.props.note.tags.map(tag => {
            console.log(tag.name)
            return <span onClick={() => {this.props.onSearch(tag.name)}} className="tagspan">{tag.name}</span> 
        })}
    
    //renders individual note
    render(){
        const {id, title, content} = this.props.note
        const link = `/notes/${id}`
        return(
            <div className="card indexcard">
                
                <div className="card-body card-body-index overflow-hidden">
                <h5 className="card-title">{title}</h5>
                <p className="card-text card-text-index">{content}</p>
                <Link className="card-link" to={link}>View</Link>
                <div className="card-text tagsect">
                    {this.tagList()}
                </div>
                </div>
            </div>
        )}
}

//maps ability to change redux store to component's props
const mapDispatchToProps = {onSearch}

//default exports Note component with write connection to Redux Store
export default connect(null, mapDispatchToProps)(Note)
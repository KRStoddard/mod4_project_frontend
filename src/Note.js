import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Note = props => {
    
    

    const {id, title, content, tags} = props.note
    const link = `/notes/${id}`
    const tagList = () => {
    return tags.map(tag => {return <span className="tagspan">{tag.name}</span> })}
    return(
        <div className="card indexcard">
            <div className="card-body card-body-index overflow-hidden">
            <h5 className="card-title">{title}</h5>
            <p className="card-text card-text-index">{content}</p>
            <Link className="card-link" to={link}>View</Link>
            <div className="card-text tagsect">
                {tagList()}
            </div>
            </div>
        </div>
    )
}
export default Note
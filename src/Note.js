import React from 'react'
import {Link} from 'react-router-dom'

const Note = props => {
    const {id, title, content, tags} = props.note
    const link = `/notes/${id}`
    const tagList = () => {
    return tags.map(tag => {return `#${tag.name} ` })}
    return(
        <div className="card">
            <div className="card-body card-body-index overflow-hidden">
            <h5 className="card-title">{title}</h5>
            <p className="card-text card-text-index">{content}</p>
            <Link className="card-link" to={link}>View</Link>
            <div className="card-text">
                {tagList()}
            </div>
            </div>
        </div>
    )
}
export default Note
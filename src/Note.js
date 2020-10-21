import React from 'react'
import {Link} from 'react-router-dom'

const Note = props => {
    const {id, title, content} = props.note
    const link = `/notes/${id}`
    return(
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
            <Link className="card-link" to={link}>View</Link>
            </div>
        </div>
    )
}
export default Note
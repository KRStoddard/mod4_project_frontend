import React from 'react'
import {Link} from 'react-router-dom'
import {showNote} from './actions/note'
import {connect} from 'react-redux'

class ShowNote extends React.Component{



    renderNote = () => {
        const {id, title, content} = this.props.note
        const editLink = `/notes/edit/${id}`
        const deleteLink = `/notes/delete/${id}`
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <Link className="card-link" to={editLink}>Edit</Link>
                    <Link className="card-link" to={deleteLink}>Delete</Link>
                </div>
            </div>)
    }

    componentDidMount() {
        fetch(`http://localhost:3001/notes/${this.props.match.params.id}`)
        .then(resp => resp.json())
        .then(note => this.props.showNote(note))
    }

    render(){
        return(
            <div className="container-fluid">
                {this.renderNote()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        note: state.note
    } 
}

const mapDispatchToProps = {showNote}
export default connect(mapStateToProps, mapDispatchToProps)(ShowNote)
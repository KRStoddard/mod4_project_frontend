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

        const token = localStorage.getItem('userToken')
        if (!token) {
            this.props.history.push('/login')
        } else {
            const reqObj = {
                method: 'GET',
                headers: {'Authorization': `Bearer ${token}`}
            }
            fetch(`http://localhost:3001/current_user`, reqObj)
            .then(resp => resp.json())
            .then(user => {
                if (!user.user){
                    this.props.history('/login')
                }})
        }

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
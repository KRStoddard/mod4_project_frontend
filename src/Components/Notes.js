import React from 'react'
import Note from './Note'
import {connect} from 'react-redux'
import {showNotes} from '../actions/notes'
import {Link} from 'react-router-dom'
import {onLogin} from '../actions/user'

class Notes extends React.Component{

    //renders notes based on user and search terms
    renderNotes = () => {
        let notes = this.props.notes
        if (this.props.search.length > 0){
            let search = this.props.search.split(' ')
            search.forEach(search => {
                search = search.toLowerCase()
                notes = notes.filter(note => note.title.split(' ').join('').toLowerCase().includes(search) || note.content.split(' ').join('').toLowerCase().includes(search) || note.tags.map(tag => tag.name).join('').toLowerCase().includes(search))
            })
        }
        return notes.map(note => {
            return <Note key={note.id} note={note} />
        })
    }

    //renders display if user has no notes
    renderNoNotes = () => {
        return(
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                <p className="card-text">You have no notes.</p>
                <Link className="card-link" to="/notes/new">Add Your First Note</Link>
                </div>
            </div>
        )
    }

    //handles auth token verification and fetching notes from backend
    componentDidMount(){
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
            .then(user => {this.props.onLogin(user.user)})
        }


       

        fetch(`http://localhost:3001/notes`)
        .then(resp => resp.json())
        .then(notes => {
            notes = notes.filter(note => note.user_id === this.props.user.id)
            this.props.showNotes(notes)
        })
    }

    //renders container for all notes
    render(){
        return (
            <div className="container-fluid" id={this.props.view}>
                {this.props.notes.length > 0 ? this.renderNotes() : this.renderNoNotes()}
            </div>
        )
    }
}

//maps ability to read state to component's props
const mapStateToProps = state => {
    return {
        notes: state.notes,
        user: state.user,
        view: state.view,
        search: state.search
    }
}

//maps dispatch actions for Redux store to component's props
const mapDispatchToProps = {
    showNotes,
    onLogin
}

//default exports Notes component with read and dispatch Redux store connection
export default connect(mapStateToProps, mapDispatchToProps)(Notes)


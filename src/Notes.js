import React from 'react'
import Note from './Note'
import {connect} from 'react-redux'
import {showNotes} from './actions/notes'
import {Link} from 'react-router-dom'
import {onLogin} from './actions/user'

class Notes extends React.Component{


    renderNotes = () => {
        let notes = this.props.notes
        let search = this.props.search.split(' ').join('').toLowerCase()
        if (this.props.search.length > 0){
            notes = notes.filter(note => note.title.split(' ').join('').toLowerCase().includes(search) || note.content.split(' ').join('').toLowerCase().includes(search) || note.tags.map(tag => tag.name).join('#').toLowerCase().includes(search))
        }
        return notes.map(note => {
            return <Note key={note.id} note={note} />
        })
    }

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


        // if(!this.props.user.username){
        //     this.props.history.push('/login')
        // }

        fetch(`http://localhost:3001/notes`)
        .then(resp => resp.json())
        .then(notes => {
            console.log(notes)
            notes = notes.filter(note => note.user_id === this.props.user.id)
            this.props.showNotes(notes)})
    }
    render(){
        return (
            <div className="container-fluid" id={this.props.view}>
                {this.renderNotes()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        user: state.user,
        view: state.view,
        search: state.search
    }
}

const mapDispatchToProps = {
    showNotes,
    onLogin
}
export default connect(mapStateToProps, mapDispatchToProps)(Notes)

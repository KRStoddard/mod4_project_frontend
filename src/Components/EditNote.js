import React from 'react'
import {showNote} from '../actions/note'
import {connect} from 'react-redux'

class EditNote extends React.Component{

    //local state to handle input changes
    state = {
        title: "",
        content: "",
        tags: ""
    }

    //componentDidMount handles auth validation
    //also fetches note info based on url
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
        .then(note => {
            const tags = note.tags.map(tag => tag.name).join(', ')
            this.setState({"title": note.title, "content": note.content, tags })})
    }

    //saveChanges handles the changes to form input
    //and updates state to reflect
    saveChanges = e => {
       this.setState({[e.target.name]: e.target.value})
    }

    //handleSubmit sends info to backend to update note
    //it then redirects you to view the note you saved
    handleSubmit = e => {
        e.preventDefault()
        const reqObj = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"title": e.target.title.value, "content": e.target.content.value, "tags": e.target.tags.value})
        }
        fetch(`http://localhost:3001/notes/${this.props.match.params.id}`, reqObj)
        .then(resp => resp.json())
        .then(note => {
            const id = note.id
            this.props.history.push(`/notes/${id}`)})
    }

    //shows the edit form pre-populated with previous info
    render(){
        return(
            <div className="container-fluid">
             <div className="edit-form">
                 <h2>Edit Note</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input onChange={this.saveChanges} name="title" className="form-control" type="text" value={this.state.title}></input>
                    <textarea onChange={this.saveChanges} name="content" className="form-control" type="text" rows="5" id="area" value={this.state.content}></textarea>
                    <textarea onChange={this.saveChanges} name="tags" className="form-control" type="text" rows="3" id="area" value={this.state.tags}></textarea>
                    <button type="submit">Submit</button>
                </div>
            </form>
            </div>
            </div>
        )
    }
}

//maps the state of Redux store to component's props
const mapStateToProps = (state) => {
    return {
        note: state.note
    } 
}

//maps action to dispatch changes to Redux store to componenet's props
const mapDispatchToProps = {showNote}

//default exports editNote with Read and Dispatch connection to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(EditNote)
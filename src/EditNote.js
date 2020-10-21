import React from 'react'
import {showNote} from './actions/note'
import {connect} from 'react-redux'

class EditNote extends React.Component{

    state = {
        title: "",
        content: ""
    }

    componentDidMount() {
        fetch(`http://localhost:3001/notes/${this.props.match.params.id}`)  
        .then(resp => resp.json())
        .then(note => this.setState({"title": note.title, "content": note.content}))
    }

    saveChanges = e => {
       this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        const reqObj = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"title": e.target.title.value, "content": e.target.content.value})
        }
        fetch(`http://localhost:3001/notes/${this.props.match.params.id}`, reqObj)
        .then(resp => resp.json())
        .then(note => {
            const id = note.id
            this.props.history.push(`/notes/${id}`)})
    }

    render(){
        return(
            <div className="container-fluid">
             <div className="edit-form">
                 <h2>Edit Note</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input onChange={this.saveChanges} name="title" className="form-control" type="text" value={this.state.title}></input>
                    <textarea onChange={this.saveChanges} name="content" className="form-control" type="text" rows="5" id="area" value={this.state.content}></textarea>
                    <button type="submit">Submit</button>
                </div>
            </form>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(EditNote)
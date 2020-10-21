import React from 'react'
import Note from './Note'
import {connect} from 'react-redux'
import {showNotes} from './actions/notes'
import {Link} from 'react-router-dom'

class Notes extends React.Component{


    renderNotes = () => {
        return this.props.notes.map(note => {
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
        fetch(`http://localhost:3001/notes`)
        .then(resp => resp.json())
        .then(notes => this.props.showNotes(notes))
    }
    render(){
        return (
            <div className="container-fluid">
                {this.renderNotes()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

const mapDispatchToProps = {
    showNotes
}
export default connect(mapStateToProps, mapDispatchToProps)(Notes)

import React from 'react'
import {connect} from 'react-redux'

class NewNote extends React.Component{

    //handleSubmit sends new Note information to the backend
    //it then sends user to the notes homepage
    handleSubmit = e => {
        e.preventDefault()
        const reqObj = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"title": e.target.title.value, "content": e.target.content.value, "user_id": this.props.user.id, "tags": e.target.tags.value})
        }
        fetch(`http://localhost:3001/notes`, reqObj)
        .then(() => this.props.history.push(`/notes`))
        
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
            .then(user => {
                if (!user.user){
                    this.props.history('/login')
                }})
        }
    }

    //renders new note form
    render(){
        return(
            <div className="container-fluid">
                <div className="edit-form">
                    <h2>Create Note</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input  name="title" className="form-control" type="text" placeholder="Title"></input>
                            <textarea  name="content" className="form-control" type="text" rows="5" id="area" placeholder="Your Note Content"></textarea>
                            <textarea name="tags" className="form-control" type="text" rows="3" id="area" placeholder="Your, Tags, Go, Here"/>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

//maps state of redux store to component's props
const mapStateToProps = (state) => {
    return{
    user: state.user
    }
}
//default exports NewNote component with Read connection to Redux Store
export default connect(mapStateToProps)(NewNote)
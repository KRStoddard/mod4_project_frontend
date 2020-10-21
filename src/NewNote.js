import React from 'react'

export default class NewNote extends React.Component{

    handleSubmit = e => {
        e.preventDefault()
        const reqObj = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"title": e.target.title.value, "content": e.target.content.value})
        }
        fetch(`http://localhost:3001/notes`, reqObj)
        .then(() => this.props.history.push(`/notes`))
        
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="edit-form">
                    <h2>Create Note</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input  name="title" className="form-control" type="text" placeholder="Title"></input>
                            <textarea  name="content" className="form-control" type="text" rows="5" id="area" placeholder="Your Note Content"></textarea>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
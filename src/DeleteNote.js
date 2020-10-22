import React from 'react'

export default class DeleteNote extends React.Component{

    deleteHandler = () => {
        const id = this.props.match.params.id
        fetch(`http://localhost:3001/notes/${id}`, {method: 'DELETE'})
        .then(() => this.props.history.push(`/notes`))
    }

    noHandler = () => {
        const id = this.props.match.params.id
        this.props.history.push(`/notes/${id}`)
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

    render(){
        return(
            <div className="container-fluid">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Are you sure you would like to delete?</h5>
                        <button onClick={this.deleteHandler} className="btn btn-primary">Yes</button>
                        <button onClick={this.noHandler} className="btn btn-primary">No</button>
                    </div>
                 </div>
            </div>
        )
    }
}
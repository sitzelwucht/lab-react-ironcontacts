import React from 'react'

class ContactDetails extends React.Component {

    render() {
        return (
            <>
                <td><img src={this.props.person.pictureUrl} alt="pic" height="120" /></td> 
                <td>{this.props.person.name}</td> 
                <td>{this.props.person.popularity}</td> 
                <td><button onClick={() => { this.props.onDelete(this.props.person.id) }}>Delete</button></td>
            </>
        )
    }
}

export default ContactDetails

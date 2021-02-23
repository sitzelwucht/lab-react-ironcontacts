import React from 'react'
import contactsJSON from '../contacts.json'
import ContactDetails from './ContactDetails'
import './ContactList.css'


class ContactList extends React.Component {

    state = {
        contacts: contactsJSON.slice(0, 5)
      }
    
    handleAdd = () => {
        let rand = Math.floor(Math.random() * contactsJSON.length)
        let randActor = contactsJSON[rand]

        this.setState({
            contacts: [...this.state.contacts, randActor]
        })
    }

    handleSortName = () => {
        let clone = JSON.parse(JSON.stringify(this.state.contacts))
        clone.sort((a, b) => {
            if (a.name > b.name) return 1
            else if (a.name < b.name) return -1
            else return 0
        })

        this.setState({
            contacts: clone
        })
    }


    handleDelete = (actorId) => {
        let filtered = this.state.contacts.filter(item => {
            return item.id !== actorId
    })
        this.setState({
            contacts: filtered
        })
    }

    handleSortPop = () => {
        let clone = JSON.parse(JSON.stringify(this.state.contacts))
        clone.sort((a, b) => {
            if (a.popularity < b.popularity) return 1
            else if (a.popularity > b.popularity) return -1
            else return 0
        })

        this.setState({
            contacts: clone
        })
    }

      render() {
          return (
              <>
                <div className="header">
                    <h1>IronContacts</h1>
                        <button onClick={this.handleAdd}>Add random contact</button>
                        <button onClick={this.handleSortName}>Sort by name</button>
                        <button onClick={this.handleSortPop}>Sort by popularity</button>
                    </div>

                <table>
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Popularity</th>
                                <th></th>
                            </tr>
                        </thead>
                    <tbody>
                { this.state.contacts.map((item, i) => {
                    return (
                        <tr key={i}>
                            <ContactDetails person={item} onDelete={this.handleDelete} />
                        </tr>
                        )
                    })
                }
                    </tbody>
                </table>
              </>
          )
      }
}


export default ContactList
import React from "react"
import avatar from "./images/avatar.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function App() {
    const [showForm, setShowForm] = React.useState(true)
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    const starImage = contact.isFavorite? starFilled : starEmpty

    function toggleFavorite() {
      console.log("Toggle Favorite") //OLD VERSION OF STATE |ADDED ONE PROPERTY    
      setContact(prevContact =>           ({...prevContact, isFavorite : !prevContact.isFavorite}))
    }//I need to provide a replacement state here new object, after comma just adjust the indidividual property on that state. If you would only return the part after comma, you would return a new object with one property only
    

    /* FORM SECTION */ 
    const toggleFormVisibility = () => {
      setShowForm(prevShowForm => !prevShowForm)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      const formEl = e.currentTarget 
      const formData = new FormData(formEl)
      const email = formData.get("email")
      console.log(email)
      formEl.reset()
    }

    return (
        <>
        <main>
        <article className="card" onClick={toggleFormVisibility}>
          <img src={avatar} className="avatar" alt={`User profile picture of ${contact.firstName} ${contact.lastName}`} />
          <div className="info">
            <button
              onClick={toggleFavorite}
              aria-pressed={contact.isFavorite} //false or true value
              aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
              className="favorite-button"
            >
              <img
                src={starImage}
                alt={contact.isFavorite ? "filled start icon" : "empty star icon"}
                className="favorite" />
            </button>
            <h2 className="name">{contact.firstName} {contact.lastName}</h2>
            <p className="contact">{contact.phone}</p>
            <p className="contact">{contact.email}</p>
          </div>
        </article>
        {showForm && <section className="form-section">
          <h1>Signup form</h1>
          <form method="post" onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
            <br />

            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" />
            <br />

            <button className="button">Submit</button>

          </form>
      </section>
      }
      </main>
      </>
    )
}



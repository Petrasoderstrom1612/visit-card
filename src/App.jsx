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

    const handleSubmit = (formData) => {//e.preventDefault() & formEl.reset() no longer needed 
      const occupation = formData.get("occupation")
      const email = formData.get("email")
      const workStyle = formData.getAll("work-style")
      const workPlace = formData.getAll("workplace")
      console.log(email, occupation, workStyle,workPlace)
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
          <form method="post" action={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" placeholder="joe@schmoe.com" defaultValue="joe@schmoe.com"/> 
            <br />

            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" />
            <br />

            <label htmlFor="comments">Comments:</label>
            <textarea id="comments" name="comments"></textarea>
            <br />

            <fieldset>
              <legend>Employment status:</legend>
              <label>
              <input type="radio" name="occupation" value="unemployed" defaultChecked={true}/> {/*defaultChecked is default for radios*/}
                Unemployed
              </label>
              <label>
                <input type="radio" name="occupation" value="part-time"/> {/*value is the one sending to backend as name is the gatherer here*/}
                Part-time
              </label>
            </fieldset>
            <br />

            <fieldset>
              <legend>Work style:</legend>
              <label>
              <input type="checkbox" name="work-style" value="remote" defaultChecked={true}/> {/*defaultChecked is default for checkboxes*/}
                Remote
              </label>
              <label>
                <input type="checkbox" name="work-style" value="hybrid"/> {/*value is the one sending to backend as name is the gatherer here*/}
                Hybrid
              </label>
            </fieldset>

            <label htmlFor="workplace">Where do you live?</label>
            <select id="workplace" name="workplace" defaultValue="" required> {/*default value connects you to the first option, if you wrote malmo, then you would be connected to the second one. required is a must here as it ensures you have to choose, to avoid null since we have associated the default with empty""*/}
              <option value="" disable>-- Choose a city --</option> {/*greyed out so you cannot select it*/}
              <option value="malmo">Malmö</option>
              <option value="gothenburg">Göteborg</option>
              <option value="stockholm">Stockholm</option>
            </select>
            <button className="button">Submit</button>
          </form>
      </section>
      }
      </main>
      </>
    )
}



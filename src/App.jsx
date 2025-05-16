import React from "react"
import avatar from "./images/avatar.png"
import Star from "./Star"


export default function App() {
    const [showForm, setShowForm] = React.useState(true)
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })


    function toggleFavorite() {
      console.log("Toggle Favorite") //OLD VERSION OF STATE |ADDED ONE PROPERTY    
      setContact(prevContact =>           ({...prevContact, isFavorite : !prevContact.isFavorite}))
    }//I need to provide a replacement state here new object, after comma just adjust the indidividual property on that state. If you would only return the part after comma, you would return a new object with one property only
    

    /* FORM SECTION */ 
    const toggleFormVisibility = () => {
      setShowForm(prevShowForm => !prevShowForm)
    }

    const handleSubmit = (formData) => {//e.preventDefault() & formEl.reset() no longer needed 
      // const occupation = formData.get("occupation") Individuellt
      // const email = formData.get("email") Individuellt
      // const workStyle = formData.getAll("work-style") Individuellt
      // const workPlace = formData.getAll("workplace") Individuellt
      // console.log(email, occupation, workStyle,workPlace) Individuellt
      const data = Object.fromEntries(formData)
      const workplace = formData.getAll("work-style") //must be done individually as the Object.fromEntries is unable to accept an object, hence several checkboxes only saves as one and it is the last chosen one
      console.log(data, workplace)
      const allData = {...data, workplace} //workplace overrides because the variable is the exact same name as property, if the variable name was different, you would do workplace: differentVariableName
      console.log(allData) 
    }

    return (
        <>
        <main>
        <article className="card">
          <img src={avatar} className="avatar" alt={`User profile picture of ${contact.firstName} ${contact.lastName}`} onClick={toggleFormVisibility}/>
          <Star {...contact} toggleFavorite={toggleFavorite}/> {/* passing all data as object destructuring, |  YOU CANNOT USE ONCLICK AS THIS IS A JSX COMPONENT AND NOT HTML WITH DOM*/}
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
              <legend>Seeking for job:</legend>
              <label>
              <input type="radio" name="occupation" value="full-time" defaultChecked={true}/> {/*defaultChecked is default for radios*/}
                Fulltime
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
            <br />

            <label htmlFor="workplace">Where do you live?</label>
            <select id="workplace" name="workplace" defaultValue="" required> {/*default value connects you to the first option, if you wrote malmo, then you would be connected to the second one. required is a must here as it ensures you have to choose, to avoid null since we have associated the default with empty""*/}
              <option value="" disable="true">-- Choose a city --</option> {/*greyed out so you cannot select it*/}
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



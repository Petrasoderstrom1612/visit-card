import React from "react"
import avatar from "./images/avatar.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    function toggleFavorite() {
        console.log("Toggle Favorite")
    }

    return (
        <main>
            <article className="card">
                <img src={avatar} className="avatar" alt="User profile picture of John Doe"/>
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={false}
                        className="favorite-button"
                    >
                        <img
                            src={starEmpty}
                            alt="empty star icon"
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">John Doe</h2>
                    <p className="contact">+46 5551212</p>
                    <p className="contact">itsmyrealname@example.se</p>
                </div>
            </article>
        </main>
    )
}

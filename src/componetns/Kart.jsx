import React from 'react'
import { Link } from 'react-router-dom'

function Kart({user}) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{user.subject}</h5>
                <p className="card-text">{user.description}</p>
                <Link to={`/detail/${user.id}`}>Details</Link>
            </div>
        </div>
    )
}

export default Kart
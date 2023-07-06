import React from 'react'
import './card.css'

const Cards = ({user}) => {
  return (
    <div>
        <div class="container">
            <div class="card">
                <div class="image">
                    <img src='' alt="image" src={user.avatar} />
                </div>
                <div class="content">
                    <h3>{user.first_name} {user.last_name}</h3>
                    <h5 class="email">{user.email}</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards;
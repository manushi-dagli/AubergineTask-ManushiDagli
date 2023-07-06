import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from "./cards";
import { useNavigate } from "react-router-dom";
import './card.css';

const List = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
      axios.get('https://reqres.in/api/users?page=2').then((res)=>{
        setUsers(res.data.data)
      })
      .catch((err)=>{
  
      })
    }, [])

    return (

        <div className='App'>
          {
            users.map((item, index) => (
              <div onClick={()=>{
               navigate('user', {state : {id: item.id}})
              }}>
              <Cards user = {item} />
              <br /> 
              </div>
                ))
              }
        </div>

    )
}

export default List;
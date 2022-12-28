import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Kart from '../componetns/Kart'

function Home() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3000/data')
            .then((res) => {setUsers(res.data)
            console.log(res.data);
            })
    }, [])
    return (
        
        users.map((user,idx) => {
            return (
                <Kart key={idx} user={user} />
            )
        })
    )
}

export default Home
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';

function Detail() {
    const [flags, setFlags] = useState([])
    const { id } = useParams()
    function Delete() {
        axios.delete(`http://localhost:3000/data/${id}`)
            .then(() => console.log({ status: 'Delete successful' }));
            toast.success('Successfully deltedd!')
    }
    useEffect(() => {
        axios
            .get(`http://localhost:3000/data/${id}`)
            .then((res) => {
                setFlags(res.data);

            }, 3000);
    }, []);
    return (
        <div className='cardinfo'>
            <div className='cardinfotext'>
                <p>Native Name: {flags.subject}</p>
                <p>Population: {flags.description}</p>
                <p>Region: {flags.category}</p>
            </div>
                <button onClick={Delete}>Delete</button>
            <Toaster/>
        </div>
    );
}

export default Detail
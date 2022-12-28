import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { toast, Toaster } from 'react-hot-toast';
import {  useParams } from 'react-router-dom';

function Detail() {
    const [flags, setFlags] = useState([])
    const { id } = useParams()
    function Delete() {
        axios.delete(`http://localhost:3000/data/${id}`)
            .then(() => console.log({ status: 'Delete successful' }));
            toast.success('Successfully deleted!')
    }
    useEffect(() => {
        axios
            .get(`http://localhost:3000/data/${id}`)
            .then((res) => {
                setFlags(res.data);

            }, 3000);
    }, []);
    return (
        <Helmet>
                <meta charSet="utf-8" />
                <title>Karts</title>
        <div className='cardinfo'>
            <div className='cardinfotext'>
                <p>Native Name: {flags.subject}</p>
                <p>Population: {flags.description}</p>
                <p>Region: {flags.category}</p>
            </div>
                <button onClick={Delete}>Delete</button>
            <Toaster/>
        </div>
        </Helmet>
    );
}

export default Detail
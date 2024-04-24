
import React, { useState, useEffect } from 'react'
import './Listproduct.css'
import listproduct_removeicon from '../../assets/listproduct_removeicon.png'

const Listproduct = () => {

    const [allproducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts')
            .then((res) => res.json())
            .then((data) => { setAllProducts(data) });
    }

    useEffect(() => {
        fetchInfo();
    }, [])

    const remove_product = async (id) => {
        await fetch('http://localhost:4000/removeproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        })
        await fetchInfo();
    }

    return (
        <div className='listproduct'>
            <h1>All Questions List</h1>
            <div className="listproduct-format-main">
                <p>Question</p>
                <p>Options</p>
                <p>Answer</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allproducts.map((product, index) => {
                    return <> <div key={index} className="listproduct-format-main listproduct-format">
                        <p>{product.question}</p>
                        <p>{product.options}</p> {/* Corrected typo here */}
                        <p>{product.answer}</p>
                        <img onClick={() => { remove_product(product.id) }} className='listproduct-remove-icon' src={listproduct_removeicon} alt="" />
                    </div>
                        <hr /></>
                })}
            </div>
        </div>
    )
}

export default Listproduct

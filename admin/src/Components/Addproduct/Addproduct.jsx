// import React, { useState } from 'react'
// import './Addproduct.css'

// const Addproduct = () => {
//     // Initialize optionsArray state with an array of 4 empty strings
//     const [options, setOptions] = useState(['', '', '', '']);

//     // Function to update optionsArray when input values change
//     const handleOptionChange = (index, value) => {
//         const newOptions = [...options];
//         newOptions[index] = value;
//         setOptions(newOptions);
//     };

//     const [productDetails, setProductDetails] = useState({
//         question: "",
//         answer: "",
//         options: options
//     })

//     // Function to handle changes in product details
//     const changeHandler = (e) => {
//         setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
//     }

//     const Add_Product = async () => {
//         console.log(productDetails);
//     }

//     return (
//         <div className='addproduct'>
//             <div className="addproduct-itemfields">
//                 <div>
//                     <p>Add Question</p>
//                     <input
//                         value={productDetails.question}
//                         onChange={changeHandler}
//                         type="text"
//                         name="question"
//                         placeholder='Type here'
//                     />
//                 </div>
//                 <div className="addproduct-options">
//                     <p>Add Options</p>
//                     {/* Mapping through the optionsArray to generate input fields */}
//                     {options.map((option, index) => (
//                         <input
//                             key={index}
//                             type="text"
//                             value={option}
//                             onChange={(e) => handleOptionChange(index, e.target.value)}
//                             placeholder='Enter value'
//                         />
//                     ))}
//                 </div>
//                 <div className="addproduct-answer">
//                     <p>Add Answer</p>
//                     <input
//                         type="text"
//                         name="answer"
//                         value={productDetails.answer}
//                         onChange={changeHandler}
//                         placeholder='Type here'
//                     />
//                 </div>
//             </div>
//             <button onClick={() => { Add_Product() }} className='addproduct-btn'>Add</button>
//         </div>
//     )
// }

// export default Addproduct


// import React, { useState } from 'react'
// import './Addproduct.css'

// const Addproduct = () => {
//     // Initialize optionsArray state with an array of 4 empty strings
//     const [options, setOptions] = useState(['', '', '', '']);

//     // Function to update optionsArray when input values change
//     const handleOptionChange = (index, value) => {
//         const newOptions = [...options];
//         newOptions[index] = value;
//         setOptions(newOptions);

//         // Update productDetails.options with the new options array
//         setProductDetails({ ...productDetails, options: newOptions });
//     };

//     const [productDetails, setProductDetails] = useState({
//         question: "",
//         answer: "",
//         options: options
//     })

//     // Function to handle changes in product details
//     const changeHandler = (e) => {
//         setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
//     }

//     const Add_Product = async () => {
//         console.log(productDetails);
//         // let responseData;
//         // let product = productDetails;
//         await fetch('http://localhost:4000/addproduct', {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application-json',
//             },
//             body: JSON.stringify(product),
//         }).then((resp) => resp.json()).then((data) => {
//             data.success ? alert("Question Added!") : alert("Failed!");
//         })



//     }

//     return (
//         <div className='addproduct'>
//             <div className="addproduct-itemfields">
//                 <div>
//                     <p>Add Question</p>
//                     <input
//                         value={productDetails.question}
//                         onChange={changeHandler}
//                         type="text"
//                         name="question"
//                         placeholder='Type here'
//                     />
//                 </div>
//                 <div className="addproduct-options">
//                     <p>Add Options</p>
//                     {/* Mapping through the optionsArray to generate input fields */}
//                     {options.map((option, index) => (
//                         <input
//                             key={index}
//                             type="text"
//                             value={option}
//                             onChange={(e) => handleOptionChange(index, e.target.value)}
//                             placeholder='Enter value'
//                         />
//                     ))}
//                 </div>
//                 <div className="addproduct-answer">
//                     <p>Add Answer</p>
//                     <input
//                         type="text"
//                         name="answer"
//                         value={productDetails.answer}
//                         onChange={changeHandler}
//                         placeholder='Type here'
//                     />
//                 </div>
//             </div>
//             <button onClick={() => { Add_Product() }} className='addproduct-btn'>Add</button>
//         </div>
//     )
// }

// export default Addproduct


import React, { useState } from 'react'
import './Addproduct.css'

const Addproduct = () => {
    // Initialize optionsArray state with an array of 4 empty strings
    const [options, setOptions] = useState(['', '', '', '']);

    // Function to update optionsArray when input values change
    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);

        // Update productDetails.options with the new options array
        setProductDetails({ ...productDetails, options: newOptions });
    };

    const [productDetails, setProductDetails] = useState({
        question: "",
        answer: "",
        options: options
    })

    // Function to handle changes in product details
    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
    }

    const Add_Product = async () => {
        console.log(productDetails);
        try {
            // Send productDetails to the backend server
            const response = await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productDetails),
            });

            // Handle response from the server
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    alert("Question Added!");
                } else {
                    alert("Failed to add question!");
                }
            } else {
                alert("Failed to add question!");
            }
        } catch (error) {
            console.error('Error adding product:', error);
            alert("Failed to add question! Please check your internet connection and try again.");
        }
    }

    return (
        <div className='addproduct'>
            <div className="addproduct-itemfields">
                <div>
                    <p>Add Question</p>
                    <input
                        value={productDetails.question}
                        onChange={changeHandler}
                        type="text"
                        name="question"
                        placeholder='Type here'
                    />
                </div>
                <div className="addproduct-options">
                    <p>Add Options</p>
                    {/* Mapping through the optionsArray to generate input fields */}
                    {options.map((option, index) => (
                        <input
                            key={index}
                            type="text"
                            value={option}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                            placeholder='Enter value'
                        />
                    ))}
                </div>
                <div className="addproduct-answer">
                    <p>Add Answer</p>
                    <input
                        type="text"
                        name="answer"
                        value={productDetails.answer}
                        onChange={changeHandler}
                        placeholder='Type here'
                    />
                </div>
            </div>
            <button onClick={() => { Add_Product() }} className='addproduct-btn'>Add</button>
        </div>
    )
}

export default Addproduct

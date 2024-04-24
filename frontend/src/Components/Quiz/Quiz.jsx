
// export default Quiz;

// import React, { useState, useEffect } from 'react';
// import './Quiz.css';
// import { Quiz_data } from '../Assets/Quiz_data';
// import QUIZResult from './QUIZResult';

// const Quiz = () => {
//     const [CurrentQuestion, setCurrentQuestion] = useState(0);
//     const [Score, setScore] = useState(0);
//     const [ClickedOption, setClickedOption] = useState(0);
//     const [ShowResult, setShowResult] = useState(false);
//     const [selectedQuestions, setSelectedQuestions] = useState([]);

//     useEffect(() => {
//         const shuffledQuestions = Quiz_data.sort(() => Math.random() - 0.5);
//         const selected = shuffledQuestions.slice(0, 10);
//         setSelectedQuestions(selected);
//     }, []);

//     const ChangeQuestion = () => {
//         UpdateScore();
//         if (CurrentQuestion < 9) {
//             setCurrentQuestion(CurrentQuestion + 1);
//             setClickedOption(0);
//         } else {
//             setShowResult(true);
//         }
//     }

//     const UpdateScore = () => {
//         if (ClickedOption === selectedQuestions[CurrentQuestion]?.answer) {
//             setScore(Score + 1);
//         }
//     }

//     const resetAll = () => {
//         setShowResult(false);
//         setCurrentQuestion(0);
//         setClickedOption(0);
//         setScore(0);
//         const shuffledQuestions = Quiz_data.sort(() => Math.random() - 0.5);
//         const selected = shuffledQuestions.slice(0, 10);
//         setSelectedQuestions(selected);
//     }

//     return (
//         <div className='quiz'>
//             <p className="heading-text">PRACTICE HERE!</p>
//             <div className="container">
//                 {ShowResult ? (
//                     <QUIZResult Score={Score} TotalScore={10} tryAgain={resetAll} />
//                 ) : (
//                     <>
//                         <div className="question">
//                             <span id='question-number' style={{ fontSize: '26px', fontFamily: 'poppins', color: '#303030' }}>{CurrentQuestion + 1}.</span>
//                             <span id='question-txt' style={{ fontSize: '23px', fontFamily: 'poppins', color: '#303030' }}>{selectedQuestions[CurrentQuestion]?.question}</span>
//                         </div>
//                         <div className="option-container">
//                             {
//                                 selectedQuestions[CurrentQuestion]?.options.map((option, i) => {
//                                     return (
//                                         <button className={`option-btn ${ClickedOption === i + 1 ? "checked" : null}`} key={i} onClick={() => setClickedOption(i + 1)}>{option}</button>
//                                     );
//                                 })
//                             }
//                         </div>
//                         <input type="button" value="Next" id='next-button' onClick={ChangeQuestion} />
//                     </>)}
//             </div>
//         </div>
//     );
// }

// export default Quiz;

import React, { useState, useEffect } from 'react';
import './Quiz.css';
import QUIZResult from './QUIZResult';

const Quiz = () => {
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch questions');
                }
                return response.json();
            })
            .then(data => {
                // Shuffle the questions array
                const shuffledQuestions = data.sort(() => Math.random() - 0.5);
                // Select the first 10 questions
                const selected = shuffledQuestions.slice(0, 10);
                setSelectedQuestions(selected);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < 9) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            setShowResult(true);
        }
    }

    const updateScore = () => {
        if (clickedOption === selectedQuestions[currentQuestion]?.answer) {
            setScore(score + 1);
        }
    }

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='quiz'>
            <p className="heading-text">PRACTICE HERE!</p>
            <div className="container">
                {showResult ? (
                    <QUIZResult score={score} totalScore={10} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className="question">
                            <span id='question-number'>{currentQuestion + 1}.</span>
                            <span id='question-txt'>{selectedQuestions[currentQuestion]?.question}</span>
                        </div>
                        <div className="option-container">
                            {
                                selectedQuestions[currentQuestion]?.options.map((option, i) => (
                                    <button
                                        className={`option-btn ${clickedOption === i + 1 ? "checked" : ""}`}
                                        key={i}
                                        onClick={() => setClickedOption(i + 1)}
                                    >
                                        {option}
                                    </button>
                                ))
                            }
                        </div>
                        <input type="button" value="Next" id='next-button' onClick={changeQuestion} />
                    </>
                )}
            </div>
        </div>
    );
}

export default Quiz;

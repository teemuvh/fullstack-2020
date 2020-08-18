import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ reviews, text }) => {
    if (reviews.good || reviews.neutral || reviews.bad !== 0) {
        return (
            <table>
                <StatisticLine text='good' reviews={reviews.good} />
                <StatisticLine text='neutral' reviews={reviews.neutral} />
                <StatisticLine text='bad' reviews={reviews.bad} />
                <StatisticLine text='all' reviews={reviews.good + reviews.neutral + reviews.bad} />
                <StatisticLine text='average' reviews={(reviews.good * 1 + reviews.bad * -1) / (reviews.good + reviews.neutral + reviews.bad)} />
                <StatisticLine text='positive' reviews={reviews.good / (reviews.good + reviews.neutral + reviews.bad) * 100} />
            </table>
        )
    }
    return (
        <div>
        No feedback given.</div>
    )
}

const StatisticLine = ({ reviews, text }) => {
    if (text === 'positive') {
        return (
            <tbody>
                <tr>
                    <td>{text}</td><td>{reviews} %</td>
                </tr>
            </tbody>
        )
    }
    return (
        <tbody>
            <tr>
                <td>{text}</td><td>{reviews}</td>
            </tr>
        </tbody>
    )
}

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const App = () => {
    const [reviews, setReviews] = useState({
        good: 0, neutral: 0, bad: 0
    })

    const handleGoodClick = () => {
        const newReview = {
            ...reviews,
            good: reviews.good + 1
        }
        setReviews(newReview)
    }

    const handleNeutralClick = () => {
        const newReview = {
            ...reviews,
            neutral: reviews.neutral + 1
        }
        setReviews(newReview)
    }

    const handleBadClick = () => {
        const newReview = {
            ...reviews,
            bad: reviews.bad + 1
        }
        setReviews(newReview)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={handleGoodClick} text='good' />
            <Button onClick={handleNeutralClick} text='neutral' />
            <Button onClick={handleBadClick} text='bad' />

            <h1>statistics</h1>
            <Statistics reviews={reviews}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)

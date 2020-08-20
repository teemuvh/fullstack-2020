import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const points = Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0)
    const selectAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))

    const [votes, setNewVotes] = useState(points)
    const copy = [...votes]
    copy[selected] += 1
    const addPoints = () => setNewVotes(copy)

    const mostVotes = Math.max(...votes)
    const best = votes.indexOf(mostVotes)

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <p>{props.anecdotes[selected]}</p>
            <p>This anecdote has {votes[selected]} votes.</p>
            <Button handleClick={addPoints} text='vote' />
            <Button handleClick={selectAnecdote}text='next anecdote' />

            <h2>Anecdote with most votes</h2>
            <p>{props.anecdotes[best]}</p>
            <p>This anecdote has {mostVotes} votes</p>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)

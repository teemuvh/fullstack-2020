import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1>{props.kurssi.name}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part osa={props.osat[0]} />
            <Part osa={props.osat[1]} />
            <Part osa={props.osat[2]} />
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>
                {props.osa.name} {props.osa.exercises}
            </p>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.yhteensa[0].exercises + props.yhteensa[1].exercises + props.yhteensa[2].exercises} </p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

  return (
    <div>
        <Header kurssi={course} />
        <Content osat={course.parts} />
        <Total yhteensa={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

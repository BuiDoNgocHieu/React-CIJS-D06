import React from 'react'
import '../assets/css/Card.css'
// const front = 'https://upload.wikimedia.org/wikipedia/vi/thumb/f/f7/Sugimoris025.png/220px-Sugimoris025.png'
export function Card(props) {

    return (
        <div>
            <div className="card-area " onClick={() => props.flip(props.indx, 1)}>
            <img className="card-image"
                src={props.isFinish ? props.finish : props.isUp ? props.front : props.back}
                flip={props.isFlip}
                onAnimationEnd={() => { props.flip(props.indx, 0); props.select(props.indx) }}
                alt="pikachu" />

        </div >
        </div>
    )


}
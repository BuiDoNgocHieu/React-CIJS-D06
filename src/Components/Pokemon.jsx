import '../assets/css/Pokemon.css'
export function Pokemon(props) {
    // console.log(props)
    return (
        // allow to drag pokemon image
        <div className="pokemon-cont"
            draggable="true"
            onDragStart={(e) => {
                console.log(props.indx)
                // tranfer data
                e.dataTransfer.setData('from', props.type)
                e.dataTransfer.setData('indx', props.indx)
            }}
        >
            <img src={props.avatar} alt={props.avatar}/>
        </div>
    )
}
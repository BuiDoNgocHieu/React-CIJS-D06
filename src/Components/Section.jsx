import '../assets/css/Section.css'
import { Pokemon } from './Pokemon'
export function Section(props) {
    return (
        <div className="section-cont">
            <div className={` type-cont ${props.type}`}>
                <p>{props.type || 'Fire'}</p>
            </div>
            <div className="pokemons-cont"
                onDrop={(e) => {
                    console.log('this is on drop')
                    props.move(e.dataTransfer.getData('from'), props.type, e.dataTransfer.getData('indx'))
                }}
                onDragOver={(e) => {
                    e.preventDefault()
                    // console.log('over')
                }}
                >
                {
                    // if value is zero (the pokemon i-th not in the list)
                    // return -1 , otherwise return it's index
                    props[props.type].map((val, indx) => {
                        if (val != 0) return indx
                        return -1
                    })
                        // select only not -1 

                        .filter(val => val !== -1)
                        .map((val) => {
                            // console.log(val)
                            return (
                                <Pokemon {...props.pokemons[val]} indx={val} key={val} type={props.type} />
                            )
                        })
                }
            </div>
        </div>
    )
}
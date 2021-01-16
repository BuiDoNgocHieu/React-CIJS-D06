import '../assets/css/Collection.css'
import { Pokemon } from './Pokemon'
export function Collection(props) {
    return (
        <div className="border collection-cont"
        // must prevent dragOver to enable Drop event
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
                props.move(e.dataTransfer.getData('from'), props.type, e.dataTransfer.getData('indx'))
            }}>
            {
                // if value is zero (the pokemon i-th not in the list)
                // return -1 , otherwise return it's index
                props.remain.map((val, indx) => {
                    if (val != 0) return indx
                    return -1
                })
                // select only not -1 
                    .filter(val => val !== -1)
                    .map((val) => {
                        // console.log(val)
                        return (
                            <Pokemon {...props.pokemons[val]} key={val} indx={val} type={props.type} />
                        )
                    })
            }
        </div>
    )
}
import '../assets/css/SectionList.css'
import { Section } from '../Components/Section'
export function SectionList(props) {
    return (
        <div className="section-list-cont">
            <Section type="fire" pokemons={props.pokemons} fire={props.fire} move={props.move} />
            <Section type="water" pokemons={props.pokemons} water={props.water} move={props.move} />
            <Section type="grass" pokemons={props.pokemons} grass={props.grass} move={props.move} />
        </div>
    )
}
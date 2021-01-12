import '../assets/css/SearchBar.css'

export function SearchBar(props) {
    return (
        <input className="searchbar-area" onChange={props.onChange} type="text" placeholder="Enter your emoji..." />
    )

}
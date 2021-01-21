import '../assets/css/Search.css'
export function Search(props){
    return (
        <div className="search-area">
            <input className="search-input" type="text" placeholder="Enter your book name" placeholder="Enter your book name?" onKeyDown={props.search}/>

        </div>
    )
}
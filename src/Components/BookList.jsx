import '../assets/css/BookList.css'
import { Book } from './Book'

export function BookList(props) {
    return (
        <div className="booklist-area border">
            {props.books.map(book => {
                return (
                    <Book {...book}/>

                )
            })}
        </div>
    )
}
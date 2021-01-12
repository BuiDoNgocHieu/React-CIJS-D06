import { Emoji } from './Emoji'


export function EmojiList(props) {
    let emojis = props.emojis
    emojis.length = emojis.length > 20 ? 20 : emojis.length
    let data = emojis.map((emoji, indx) => {
        return (
            <Emoji key={indx} {...emoji} />
        )
    })
    return (
        <div className="emoji-list-area">
            {data}
        </div>
    );
}
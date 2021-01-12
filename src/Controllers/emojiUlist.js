export function filterEmoji(searchText, data) {
    return data.filter((value) => {
        return value.keywords.indexOf(searchText) != -1
    })
}
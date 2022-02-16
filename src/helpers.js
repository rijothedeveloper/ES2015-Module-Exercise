function choice (items) {
    const randomIdx = Math.floor(Math.random() * items.length)
    return items[randomIdx]
}

function remove(items, item) {
    for (let i of items){
        if (i === item) return item
    }
}

export { choice, remove }
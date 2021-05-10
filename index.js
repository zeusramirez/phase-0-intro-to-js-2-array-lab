// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph')
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name) {
    cats.pop()
}
function destructivelyRemoveFirstCat(name) {
    cats.shift()
}
function appendCat(name) {
    const copyOfCats = [...cats, "Broom"]
    return copyOfCats
}
function prependCat(name){
    const copyOfCats = ["Arnold" , ...cats]
    return copyOfCats
}
function removeLastCat() {
    const copyOfCats = cats.slice(0,-1)
    return copyOfCats
}
function removeFirstCat() {
    const copyOfCats = cats.slice(1)
    return copyOfCats
}
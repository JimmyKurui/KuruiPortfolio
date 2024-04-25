export function createNewElement( element, classes=[], attrs={}, innerHTML=null, extraText='') {
    const newElem = document.createElement(element)
    classes.forEach(name => newElem.classList.add(name))
    if(typeof attrs === 'object') {
        for (const key in attrs) {
            if (Object.hasOwnProperty.call(attrs, key)) {
                newElem.setAttribute(key, attrs[key])
            }
        }
    }
    if(innerHTML) {
        newElem.innerHTML = "";
        newElem.append(innerHTML, document.createTextNode(extraText))
    }
    console.log("Element created")
    return newElem
}

export { createNewElement as default}
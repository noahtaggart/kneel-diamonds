import { getMetals, setMetal, getCustomOrders } from "./dataAccess.js"


const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"
    const order = getCustomOrders()
    // This is how you have been converting objects to <li> elements
    const listItems = metals.map(metal => {
        if (order.metalId === undefined) {
            return `<li>
                <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
            </li>`
        } else if (order.metalId === metal.id) {
            return `<li>
                <input type="radio" name="metal" value="${metal.id}" checked/> ${metal.metal}
            </li>`
        } else {
            return `<li>
                <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
            </li>`
        }
    })
    html += listItems.join("")
    html += "</ul>"
    return html
}


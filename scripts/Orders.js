import { addCustomOrder, getOrders, getMetals, getStyles, getSizes, getTypes } from "./database.js"




const buildOrderListItem = (order) => {
    const metals = getMetals()

    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const styles = getStyles()

    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    const sizes = getSizes()

    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )

    const types = getTypes()
    const foundType = types.find(
        (type) => {
            return type.id === order.typeId
        }
    )


    let totalCost = foundMetal.price + foundStyle.price + foundSize.price
    totalCost *= foundType.priceMultiplier 

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

/*
const metals = getMetals()

const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
    )
    
    
            */
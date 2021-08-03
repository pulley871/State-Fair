import { AddToTotal } from "../totalTickets/TotalTickets.js"

const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", customEvent => {
        
        contentTarget.innerHTML += `<div class="person eater"></div>`
        AddToTotal(1)
        console.log("Hi")
    })
}


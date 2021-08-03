import { AddToTotal } from "../totalTickets/TotalTickets.js"

const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")


export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        
        contentTarget.innerHTML += `<div class="person player"></div>`
        AddToTotal(1)
        console.log("Hi")
    })
}


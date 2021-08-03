import { AddToTotal } from "../totalTickets/TotalTickets.js";

const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        const rideSection = document.querySelector(".rides");
        rideSection.innerHTML += `<div class="person rider"></div>`
        AddToTotal(1)
        console.log("Hi")
    })
}


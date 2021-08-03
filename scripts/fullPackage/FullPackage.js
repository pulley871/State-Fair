import { AddToTotal } from "../totalTickets/TotalTickets.js"

const sideshowTarget = document.querySelector(".sideshow")
const gamesTarget = document.querySelector(".games")
const foodTarget = document.querySelector(".food")
const ridesTarget = document.querySelector(".rides")


const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("fullPackagePurchased", customEvent => {
        
        sideshowTarget.innerHTML += `<div class="person bigSpender "></div>`
        gamesTarget.innerHTML += `<div class="person bigSpender "></div>`
        foodTarget.innerHTML += `<div class="person bigSpender "></div>`
        ridesTarget.innerHTML += `<div class="person bigSpender "></div>`
        AddToTotal(4)
        console.log("Hi")
    })
}
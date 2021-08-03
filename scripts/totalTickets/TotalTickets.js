const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")
let totalTickets = 0
const TotalTickets = ()=> {
    return contentTarget.innerHTML = `Total Tickets Sold: ${totalTickets}`
}

export const AddToTotal = (num) =>{
    totalTickets += (num)
    TotalTickets()
}
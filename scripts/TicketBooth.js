

const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")
export const TicketBooth = () => {
    contentTarget.innerHTML = `
    <div class="ticketBooth">
    <button id="rideTicket">Ride Ticket</button>
    </div>
    <div class="ticketBooth">
    <button id="foodTicket">Food Ticket</button>
    </div>
    <div class="ticketBooth">
    <button id="gameTicket">Game Ticket</button>
    </div>
    <div class="ticketBooth">
    <button id="sideshowTicket">Sideshow Ticket</button>
    </div>
    <div class="ticketBooth">
    <button id="bigSpender">Big Spender Ticket</button>
    </div>
    `
}
/*

 TICKETS!!!

*/

eventHub.addEventListener("click", clickEvent =>{
    if( clickEvent.target.id  === "foodTicket"){
        const foodEvent = new CustomEvent("foodTicketPurchased" )
        
       eventHub.dispatchEvent(foodEvent) 
       
    } else if( clickEvent.target.id  === "rideTicket"){
            const rideEvent = new CustomEvent("rideTicketPurchased" )
            
           eventHub.dispatchEvent(rideEvent) 
           
        } else if ( clickEvent.target.id === "gameTicket"){
            
            const gameEvent = new CustomEvent("gameTicketPurchased")
            
            eventHub.dispatchEvent(gameEvent)
            
        } else if ( clickEvent.target.id === "sideshowTicket"){
            
            const sideshowEvent = new CustomEvent("sideshowTicketPurchased")
            
            eventHub.dispatchEvent(sideshowEvent)
           
        }else if (clickEvent.target.id === "bigSpender"){
            
            const bigSpenderEvent = new CustomEvent("bigSpenderTicketPurchased")
            
            eventHub.dispatchEvent(bigSpenderEvent)
        }
    
    
})


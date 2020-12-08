const contentTarget = document.querySelectorAll(".people");
const eventHub = document.querySelector("#state-fair");

export const bigSpenderTicketHolder = () => {
  
  eventHub.addEventListener("bigSpenderTicketPurchased", customEvent => {
  
  for (let i = 0;i < contentTarget.length; i++ ) {
    contentTarget[i].innerHTML +=  `
    <div class="person bigSpender"></div>`
  }

  })
  
}

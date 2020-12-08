const contentTarget = document.querySelector(".sideshow");
const eventhub = document.querySelector("#state-fair");


 export const sideshowTicketholder = ()=>{
  
  eventhub.addEventListener("sideshowTicketPurchased", customEvent =>
  contentTarget.innerHTML += `
  <div class="person gawker"></div>
  `)
  
  
  
}
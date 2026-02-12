const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");



//take 2 sample events for Add sample event data-----------------------------------------


let sampleEvent = [

    {
        title: "web dev",
        date: "4-6-2026",
        category: "workshop",
        description: "ahgs h adg ihai dgjabds"
    },


    {
        title: "web dev2",
        date: "4-7-2026",
        category: "conference",
        description: "..." 
    }
];



//Create event card which contains the user data ------------------------------------------


function createEventCard(eventData) {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");
    eventCard.innerHTML = `
        <h3>${eventData.title}</h3>
        <p><strong>Date:</strong> ${eventData.date}</p>
        <p><strong>Category:</strong> ${eventData.category}</p>
        <p><strong>Description:</strong> ${eventData.description}</p>
    `;
    return eventCard;
}



// addevent append -----------------------------------------------------------


function addEvent(eventData) {
    const emptyState = document.querySelector(".empty-state");
    if (emptyState) {
        emptyState.remove();
    }
    const eventCard = createEventCard(eventData);
    eventContainer.appendChild(eventCard);
}




//Add event -------------------------------------------------------------   


eventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };
    addEvent(eventData);
});

eventContainer.addEventListener("click", (event) => {
    const card = event.target.closest(".event-card");
    if (card) {
        card.remove();  
        if (eventContainer.children.length === 0) {
            eventContainer.innerHTML = "<div class='empty-state'>No events to display</div>";
        }
        
    }
});





// clear All events button -------------------------------------------------------------    


clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML = "<div class='empty-state'>No events to display</div>";

});



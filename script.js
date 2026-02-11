// Target the HTML elements like form, input fields, buttons
const eventForm = document.getElementById("ADD_EVENT_FORM");
const eventTitle = document.getElementById("eventName");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("category");
const eventDescription = document.getElementById("description");
const clearAllBtn = document.getElementById("clearEventsBtn");
const addSampleBtn = document.getElementById("addsampleBtn");
const eventContainer = document.getElementById("eventsList");

// Take 2 sample events for Add sample event data
let sampleEvent = [
    {
        title: "Web Dev",
        date: "2026-04-06",
        category: "Workshop",
        description: "Introductory web development workshop"
    },
    {
        title: "Web Dev 2",
        date: "2026-04-07",
        category: "Conference",
        description: "Advanced web development conference"
    }
];

// Create event card which contains the user data and store it inside a div
function createEventCard(eventData) {
    const card = document.createElement("div");
    card.classList.add("event-card"); // optional styling class
    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;

    // Delete button functionality
    card.querySelector(".delete-btn").addEventListener("click", () => {
        card.remove();
        if (eventContainer.children.length === 3) { // only buttons + message left
            document.getElementById("message").style.display = "block";
        }
    });

    return card;
}

// Add the created event and append inside the event container
function addEvent(eventData) {
    const message = document.getElementById("message");
    if (message) message.style.display = "none"; // hide empty message
    eventContainer.appendChild(createEventCard(eventData));
}

// Form handling using submit event
eventForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    addEvent(eventData);

    // Clear form after submission
    eventForm.reset();
});

// Clear all events
clearAllBtn.addEventListener("click", () => {
    const cards = document.querySelectorAll(".event-card");
    cards.forEach(card => card.remove());
    document.getElementById("message").style.display = "block";
});

// Add sample events
addSampleBtn.addEventListener("click", () => {
    sampleEvent.forEach(ev => addEvent(ev));
});
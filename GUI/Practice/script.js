async function login() {
    console.log('Button Clicked!');
    
    const db = [
        {
            username: 'u',
            // This should ideally be a hash of the password, but for simplicity, I'm keeping it as plain text here
            password: 'p'
        }
    ];

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("Username:", username);
    console.log("Password:", password);

    const user = db.find(u => u.username === username);

    const statusDiv = document.getElementById("loginStatus");

    if (!user) {
        console.log('Invalid Username');
        statusDiv.innerText = 'Invalid Username';
        return; 
    }

    // Check password (In a real-world scenario, you would compare the hashed value of the entered password to the stored hash)
    if (password === user.password) {
        console.log('Logged in');
        statusDiv.innerText = 'Logged in successfully!';
        // Hide login container and show home container
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('homeContainer').style.display = 'block';
        document.getElementById('headerContainer').style.display = 'block';

    } else {
        console.log('Invalid Password');
        statusDiv.innerText = 'Invalid Password';
    }
}

function searchResident(){
    const searchInput = document.getElementById("searchText").value.trim();
    const searchResultDiv = document.getElementById("searchResult");
    const patient = patientDb.find(p => p.id.toString() === searchInput);
    searchResultDiv.innerHTML = ''; // Clear previous results

    if (patient) {
        // Create a new button element for the patient
        const patientButton = document.createElement('button');
        patientButton.textContent = `ID: ${patient.id} - Name: ${patient.name}`;
        patientButton.className = 'result-button'; // Assign a class for styling
        patientButton.onclick = function() {
            // Add an event handler for the button if needed
            alert(`You selected patient ${patient.name} with ID ${patient.id}`);
        };
        searchResultDiv.appendChild(patientButton);
    } else {
        searchResultDiv.textContent = 'No resident found with that ID';
    }
}

function showScreen(screenId) {
    // Hide all screens first
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.style.display = 'none';
    });

    // Hide the home container content and buttons
    document.getElementById('homeContainer').style.display = 'none';

    // Display the chosen screen
    document.getElementById(screenId).style.display = 'block';
}

function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function updateCalendar() {
    dateEl.innerHTML = '';
    monthYearEl.innerText = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' }) + ' ' + currentYear;
    let days = daysInMonth(currentMonth, currentYear);
    let firstDay = new Date(currentYear, currentMonth, 1).getDay();

    for (let i = 0; i < firstDay; i++) {
        dateEl.innerHTML += `<div></div>`;
    }

    for (let i = 1; i <= days; i++) {
        var noEvent = true;
        //Check if there is an existing event on the current day being added to calendar
        events.forEach(function(event){
            for (let j = 0; j < event.days.length; j++) {
                if (event.days[j] == i && event.months[j] == currentMonth && event.years[j] == currentYear) {
                    dateEl.innerHTML += `<div>${i}<div class="added-event">${event.name}</div></div>`; //Add  eventName to selected date boxes
                    noEvent = false;
                }
            }
        });
        if (noEvent){
            dateEl.innerHTML += `<div>${i}</div>`;
        }
        noEvent = true;
    }
}

function toggleSidebar() {
    if ( document.getElementById('sidebar').style.display == 'block') {
        document.getElementById('sidebar').style.display = 'none';
    }
    else{
        document.getElementById('sidebar').style.display = 'block';
    }
}

//Reset selected date boxes background colors, add eventName to selected date boxes 
function addEvent() {
    const eventName = document.getElementById("eventNameText").value;
    var currEvent = {name: eventName, days: [], months: [], years: [], boxes: []};

    if (selectedDayBoxes.length != 0 && eventName) {
        selectedDayBoxes.forEach(function(box) {
            //Add event details to current event
            currEvent.days.push(box.innerText.trim());
            currEvent.months.push(currentMonth);
            currEvent.years.push(currentYear);
            currEvent.boxes.push(box);
            console.log(currEvent);

            box.style.backgroundColor = ""; // Reset the box background colors
            box.innerHTML += `<div class="added-event">${eventName}</div>`; //Add  eventName to selected date boxes
        });
    }
    events.push(currEvent); //Add Event to events list
    selectedDayBoxes = []; //Reset selected days
}

function deleteEvent() {
    var delEventName = "";
    var delEventDay = "";
    var delEventMonth = "";
    var delEventYear = "";

    if (selectedDayBoxes.length != 0) {
        selectedDayBoxes.forEach(function(box) {
            if (box.className == "added-event") {
                //Remove selected event date from frontend
                box.remove();

                //Remove selected event from backend (all instances with this event name)
                delEventName = box.innerHTML.trim();
                console.log(events);
                events = events.filter(item => item.name != delEventName);
                console.log(events);
            }
        });
    }
}

document.getElementById('toggleSidebar').addEventListener('click', toggleSidebar);

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const dateEl = document.getElementById('dates');
const monthYearEl = document.getElementById('current-month-year');

const patientDb = [
    { id: 1, name: 'Jovan Koledin' },
    { id: 2, name: 'Evan Brammer' },
    { id: 3, name: 'Cool Kid' },
    { id: 4, name: 'Fun Kid' },
    { id: 5, name: 'Lame Kid' },
];

document.getElementById('prev-month').addEventListener('click', function() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    updateCalendar();
});

document.getElementById('next-month').addEventListener('click', function() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar();
});

// Declare an array to store the clicked DIV elements
var selectedDayBoxes = [];
var events = [];

document.getElementById('dates').addEventListener('click', function(e) {
    if (e.target.tagName === 'DIV') {
        
        // Add the clicked DIV to the array
        selectedDayBoxes.push(e.target);
        
        // Optional: Highlight the selected day
        e.target.style.backgroundColor = "#e9e9e9";
    }
});
updateCalendar();

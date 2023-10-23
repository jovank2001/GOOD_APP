async function login() {
    console.log('Button Clicked!');
    
    const db = [
        {
            username: 'username',
            // This should ideally be a hash of the password, but for simplicity, I'm keeping it as plain text here
            password: 'password'
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
        document.getElementById('sidebar').style.display = 'block';

    } else {
        console.log('Invalid Password');
        statusDiv.innerText = 'Invalid Password';
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

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const dateEl = document.getElementById('dates');
const monthYearEl = document.getElementById('current-month-year');

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
        dateEl.innerHTML += `<div>${i}</div>`;
    }
}

updateCalendar();
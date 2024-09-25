
function displayCurrentDate() {
    let today = new Date();
    let day = today.getDay();

    // Function to get the date for a specific day of the week
    function getDateForDay(dayOffset) {
        let date = new Date(today);
        date.setDate(today.getDate() + dayOffset);
        return date.getDate();
    }

    // Set the current date for each day of the week
    document.getElementById("Sunday_Date").innerText = "Sunday " + getDateForDay(0 - day);
    document.getElementById("Monday_Date").innerText = "Monday " + getDateForDay(1 - day);
    document.getElementById("Tuesday_Date").innerText = "Tuesday " + getDateForDay(2 - day);
    document.getElementById("Wednesday_Date").innerText = "Wednesday " + getDateForDay(3 - day);
    document.getElementById("Thursday_Date").innerText = "Thursday " + getDateForDay(4 - day);
    document.getElementById("Friday_Date").innerText = "Friday " + getDateForDay(5 - day);
    document.getElementById("Saturday_Date").innerText = "Saturday " + getDateForDay(6 - day);
}

window.onload = displayCurrentDate;
// js/members.js

// Mock API response (replace with real API call in production)
const members = [
    { username: 'Morinaga', email: 'morinaga.mg@gmail.com' },
    { username: 'JaneDoe', email: 'jane@example.com' }
];

document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.getElementById('membersTable').querySelector('tbody');
   
    members.forEach(member => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${member.username}</td>
            <td>${member.email}</td>
        `;
        tableBody.appendChild(row);
    });

   

    
});



/*

const tableBody = document.getElementById('membersTable').querySelector('tbody');
    streams.forEach(stream => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${stream.gosipleSongs}</td>
            <td>${stream.preachings}</td>
            <td>${stream.christianMovies}</td>

        `;
        tableBody2.appendChild(row);
    });
*/
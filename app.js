// app.js

function toonFoto() {
    document.getElementById('display-gebied').innerHTML = '<img src="./img/MicrosoftTeams-image.png" alt="Microsoft Teams">';
}
    
function toonContact() {
    document.getElementById('display-gebied').innerHTML = `
        <div class="contact-info">
            <p class="info-item">Naam: Zanyar Bero Hesso</p>
            <p class="info-item">Email: zanyar.doe@example.com</p>
            <p class="info-item">Telefoon: +123456789</p>
            <p class="info-item">Adres: 123 Main Street, Cityville</p>
        </div>
    `;
}

function toonPitch() {
    var displayArea = document.getElementById('display-gebied');
    displayArea.innerHTML = '<video width="100%" height="auto" controls><source src="./img/Video2.mov" type="video/quicktime">Your browser does not support the video tag.</video>';
}


function toonProjecten() {
    document.getElementById('display-gebied').innerHTML = '<p>Details over jouw projecten hier...</p>';
}

function toonVaardigheden() {
    document.getElementById('display-gebied').innerHTML = '<p>Jouw vaardigheden hier...</p>';
}

function toonErvaring() {
    document.getElementById('display-gebied').innerHTML = '<p>Jouw ervaring hier...</p>';
}

document.getElementById('sollicitatieForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const discord = document.getElementById('discord').value;
    const reason = document.getElementById('reason').value;
    const message = document.getElementById('message').value;

    const webhookURL = 'https://discord.com/api/webhooks/1295855661200048188/p1f96e0yJvtKyJsoeOwBTynH47KeO-gJRwjOAmW4lbqFAxr9E6x4pBFuYNjWmMKzgR3A';

    const payload = {
        username: 'Sollicitatie Bot',
        embeds: [{
            title: 'Nieuwe Sollicitatie Ontvangen',
            fields: [
                { name: 'Naam', value: name },
                { name: 'Leeftijd', value: age },
                { name: 'Discord', value: discord },
                { name: 'Waarom moeten we jou aannemen?', value: reason },
                { name: 'Bericht', value: message }
            ],
            color: 3066993
        }]
    };

    console.log('Verzenden payload: ', payload); // Log de payload voor debugging

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => {
        if (response.ok) {
            alert('Sollicitatie succesvol verzonden!');
        } else {
            alert('Er is een fout opgetreden bij het verzenden van je sollicitatie.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('Er is een fout opgetreden bij het verzenden van je sollicitatie.');
    });
});

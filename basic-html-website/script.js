document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('customer-name').value;
    const surname = document.getElementById('customer-surname').value;
    const email = document.getElementById('customer-email').value;

    alert(`Submitted Values:\n
        Name: ${name}\n
        Surname: ${surname}\n
        Email: ${email}\n`
    );

});
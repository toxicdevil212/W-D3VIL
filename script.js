document.getElementById('generateBtn').addEventListener('click', function () {
    const firstName = document.getElementById('firstname').value;
    const surname = document.getElementById('surname').value;
    const nickname = document.getElementById('nickname').value;
    const dob = document.getElementById('dob').value;
    const amount = document.getElementById('amount').value;

    if (firstName && surname && nickname && dob && amount) {
        const passwords = generatePasswords(firstName, surname, nickname, amount);
        document.getElementById('generatedPasswords').innerText = passwords.join('\n');
        document.getElementById('downloadBtn').style.display = 'inline-block';
        document.getElementById('copyBtn').style.display = 'inline-block';
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementById('passwordForm').reset();
    document.getElementById('generatedPasswords').innerText = '';
    document.getElementById('downloadBtn').style.display = 'none';
    document.getElementById('copyBtn').style.display = 'none';
});

document.getElementById('downloadBtn').addEventListener('click', function () {
    const passwords = document.getElementById('generatedPasswords').innerText;
    const blob = new Blob([passwords], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'D3VIL_passwords.txt';
    link.click();
});

document.getElementById('copyBtn').addEventListener('click', function () {
    const passwords = document.getElementById('generatedPasswords').innerText;
    navigator.clipboard.writeText(passwords)
        .then(() => alert('Passwords copied to clipboard!'))
        .catch(err => alert('Failed to copy: ' + err));
});

// Function to Generate Passwords
function generatePasswords(firstName, surname, nickname, dob, amount) {
    const passwords = [];
    for (let i = 0; i < amount; i++) {
        const randomNum = Math.floor(Math.random() * 1000);
        passwords.push(`${firstName}${surname}${nickname}${dob.replace(/-/g, '')}${randomNum}`);
    }
    return passwords;
}

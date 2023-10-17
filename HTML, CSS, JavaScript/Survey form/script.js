document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let dob = document.getElementById('dob').value;
    let country = document.getElementById('country').value;
    let gender = document.querySelector('input[name="gender"]:checked');

    if (firstName && lastName && dob && country && gender) {
        alert('Survey Submitted!\n\nFirst Name: ' + firstName + '\nLast Name: ' + lastName + '\nDate of Birth: ' + dob + '\nCountry: ' + country + '\nGender: ' + gender.value);
    } else {
        alert('Please fill out all fields before submitting the survey.');
    }
});
function resetForm() {
    document.getElementById("surveyForm").reset();
}
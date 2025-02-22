 
function getFormvalue(event) {
    event.preventDefault();
    const fname = document.querySelector('input[name="fname"]').value.trim();
    const lname = document.querySelector('input[name="lname"]').value.trim();
    const fullName = `${fname} ${lname}`.trim();
    if (fullName) {
        alert(fullName);
    } else {
        alert("Please enter your full name.");
    }
}
document.getElementById('form1').addEventListener('submit', getFormvalue);

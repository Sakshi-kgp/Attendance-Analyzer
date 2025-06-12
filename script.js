submitBtn.addEventListener('click',submitForm)
function submitForm(e) {
e.preventDefault();
const enrollment = document.getElementById('enrollment').value;
  const name = document.getElementById('fullName').value;
  if(enrollment===''||name===''){
    alert('Please fill all fields!.')
  }
   // Validate enrollment format: First 9 characters must match exactly "BTCD24O10"
   if (enrollment.length !== 11 || enrollment.substring(0, 9) !== "BTCD24O10") {
    alert("Authentication failed! Invalid enrollment number format.");
    return false;
}

// Extract last two digits and validate range
const lastTwoDigits = parseInt(enrollment.substring(9, 11));
if (isNaN(lastTwoDigits)) {
    alert("Authentication failed! Enrollment number must end in a valid numeric range (01-78).");
    return false;
}

if (lastTwoDigits < 1 || lastTwoDigits > 78) {
    alert("Authentication failed! Enrollment number must be between BTCD24O1001 and BTCD24O1078.");
    return false;
}

// Check that name has at least two words and is entirely uppercase
const words = name.trim().split(/\s+/);
if (words.length < 2) {
    alert("Authentication failed! Name must have at least two words.");
    return false;
}

for (const word of words) {
    if (word !== word.toUpperCase()) {
        alert("Authentication failed! Name must be in all uppercase letters.");
        return false;
    }
}

return  window.location.href='attendence.html';
}




  
 
  
  



 
  




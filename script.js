document.getElementById("volunteerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const interest = document.getElementById("interest").value;

  alert(`Thank you, ${name}, for volunteering! We'll reach you at ${email}.`);
  
  // Clear form
  this.reset();
});
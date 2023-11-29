function check() {
  let dob = new Date(document.getElementById("dob").value),
    nationality = document.getElementById("nationality").value == "India";
  let date = new Date()
  let age = date.getFullYear() - dob.getFullYear();
  if (
    date.getMonth() < dob.getMonth() ||
    (date.getMonth() == dob.getMonth() && date.getDate() < dob.getDate())
  ) {
    age--;
  }
  if (age >= 18 && nationality) {
    ans.textContent = "You are eligible to Vote";
  } else {
    ans.textContent = "Sorry!.. You are not Eligible to Vote";
  }
}

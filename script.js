// Fulfilled Hand Registration Logic
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('regForm');
  const msg = document.getElementById('successMsg');

  form.addEventListener('submit', function(e){
    e.preventDefault();

    // Get values
    const name = document.getElementById('fullName').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const course = document.getElementById('course').value;

    // Simple validation
    if(phone.length < 10){
      alert("Enter valid phone number");
      return;
    }

    // Save to local storage (like a mini-database)
    let students = JSON.parse(localStorage.getItem('fh_students') || '[]');
    students.push({name, dob, gender, phone, email, course, date: new Date().toLocaleString()});
    localStorage.setItem('fh_students', JSON.stringify(students));

    // Show success
    form.style.display = 'none';
    msg.style.display = 'block';
    msg.innerHTML = `
      <h3>🎉🇳🇬🥳🥳 Congratulations ${name}!</h3>
      <p>Your registration for <b>${course}</b> was successful.</p>
      <p>We will contact you at <b>${phone}</b> and <b>${email}</b> soon.</p>
      <br>
      <a href="index.html" class="btn">Back to Home</a>
      <a href="register.html" class="btn" style="background:#001a4d;color:white;margin-left:10px;">Register Another</a>
      <p style="margin-top:20px;font-size:13px;">Total Registered Students: ${students.length}</p>
    `;
  });
});
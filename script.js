// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      e.preventDefault();
    } else if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      e.preventDefault();
    }
  });
  
  // To-Do List Logic
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();
  
    if (task !== "") {
      const li = document.createElement("li");
      li.textContent = task;
      li.onclick = () => li.remove(); // click to remove
      document.getElementById("taskList").appendChild(li);
      taskInput.value = "";
    }
  }
  
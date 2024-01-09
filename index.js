// Add your code here

function submitData(name, email) {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name, email }),
  })
    .then((resp) => resp.json())
    
    .then((data) => {
      const userId = data.id;

      const paragraph = document.createElement("p");
      paragraph.setAttribute("id", "user-id");
      paragraph.textContent = `User Id: ${userId}`;

      document.body.append(paragraph);
    })
    .catch((error) => {
      const errorMessage = document.createElement("div");
      errorMessage.textContent = `Error: ${error.message}`;

      document.body.appendChild(errorMessage);
    });
}
submitData();

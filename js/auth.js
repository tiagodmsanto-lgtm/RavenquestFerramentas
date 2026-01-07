function login() {
    const username = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    const user = USERS.find(u => u.username === username && u.password === password);

    if (!user) {
        alert("Usuário ou senha inválidos!");
        return;
    }

    localStorage.setItem("session", JSON.stringify(user));
    window.location.href = "dashboard.html";
}

function logout() {
    localStorage.removeItem("session");
    window.location.href = "index.html";
}

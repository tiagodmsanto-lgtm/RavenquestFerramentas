function login() {
    const u = document.getElementById("user").value;
    const p = document.getElementById("pass").value;

    const found = USERS.find(x => x.username === u && x.password === p);

    if (!found) {
        alert("Usuário ou senha inválidos");
        return;
    }

    localStorage.setItem("session", JSON.stringify({
        username: found.username,
        role: found.role,
        access: found.access
    }));

    window.location.href = "dashboard.html";
}

function logout() {
    localStorage.removeItem("session");
    window.location.href = "index.html";
}

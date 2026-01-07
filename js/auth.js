function login() {
    const u = document.getElementById("user").value;
    const p = document.getElementById("pass").value;

    const found = USERS.find(x => x.username === u && x.password === p);

    if (!found) {
        alert("Usuário ou senha inválidos");
        return;
    }

    // Salva sessão no localStorage
    localStorage.setItem("session", JSON.stringify({
        username: found.username,
        role: found.role,
        access: found.access
    }));

    // Redireciona para dashboard
    window.location.href = "/login/dashboard.html";
}

function md5(str) {
    return CryptoJS.MD5(str).toString();
}

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const found = USERS.find(u =>
        u.username === user &&
        u.passwordHash === md5(pass)
    );

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

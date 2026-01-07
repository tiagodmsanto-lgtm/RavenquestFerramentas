function protect() {
    const session = JSON.parse(localStorage.getItem("session"));

    if (!session) {
        window.location.href = "/login/index.html";
        return;
    }

    const page = window.location.pathname;
    if (!session.access.includes(page)) {
        document.body.innerHTML = "<h1>Acesso negado</h1>";
    }
}

function protectPage() {
    const session = JSON.parse(localStorage.getItem("session"));
    if (!session) {
        window.location.href = "/login/index.html";
        return;
    }

    const path = window.location.pathname;
    if (!session.access.includes(path)) {
        document.body.innerHTML = "<h1>Acesso negado</h1>";
    }
}

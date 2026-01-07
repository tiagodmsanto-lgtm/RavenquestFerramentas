/* ======================================
   USUÁRIOS DO SISTEMA RAVENQUEST
   Edite apenas este arquivo
   ====================================== */

const USERS = [
    {
        username: "goteahz",
        password: "senha0123",
        role: "admin",
        access: [
            "/login/dashboard.html",
            "/login/admin.html",
            "/login/pages/ferramenta1.html",
            "/login/pages/ferramenta2.html",
            "/login/pages/ferramenta3.html"
        ]
    },
    {
        username: "usuario1",
        password: "1234",
        role: "nivel1",
        access: [
            "/login/dashboard.html",
            "/login/pages/ferramenta1.html"
        ]
    },
    {
        username: "usuario2",
        password: "abcd",
        role: "nivel2",
        access: [
            "/login/dashboard.html",
            "/login/pages/ferramenta1.html",
            "/login/pages/ferramenta2.html"
        ]
    }
];

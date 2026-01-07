/* ===============================
   USUÁRIOS DO SISTEMA RAVENQUEST
   =============================== */

const USERS = [
    {
        username: "raven",
        passwordHash: "e3afed0047b08059d0fada10f400c1e5", // senha: admin123
        role: "admin",
        access: [
            "/pages/ferramenta1.html",
            "/pages/ferramenta2.html",
            "/pages/ferramenta3.html",
            "/admin.html"
        ]
    },
    {
        username: "usuario1",
        passwordHash: "81dc9bdb52d04dc20036dbd8313ed055", // senha: 1234
        role: "nivel1",
        access: [
            "/pages/ferramenta1.html"
        ]
    }
];

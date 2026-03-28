(function () {
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function (e) {
        const key = e.key.toLowerCase();

        if (
            key === "f12" ||
            (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) ||
            (e.ctrlKey && key === "u")
        ) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    });

    setInterval(function () {
        const ancho = window.outerWidth - window.innerWidth > 100;
        const alto = window.outerHeight - window.innerHeight > 100;

        if (ancho || alto) {
            document.body.innerHTML = `
                <div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;">
                    <h1>- Acceso Denegado -</h1>
                </div>
            `;
        }
    }, 1000);

    setInterval(function () {
        debugger;
    }, 2000);

    const observer = new MutationObserver(() => {
        if (!document.body) return;
        if (document.body.innerHTML.toLowerCase().includes("devtools")) {
            document.body.innerHTML = "<h1>Bloqueado</h1>";
        }
    });

    observer.observe(document, {
        subtree: true,
        childList: true
    });
})();
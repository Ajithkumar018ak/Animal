/* =========================================================
   PAWSHIELD ANIMAL RESCUE FOUNDATION - COMMON JS
   Mobile Navigation Drawer & Common Global Behaviors
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle") || document.getElementById("menuBtn") || document.getElementById("mobileMenuBtn");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const mobileOverlay = document.getElementById("mobileOverlay");
    const drawerClose = document.getElementById("drawerClose");
    const mobileLogin = document.getElementById("mobileLogin");
    const openLogin = document.getElementById("openLogin");

    if (!menuToggle || !mobileDrawer) {
        return;
    }

    const openDrawer = () => {
        document.body.classList.add("nav-open");
        if (mobileDrawer) {
            mobileDrawer.classList.add("active");
            mobileDrawer.classList.add("open");
        }
        if (mobileOverlay) {
            mobileOverlay.classList.add("active");
            mobileOverlay.classList.add("show");
        }
    };

    const closeDrawer = () => {
        document.body.classList.remove("nav-open");
        if (mobileDrawer) {
            mobileDrawer.classList.remove("active");
            mobileDrawer.classList.remove("open");
        }
        if (mobileOverlay) {
            mobileOverlay.classList.remove("active");
            mobileOverlay.classList.remove("show");
        }
    };

    menuToggle.addEventListener("click", openDrawer);

    if (drawerClose) {
        drawerClose.addEventListener("click", closeDrawer);
    }

    if (mobileOverlay) {
        mobileOverlay.addEventListener("click", closeDrawer);
    }

    document.querySelectorAll(".mobile-nav a").forEach(link => {
        link.addEventListener("click", closeDrawer);
    });

    if (mobileLogin) {
        mobileLogin.addEventListener("click", () => {
            closeDrawer();
            if (openLogin) {
                openLogin.click();
            }
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeDrawer();
        }
    });

});
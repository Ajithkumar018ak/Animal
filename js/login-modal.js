/* =====================================================
   PAWSHIELD AUTH SYSTEM
   USER / ADMIN LOGIN
   CREATE ACCOUNT
   FORGOT PASSWORD
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       ELEMENTS
    ================================================= */

    const loginModal = document.getElementById("loginModal");
    const openLogin = document.getElementById("openLogin");
    const closeLogin = document.querySelector(".close-login");

    const loginSection = document.getElementById("loginSection");
    const forgotSection = document.getElementById("forgotSection");
    const signUpSection = document.getElementById("signUpSection");

    const loginForm = document.getElementById("loginForm");
    const forgotForm = document.getElementById("forgotForm");
    const signUpForm = document.getElementById("signUpForm");

    const tabUser = document.getElementById("tabUser");
    const tabAdmin = document.getElementById("tabAdmin");

    const toSignUpLink = document.getElementById("toSignUpLink");

    const forgotPasswordLink =
        document.getElementById("forgotPasswordLink");

    const backToLoginFromForgot =
        document.getElementById("backToLoginFromForgot");

    const backToLoginFromSignUp =
        document.getElementById("backToLoginFromSignUp");

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const forgotEmail =
        document.getElementById("forgotEmail");

    const signUpName =
        document.getElementById("signUpName");

    const signUpEmail =
        document.getElementById("signUpEmail");

    const signUpMobile =
        document.getElementById("signUpMobile");

    const signUpPassword =
        document.getElementById("signUpPassword");

    const signUpConfirmPassword =
        document.getElementById("signUpConfirmPassword");

    const togglePassword =
        document.getElementById("togglePassword");

    const toggleSignUpPassword =
        document.getElementById("toggleSignUpPassword");

    const toggleSignUpConfirmPassword =
        document.getElementById("toggleSignUpConfirmPassword");


    /* =================================================
       LOGIN TYPE
    ================================================= */

    let loginType = "user";


    /* =================================================
       MODAL OPEN
    ================================================= */

    if (openLogin) {

        openLogin.addEventListener("click", (e) => {

            e.preventDefault();

            loginModal.classList.add("active");

            document.body.style.overflow = "hidden";

            showSection("loginSection");

            clearMessages();

        });

    }


    /* =================================================
       MODAL CLOSE
    ================================================= */

    function closeModal() {

        if (!loginModal) return;

        loginModal.classList.remove("active");

        document.body.style.overflow = "";

        clearMessages();

    }


    if (closeLogin) {

        closeLogin.addEventListener(
            "click",
            closeModal
        );

    }


    /* =================================================
       OUTSIDE CLICK
    ================================================= */

    if (loginModal) {

        loginModal.addEventListener("click", (e) => {

            if (e.target === loginModal) {

                closeModal();

            }

        });

    }


    /* =================================================
       ESC
    ================================================= */

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            closeModal();

        }

    });


    /* =================================================
       SECTION SWITCH
    ================================================= */

    function showSection(sectionId) {

        const sections = [
            loginSection,
            forgotSection,
            signUpSection
        ];


        sections.forEach(section => {

            if (!section) return;

            section.classList.remove("active");

            section.style.display = "none";

            section.style.opacity = "0";

            section.style.transform = "translateY(10px)";

        });


        const target =
            document.getElementById(sectionId);


        if (!target) return;


        /*
           IMPORTANT:
           Override the inline display:none
        */

        target.style.display = "block";


        requestAnimationFrame(() => {

            target.classList.add("active");

            target.style.opacity = "1";

            target.style.transform =
                "translateY(0)";

        });

    }


    /* =================================================
       USER TAB
    ================================================= */

    if (tabUser) {

        tabUser.addEventListener("click", () => {

            loginType = "user";

            tabUser.classList.add("active");

            if (tabAdmin) {
                tabAdmin.classList.remove("active");
            }

            clearMessages();

        });

    }


    /* =================================================
       ADMIN TAB
    ================================================= */

    if (tabAdmin) {

        tabAdmin.addEventListener("click", () => {

            loginType = "admin";

            tabAdmin.classList.add("active");

            if (tabUser) {
                tabUser.classList.remove("active");
            }

            clearMessages();

        });

    }


    /* =================================================
       FORGOT PASSWORD
    ================================================= */

    if (forgotPasswordLink) {

        forgotPasswordLink.addEventListener("click", (e) => {

            e.preventDefault();

            showSection("forgotSection");

            clearMessages();

            if (forgotEmail) {

                setTimeout(() => {
                    forgotEmail.focus();
                }, 100);

            }

        });

    }


    /* =================================================
       CREATE ACCOUNT
    ================================================= */

    if (toSignUpLink) {

        toSignUpLink.addEventListener("click", (e) => {

            e.preventDefault();

            showSection("signUpSection");

            clearMessages();

            if (signUpName) {

                setTimeout(() => {
                    signUpName.focus();
                }, 100);

            }

        });

    }


    /* =================================================
       BACK TO LOGIN - FORGOT
    ================================================= */

    if (backToLoginFromForgot) {

        backToLoginFromForgot.addEventListener(
            "click",
            (e) => {

                e.preventDefault();

                showSection("loginSection");

                clearMessages();

                if (email) {

                    setTimeout(() => {
                        email.focus();
                    }, 100);

                }

            }
        );

    }


    /* =================================================
       BACK TO LOGIN - SIGN UP
    ================================================= */

    if (backToLoginFromSignUp) {

        backToLoginFromSignUp.addEventListener(
            "click",
            (e) => {

                e.preventDefault();

                showSection("loginSection");

                clearMessages();

                if (email) {

                    setTimeout(() => {
                        email.focus();
                    }, 100);

                }

            }
        );

    }


    /* =================================================
       PASSWORD TOGGLE
    ================================================= */

    function passwordToggle(button, input) {

        if (!button || !input) return;


        button.addEventListener("click", () => {

            if (input.type === "password") {

                input.type = "text";

                button.innerHTML =
                    '<i class="fa-regular fa-eye-slash"></i>';

                button.setAttribute(
                    "aria-label",
                    "Hide password"
                );

            } else {

                input.type = "password";

                button.innerHTML =
                    '<i class="fa-regular fa-eye"></i>';

                button.setAttribute(
                    "aria-label",
                    "Show password"
                );

            }

        });

    }


    passwordToggle(
        togglePassword,
        password
    );

    passwordToggle(
        toggleSignUpPassword,
        signUpPassword
    );

    passwordToggle(
        toggleSignUpConfirmPassword,
        signUpConfirmPassword
    );


    /* =================================================
       EMAIL VALIDATION
    ================================================= */

    function validEmail(value) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            .test(value);

    }


    /* =================================================
       FIELD ERROR
    ================================================= */

    function fieldError(id, message) {

        const el =
            document.getElementById(id);

        if (!el) return;

        el.textContent = message;

        el.classList.add("show");

    }


    /* =================================================
       CLEAR FIELD ERROR
    ================================================= */

    function clearFieldError(id) {

        const el =
            document.getElementById(id);

        if (!el) return;

        el.textContent = "";

        el.classList.remove("show");

    }


    /* =================================================
       SUCCESS
    ================================================= */

    function success(id, message) {

        const el =
            document.getElementById(id);

        if (!el) return;

        el.textContent = message;

        el.classList.add("show");

    }


    /* =================================================
       ERROR
    ================================================= */

    function error(id, message) {

        const el =
            document.getElementById(id);

        if (!el) return;

        el.textContent = message;

        el.classList.add("show");

    }


    /* =================================================
       CLEAR ALL MESSAGES
    ================================================= */

    function clearMessages() {

        document
            .querySelectorAll(".validation-message")
            .forEach(el => {

                el.textContent = "";

                el.classList.remove("show");

            });


        document
            .querySelectorAll(".alert")
            .forEach(el => {

                el.textContent = "";

                el.classList.remove("show");

            });

    }


    /* =================================================
       LOGIN
    ================================================= */

    if (loginForm) {

        loginForm.addEventListener("submit", (e) => {

            e.preventDefault();

            clearMessages();


            const emailValue =
                email.value.trim().toLowerCase();

            const passwordValue =
                password.value;


            let isValid = true;


            /* EMAIL */

            if (!emailValue) {

                fieldError(
                    "loginEmailValError",
                    "Please enter your email address."
                );

                isValid = false;

            } else if (!validEmail(emailValue)) {

                fieldError(
                    "loginEmailValError",
                    "Please enter a valid email address."
                );

                isValid = false;

            }


            /* PASSWORD */

            if (!passwordValue) {

                fieldError(
                    "loginPasswordValError",
                    "Please enter your password."
                );

                isValid = false;

            } else if (passwordValue.length < 8) {

                fieldError(
                    "loginPasswordValError",
                    "Password must be at least 8 characters."
                );

                isValid = false;

            }


            if (!isValid) return;


            /* =================================================
               USER LOGIN
            ================================================= */

            if (loginType === "user") {

                const name =
                    emailValue
                        .split("@")[0]
                        .replace(/[._-]/g, " ")
                        .replace(/\b\w/g, c =>
                            c.toUpperCase()
                        );


                const currentUser = {

                    name: name,

                    email: emailValue,

                    mobile: "",

                    role: "user"

                };


                localStorage.setItem(
                    "pawshieldLoggedIn",
                    "true"
                );


                localStorage.setItem(
                    "pawshieldLoginType",
                    "user"
                );


                localStorage.setItem(
                    "pawshieldCurrentUser",
                    JSON.stringify(currentUser)
                );


                success(
                    "loginSuccess",
                    "Login successful. Welcome to PAWSHIELD!"
                );


                setTimeout(() => {

                    window.location.href =
                        "user-dashboard.html";

                }, 900);


                return;

            }


            /* =================================================
               ADMIN LOGIN
            ================================================= */

            if (loginType === "admin") {

                const adminUser = {

                    name: "PAWSHIELD Admin",

                    email: emailValue,

                    mobile: "",

                    role: "admin"

                };


                localStorage.setItem(
                    "pawshieldLoggedIn",
                    "true"
                );


                localStorage.setItem(
                    "pawshieldLoginType",
                    "admin"
                );


                localStorage.setItem(
                    "pawshieldCurrentUser",
                    JSON.stringify(adminUser)
                );


                success(
                    "loginSuccess",
                    "Admin login successful. Redirecting..."
                );


                setTimeout(() => {

                    window.location.href =
                        "admin-dashboard.html";

                }, 900);


                return;

            }

        });

    }


    /* =================================================
       CREATE ACCOUNT
    ================================================= */

    if (signUpForm) {

        signUpForm.addEventListener("submit", (e) => {

            e.preventDefault();

            clearMessages();


            const nameValue =
                signUpName.value.trim();

            const emailValue =
                signUpEmail.value.trim().toLowerCase();

            const mobileValue =
                signUpMobile.value.trim();

            const passwordValue =
                signUpPassword.value;

            const confirmValue =
                signUpConfirmPassword.value;


            let isValid = true;


            /* NAME */

            if (!nameValue) {

                fieldError(
                    "signUpNameValError",
                    "Please enter your full name."
                );

                isValid = false;

            } else if (!/^[A-Za-z\s]+$/.test(nameValue)) {

                fieldError(
                    "signUpNameValError",
                    "Name can contain letters only."
                );

                isValid = false;

            }


            /* EMAIL */

            if (!emailValue) {

                fieldError(
                    "signUpEmailValError",
                    "Please enter your email address."
                );

                isValid = false;

            } else if (!validEmail(emailValue)) {

                fieldError(
                    "signUpEmailValError",
                    "Please enter a valid email address."
                );

                isValid = false;

            }


            /* MOBILE */

            if (!mobileValue) {

                fieldError(
                    "signUpMobileValError",
                    "Please enter your mobile number."
                );

                isValid = false;

            } else if (!/^[0-9]{10}$/.test(mobileValue)) {

                fieldError(
                    "signUpMobileValError",
                    "Enter a valid 10-digit mobile number."
                );

                isValid = false;

            }


            /* PASSWORD */

            if (!passwordValue) {

                fieldError(
                    "signUpPasswordValError",
                    "Please create a password."
                );

                isValid = false;

            } else if (passwordValue.length < 8) {

                fieldError(
                    "signUpPasswordValError",
                    "Password must be at least 8 characters."
                );

                isValid = false;

            }


            /* CONFIRM PASSWORD */

            if (!confirmValue) {

                fieldError(
                    "signUpConfirmPasswordValError",
                    "Please confirm your password."
                );

                isValid = false;

            } else if (passwordValue !== confirmValue) {

                fieldError(
                    "signUpConfirmPasswordValError",
                    "Passwords do not match."
                );

                isValid = false;

            }


            if (!isValid) return;


            /* =================================================
               SAVE ACCOUNT
            ================================================= */

            let users = JSON.parse(
                localStorage.getItem(
                    "pawshieldUsers"
                ) || "[]"
            );


            const existing =
                users.find(
                    user =>
                        user.email.toLowerCase() ===
                        emailValue
                );


            if (existing) {

                fieldError(
                    "signUpEmailValError",
                    "An account with this email already exists."
                );

                return;

            }


            const newUser = {

                name: nameValue,

                email: emailValue,

                mobile: mobileValue,

                password: passwordValue,

                role: "user"

            };


            users.push(newUser);


            localStorage.setItem(
                "pawshieldUsers",
                JSON.stringify(users)
            );


            /* =================================================
               LOGIN USER AUTOMATICALLY
            ================================================= */

            localStorage.setItem(
                "pawshieldLoggedIn",
                "true"
            );


            localStorage.setItem(
                "pawshieldLoginType",
                "user"
            );


            localStorage.setItem(
                "pawshieldCurrentUser",
                JSON.stringify({

                    name: nameValue,

                    email: emailValue,

                    mobile: mobileValue,

                    role: "user"

                })
            );


            success(
                "signUpSuccess",
                "Account created successfully. Redirecting..."
            );


            setTimeout(() => {

                window.location.href =
                    "user-dashboard.html";

            }, 1000);

        });

    }


    /* =================================================
       FORGOT PASSWORD
    ================================================= */

    if (forgotForm) {

        forgotForm.addEventListener("submit", (e) => {

            e.preventDefault();

            clearMessages();


            const emailValue =
                forgotEmail.value.trim().toLowerCase();


            if (!emailValue) {

                fieldError(
                    "forgotEmailValError",
                    "Please enter your email address."
                );

                return;

            }


            if (!validEmail(emailValue)) {

                fieldError(
                    "forgotEmailValError",
                    "Please enter a valid email address."
                );

                return;

            }


            /*
               Frontend demo:
               No real email service.
            */

            success(
                "forgotSuccess",
                "Password reset link sent successfully."
            );


            setTimeout(() => {

                showSection("loginSection");

                clearMessages();

            }, 1800);

        });

    }


    /* =================================================
       INPUT RESTRICTIONS
    ================================================= */

    if (signUpName) {

        signUpName.addEventListener(
            "input",
            () => {

                signUpName.value =
                    signUpName.value.replace(
                        /[^A-Za-z\s]/g,
                        ""
                    );

            }
        );

    }


    if (signUpMobile) {

        signUpMobile.addEventListener(
            "input",
            () => {

                signUpMobile.value =
                    signUpMobile.value
                        .replace(/[^0-9]/g, "")
                        .slice(0, 10);

            }
        );

    }


    /* =================================================
       LOWERCASE EMAIL
    ================================================= */

    [email, signUpEmail, forgotEmail]
        .forEach(input => {

            if (!input) return;

            input.addEventListener(
                "input",
                () => {

                    input.value =
                        input.value.toLowerCase();

                }
            );

        });


    /* =================================================
       INITIAL STATE
    ================================================= */

    showSection("loginSection");

    loginType = "user";


    if (tabUser) {
        tabUser.classList.add("active");
    }

    if (tabAdmin) {
        tabAdmin.classList.remove("active");
    }

});
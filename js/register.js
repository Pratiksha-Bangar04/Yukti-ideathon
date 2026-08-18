/* =========================================================
   YUKTI 2.0
   REGISTRATION PAGE
========================================================= */


/* ================= PAGE ================= */

.registration-page {

    min-height: 100vh;

    background:
        radial-gradient(
            circle at 50% 5%,
            rgba(0, 130, 255, 0.13),
            transparent 35%
        ),
        #050816;

}


/* ================= NAVBAR ================= */

.back-button {

    padding: 10px 18px;

}


/* ================= CONTAINER ================= */

.registration-container {

    max-width: 900px;

    margin: auto;

    padding: 140px 20px 80px;

}


/* ================= HEADER ================= */

.registration-header {

    text-align: center;

    margin-bottom: 55px;

}


.registration-header > span {

    color: #38b6ff;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 3px;

}


.registration-header h1 {

    margin-top: 15px;

    font-size: clamp(42px, 7vw, 70px);

    line-height: 1.05;

}


.registration-header h1 em {

    color: #2eafff;

    font-style: normal;

}


.registration-header p {

    max-width: 550px;

    margin: 20px auto 0;

    color: #8996ae;

    font-size: 14px;

}


/* ================= FORM ================= */

.registration-form {

    display: flex;

    flex-direction: column;

    gap: 25px;

}


.form-section {

    padding: 35px;

    border:
        1px solid
        rgba(255,255,255,0.08);

    border-radius: 18px;

    background:
        rgba(255,255,255,0.025);

}


/* ================= SECTION TITLE ================= */

.form-section-title {

    display: flex;

    gap: 20px;

    align-items: center;

    margin-bottom: 30px;

}


.form-section-title > span {

    width: 45px;

    height: 45px;

    flex-shrink: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 50%;

    color: #36b7ff;

    background:
        rgba(30,145,255,0.1);

    border:
        1px solid
        rgba(40,170,255,0.25);

    font-size: 12px;

    font-weight: 800;

}


.form-section-title small {

    color: #36b7ff;

    font-size: 9px;

    letter-spacing: 2px;

    font-weight: 700;

}


.form-section-title h2 {

    margin-top: 4px;

    font-size: 23px;

}


/* ================= FORM GRID ================= */

.form-grid {

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 20px;

}


.full-width {

    grid-column: 1 / -1;

}


/* ================= INPUTS ================= */

.form-group {

    display: flex;

    flex-direction: column;

    gap: 8px;

}


.form-group label {

    color: #c5cede;

    font-size: 12px;

    font-weight: 600;

}


.form-group label b {

    color: #36b7ff;

}


.form-group input,
.form-group select {

    width: 100%;

    padding: 14px 15px;

    border:
        1px solid
        rgba(255,255,255,0.1);

    border-radius: 9px;

    outline: none;

    background:
        rgba(255,255,255,0.04);

    color: #ffffff;

    font-family: inherit;

    font-size: 13px;

    transition: 0.3s;

}


.form-group select option {

    background: #081126;

    color: #ffffff;

}


.form-group input:focus,
.form-group select:focus {

    border-color: #2baeff;

    background:
        rgba(30,150,255,0.05);

    box-shadow:
        0 0 0 3px
        rgba(40,170,255,0.08);

}


.form-group input::placeholder {

    color: #59667d;

}


.field-help {

    color: #69758b;

    font-size: 10px;

}


/* ================= TEAM MEMBERS ================= */

.section-note {

    color: #78859d;

    font-size: 12px;

    margin: -10px 0 25px;

}


.member-box {

    display: none;

    padding: 25px;

    margin-top: 15px;

    border:
        1px solid
        rgba(255,255,255,0.07);

    border-radius: 12px;

    background:
        rgba(255,255,255,0.02);

}


.member-box.active {

    display: block;

}


.member-title {

    color: #36b7ff;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 2px;

    margin-bottom: 20px;

}


/* =========================================================
   SIMPLE PAYMENT
========================================================= */

.simple-payment {

    max-width: 520px;

    margin: 0 auto;

    padding: 35px 25px;

    text-align: center;

    border:
        1px solid
        rgba(255,255,255,0.08);

    border-radius: 18px;

    background:
        rgba(255,255,255,0.025);

}


.payment-method-label {

    display: block;

    color: #38baff;

    font-size: 9px;

    font-weight: 700;

    letter-spacing: 2px;

    margin-bottom: 8px;

}


.payment-method h3 {

    font-size: 20px;

    margin-bottom: 30px;

}


.payment-price {

    margin-bottom: 30px;

}


.payment-price span {

    display: block;

    color: #69758b;

    font-size: 9px;

    letter-spacing: 2px;

    margin-bottom: 5px;

}


.payment-price strong {

    display: block;

    color: #ffffff;

    font-size: 52px;

    line-height: 1.1;

}


/* ================= PAY BUTTON ================= */

.pay-button {

    width: 100%;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 18px;

    border: none;

    padding: 16px 24px;

    border-radius: 9px;

    background:
        linear-gradient(
            135deg,
            #168cff,
            #38c8ff
        );

    color: #ffffff;

    font-family: inherit;

    font-size: 14px;

    font-weight: 700;

    cursor: pointer;

    box-shadow:
        0 8px 30px
        rgba(24,153,255,0.25);

    transition: 0.3s;

}


.pay-button:hover {

    transform:
        translateY(-3px);

    box-shadow:
        0 12px 35px
        rgba(24,153,255,0.45);

}


/* ================= AGREEMENT ================= */

.agreement-text {

    margin: 0;

    color: #69758b;

    font-size: 11px;

    line-height: 1.7;

}


/* ================= SUBMIT ================= */

.submit-section {

    text-align: center;

    margin-top: 25px;

}


.submit-button {

    width: 100%;

    border: none;

    padding: 16px 30px;

    border-radius: 9px;

    background:
        linear-gradient(
            135deg,
            #168cff,
            #38c8ff
        );

    color: #ffffff;

    font-family: inherit;

    font-size: 14px;

    font-weight: 700;

    cursor: pointer;

    box-shadow:
        0 10px 30px
        rgba(24,153,255,0.25);

    transition: 0.3s;

}


.submit-button span {

    margin-left: 15px;

}


.submit-button:hover {

    transform:
        translateY(-3px);

}


/* ================= FOOTER ================= */

.registration-footer {

    max-width: 900px;

    margin: auto;

    padding: 30px 20px;

    border-top:
        1px solid
        rgba(255,255,255,0.06);

    display: flex;

    justify-content: space-between;

    gap: 20px;

    color: #59667d;

    font-size: 10px;

}


.registration-footer a {

    color: #36b7ff;

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 700px) {

    .registration-container {

        padding:
            110px 15px 60px;

    }


    .registration-header {

        margin-bottom: 35px;

    }


    .registration-header h1 {

        font-size: 42px;

    }


    .form-section {

        padding:
            22px 18px;

    }


    .form-section-title {

        gap: 12px;

    }


    .form-section-title h2 {

        font-size: 19px;

    }


    .form-grid {

        grid-template-columns: 1fr;

    }


    .full-width {

        grid-column: auto;

    }


    .member-box {

        padding: 18px;

    }


    /* PAYMENT */

    .simple-payment {

        padding:
            30px 20px;

    }


    .payment-price strong {

        font-size: 46px;

    }


    .pay-button {

        width: 100%;

        min-height: 52px;

    }


    /* FOOTER */

    .registration-footer {

        flex-direction: column;

        text-align: center;

    }

}
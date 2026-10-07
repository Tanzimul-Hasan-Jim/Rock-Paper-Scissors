* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
    min-height: 100vh;

    font-family: Arial, Helvetica, sans-serif;

    background:
        radial-gradient(
            circle at top left,
            #243b55 0%,
            transparent 40%
        ),
        radial-gradient(
            circle at bottom right,
            #1b263b 0%,
            transparent 40%
        ),
        #0b1220;

    color: white;

    display: flex;

    justify-content: center;

    align-items: center;

    padding: 30px;
}


/* =========================
   MAIN GAME
========================= */

.game {
    width: 100%;

    max-width: 1050px;

    min-height: 650px;

    background: rgba(17, 27, 45, 0.94);

    border: 1px solid rgba(255, 255, 255, 0.1);

    border-radius: 28px;

    padding: 45px;

    box-shadow:
        0 25px 70px rgba(0, 0, 0, 0.45);

    position: relative;

    overflow: hidden;
}


/* Top line */

.game::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 4px;

    background:
        linear-gradient(
            90deg,
            #00d4ff,
            #5865f2,
            #ff4ecd
        );
}


/* =========================
   HEADER
========================= */

.header {
    text-align: center;

    margin-bottom: 45px;
}


.header h1 {
    font-size: clamp(2.2rem, 5vw, 3.5rem);

    font-weight: 800;

    letter-spacing: -1px;

    color: white;

    margin-bottom: 12px;
}


.header p {
    color: #94a3b8;

    font-size: 1.05rem;
}


/* =========================
   CHOICES
========================= */

.choices {
    display: flex;

    justify-content: center;

    align-items: center;

    gap: clamp(25px, 7vw, 80px);
}


/* Individual Choice */

.choice {
    width: clamp(150px, 18vw, 200px);

    height: clamp(150px, 18vw, 200px);

    border-radius: 50%;

    padding: 5px;

    background:
        linear-gradient(
            135deg,
            #00d4ff,
            #5865f2
        );

    cursor: pointer;

    position: relative;

    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
}


/* Image */

.choice img {
    width: 100%;

    height: 100%;

    display: block;

    object-fit: cover;

    border-radius: 50%;
}


/* Label */

.choice span {
    position: absolute;

    bottom: -35px;

    left: 50%;

    transform: translateX(-50%);

    font-size: 0.9rem;

    font-weight: 700;

    letter-spacing: 2px;

    color: #cbd5e1;

    white-space: nowrap;
}


/* Hover */

.choice:hover {
    transform: translateY(-12px);

    box-shadow:
        0 15px 35px rgba(0, 212, 255, 0.3);

}


/* Different colors */

.choice:nth-child(2) {
    background:
        linear-gradient(
            135deg,
            #8b5cf6,
            #ec4899
        );
}


.choice:nth-child(2):hover {
    box-shadow:
        0 15px 35px rgba(236, 72, 153, 0.3);
}


.choice:nth-child(3) {
    background:
        linear-gradient(
            135deg,
            #ff8a00,
            #ff3d71
        );
}


.choice:nth-child(3):hover {
    box-shadow:
        0 15px 35px rgba(255, 61, 113, 0.3);
}


/* Click */

.choice:active {
    transform: scale(0.94);
}


/* =========================
   SCORE BOARD
========================= */

.score-board {
    display: flex;

    justify-content: center;

    align-items: center;

    gap: 35px;

    margin-top: 85px;
}


/* Score Card */

.score-card {
    width: 190px;

    padding: 20px;

    text-align: center;

    background: #151f33;

    border: 1px solid #26344f;

    border-radius: 18px;

    box-shadow:
        0 10px 25px rgba(0, 0, 0, 0.25);
}


/* Label */

.score-label {
    color: #94a3b8;

    font-size: 0.85rem;

    font-weight: 700;

    letter-spacing: 2px;
}


/* Number */

#user-score,
#comp-score {
    font-size: 4.5rem;

    font-weight: 800;

    line-height: 1;

    margin-top: 10px;

    color: white;
}


/* User score */

#user-score {
    color: #00d4ff;
}


/* Computer score */

#comp-score {
    color: #ff4ecd;
}


/* =========================
   VS
========================= */

.vs {
    width: 55px;

    height: 55px;

    border-radius: 50%;

    display: flex;

    justify-content: center;

    align-items: center;

    background: #202c44;

    border: 1px solid #33415c;

    color: #cbd5e1;

    font-size: 0.9rem;

    font-weight: 800;
}


/* =========================
   MESSAGE
========================= */

.message-box {
    text-align: center;

    margin-top: 50px;
}


#msg {
    display: inline-block;

    padding: 15px 30px;

    border-radius: 50px;

    background: #202c44;

    border: 1px solid #33415c;

    color: white;

    font-size: 1.1rem;

    font-weight: 600;

    box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.2);

    transition:
        all 0.3s ease;
}


/* =========================
   SCORE ANIMATION
========================= */

.score-animation {
    animation: scorePop 0.4s ease;
}


@keyframes scorePop {

    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.3);
    }

    100% {
        transform: scale(1);
    }
}


/* =========================
   MESSAGE ANIMATION
========================= */

.message-animation {
    animation: messagePop 0.35s ease;
}


@keyframes messagePop {

    0% {
        opacity: 0;

        transform: translateY(10px);
    }

    100% {
        opacity: 1;

        transform: translateY(0);
    }
}


/* =========================
   TABLET
========================= */

@media (max-width: 800px) {

    body {
        padding: 20px;
    }


    .game {
        padding: 35px 25px;

        min-height: auto;
    }


    .choices {
        gap: 25px;
    }


    .score-card {
        width: 150px;
    }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 600px) {

    body {
        padding: 12px;
    }


    .game {
        padding: 30px 15px;

        border-radius: 20px;
    }


    .header {
        margin-bottom: 40px;
    }


    .header h1 {
        font-size: 2rem;
    }


    .header p {
        font-size: 0.9rem;
    }


    .choices {
        gap: 15px;
    }


    .choice {
        width: 95px;

        height: 95px;
    }


    .choice span {
        bottom: -28px;

        font-size: 0.7rem;

        letter-spacing: 1px;
    }


    .score-board {
        gap: 10px;

        margin-top: 65px;
    }


    .score-card {
        width: 115px;

        padding: 15px 10px;
    }


    #user-score,
    #comp-score {
        font-size: 3rem;
    }


    .vs {
        width: 40px;

        height: 40px;

        font-size: 0.7rem;
    }


    #msg {
        font-size: 0.9rem;

        padding: 12px 20px;
    }

}


/* =========================
   VERY SMALL PHONE
========================= */

@media (max-width: 380px) {

    .choice {
        width: 82px;

        height: 82px;
    }


    .score-card {
        width: 105px;
    }


    #user-score,
    #comp-score {
        font-size: 2.5rem;
    }

}
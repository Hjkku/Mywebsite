:root {
    --bg-color: #0a0a0a;
    --text-primary: #ffffff;
    --accent: #f0f0f0;
    --font-heading: 'Syncopate', sans-serif;
    --font-body: 'Inter', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none; /* Kita pakai custom cursor */
}

body {
    background-color: var(--bg-color);
    color: var(--text-primary);
    font-family: var(--font-body);
    overflow-x: hidden;
}

/* Custom Cursor */
.cursor {
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 999;
}

.cursor-follower {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 998;
    transition: transform 0.1s ease-out;
}

/* Navigation */
nav {
    padding: 40px 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
}

.logo {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: 5px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    margin-left: 30px;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: opacity 0.3s;
}

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.hero h1 {
    font-family: var(--font-heading);
    font-size: clamp(3rem, 10vw, 8rem);
    line-height: 1;
}

.outline {
    -webkit-text-stroke: 1px white;
    color: transparent;
}

.subtitle {
    margin-top: 20px;
    font-weight: 300;
    opacity: 0.6;
    letter-spacing: 4px;
}

/* Lab Section & Cards */
.lab {
    padding: 100px 10%;
}

.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

.card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 60px 40px;
    transition: all 0.4s ease;
}

.card:hover {
    background: white;
    color: black;
    transform: translateY(-10px);
}

.card h3 {
    font-family: var(--font-heading);
    margin-bottom: 15px;
}

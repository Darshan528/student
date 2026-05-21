---
layout: default
title: About Me
permalink: /about-me/
comments: true
---

<style>
  .hero {
    text-align: center;
    padding: 2rem 1rem;
    border-bottom: 1px solid #2d2d2d;
    margin-bottom: 2rem;
  }
  .hero h1 { font-size: 2rem; margin-bottom: 0.3rem; }
  .hero p { color: #aaa; margin: 0; }

  .section { margin-bottom: 2rem; }
  .section h2 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #7ca8e0;
    margin-bottom: 0.8rem;
    border-bottom: 1px solid #2d2d2d;
    padding-bottom: 0.4rem;
  }

  .section ul {
    list-style: none !important;
    list-style-image: none !important;
    padding-left: 0;
    margin: 0;
  }
  .section ul li {
    margin-bottom: 0.45rem;
    line-height: 1.5;
    color: #ccc;
    padding-left: 1.2rem;
    position: relative;
    list-style-image: none !important;
  }
  .section ul li::before {
    content: "\2022";
    position: absolute;
    left: 0;
    color: #7ca8e0;
  }
  .section ul li::after {
    content: none;
  }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  @media (max-width: 540px) { .grid-2 { grid-template-columns: 1fr; } }

  .highlight {
    background: #0d1117;
    border-left: 3px solid #58a6ff;
    padding: 0.8rem 1rem;
    border-radius: 0 6px 6px 0;
    color: #ccc;
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  .linkedin-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #0a66c2;
    color: white !important;
    text-decoration: none !important;
    padding: 10px 24px;
    border-radius: 24px;
    font-weight: 600;
    font-size: 0.95rem;
    transition: background 0.2s;
  }
  .linkedin-btn:hover { background: #004182; }
  .linkedin-btn img { width: 18px; height: 18px; }
</style>

<div class="hero">
  <h1>Darshan S.</h1>
  <p>10th Grade &nbsp;·&nbsp; Class of 2028 &nbsp;·&nbsp; Del Norte High School &nbsp;·&nbsp; San Diego, CA</p>
</div>

<div class="grid-2">

  <div class="section">
    <h2>About Me</h2>
    <ul>
      <li>10th grader, Class of 2028</li>
      <li>Del Norte High School, San Diego</li>
      <li>Indian — Tamil Nadu background</li>
      <li>Grew up between India and California</li>
      <li>Started coding through CS Principles</li>
    </ul>
  </div>

  <div class="section">
    <h2>Interests</h2>
    <ul>
      <li>Computer Science & Programming</li>
      <li>Game Development</li>
      <li>AI & Machine Learning</li>
      <li>Data & Predictions</li>
      <li>Weightlifting & Fitness</li>
      <li>Tamil Culture</li>
    </ul>
  </div>

  <div class="section">
    <h2>UESL Site Contributions</h2>
    <ul>
      <li>Built and improved features on the UESL (Unified Education & Student Learning) platform</li>
      <li>Added the Game Maker — lets users create their own custom games on the site</li>
      <li>Players can connect and play games with each other in real time</li>
      <li>Integrated multiplayer so students can challenge each other directly</li>
      <li>Games are shared across the platform so anyone can discover and play them</li>
    </ul>
  </div>

  <div class="section">
    <h2>Other Projects</h2>
    <ul>
      <li>Snake Game — built in JavaScript</li>
      <li>Exam & Grade Predictor</li>
      <li>Study Tracker</li>
      <li>Score Predictor</li>
      <li>Turtle Graphics Hacks — Python</li>
      <li>Linux & Cybersecurity (KASM)</li>
    </ul>
  </div>

</div>

<div class="section">
  <h2>Game Maker — UESL Project</h2>
  <div class="highlight">
    Designed and built the Game Maker feature for the UESL platform — a tool that lets any user create their own game and share it with others on the site.
  </div>
  <ul>
    <li>Users can build custom games directly on the UESL site — no coding required</li>
    <li>Games are published to the platform so other students can find and play them</li>
    <li>Players can connect with each other and play games together in real time</li>
    <li>Multiplayer support lets students challenge friends or other users on the site</li>
    <li>Game data is stored and retrieved from a live backend API — fully dynamic</li>
    <li>Built with JavaScript, HTML/CSS, and the Fetch API</li>
    <li>Responsive design — works on desktop and mobile</li>
  </ul>
</div>

<div class="section" style="text-align:center; padding-top: 0.5rem;">
  <h2>Connect</h2>
  <a class="linkedin-btn" href="https://www.linkedin.com/in/darshan-s-94b0593b3/" target="_blank" rel="noopener noreferrer">
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn">
    Connect on LinkedIn
  </a>
</div>

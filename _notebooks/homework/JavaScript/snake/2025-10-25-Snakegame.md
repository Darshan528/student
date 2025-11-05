---
layout: default
title: Snake game
description: Snake game
permalink: /Snake/game
Author: Darshan
---


<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Game</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            font-family: 'Arial', sans-serif;
        }

        .game-container {
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        h1 {
            color: white;
            margin-bottom: 20px;
            font-size: 2.5em;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .score {
            color: white;
            font-size: 1.5em;
            margin-bottom: 15px;
            font-weight: bold;
        }

        canvas {
            border: 3px solid white;
            border-radius: 10px;
            background: #2d3748;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        }

        .controls {
            margin-top: 20px;
            color: white;
            font-size: 0.9em;
            opacity: 0.9;
        }

        .game-over {
            color: #ff6b6b;
            font-size: 1.8em;
            font-weight: bold;
            margin-top: 15px;
            display: none;
        }

        .restart-btn {
            margin-top: 15px;
            padding: 12px 30px;
            font-size: 1.1em;
            background: white;
            color: #667eea;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;
            display: none;
        }

        .restart-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(255,255,255,0.4);
        }
    </style>
</head>
<body>
    <div class="game-container">
        <h1>🐍 Snake Game</h1>
        <div class="score">Score: <span id="score">0</span></div>
        <canvas id="gameCanvas" width="400" height="400"></canvas>
        <div class="controls">Use Arrow Keys or WASD to move</div>
        <div class="game-over" id="gameOver">Game Over!</div>
        <button class="restart-btn" id="restartBtn">Play Again</button>
    </div>

    <script>
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        const scoreElement = document.getElementById('score');
        const gameOverElement = document.getElementById('gameOver');
        const restartBtn = document.getElementById('restartBtn');

        const gridSize = 20;
        const tileCount = canvas.width / gridSize;

        let snake = [{x: 10, y: 10}];
        let velocity = {x: 0, y: 0};
        let food = {x: 15, y: 15};
        let score = 0;
        let gameRunning = true;
        let gameLoop;

        function placeFood() {
            food.x = Math.floor(Math.random() * tileCount);
            food.y = Math.floor(Math.random() * tileCount);
            
            // Make sure food doesn't spawn on snake
            for (let segment of snake) {
                if (segment.x === food.x && segment.y === food.y) {
                    placeFood();
                    return;
                }
            }
        }

        function draw() {
            if (!gameRunning) return;

            // Move snake
            const head = {
                x: snake[0].x + velocity.x,
                y: snake[0].y + velocity.y
            };

            // Check wall collision
            if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
                endGame();
                return;
            }

            // Check self collision
            for (let segment of snake) {
                if (segment.x === head.x && segment.y === head.y) {
                    endGame();
                    return;
                }
            }

            snake.unshift(head);

            // Check food collision
            if (head.x === food.x && head.y === food.y) {
                score++;
                scoreElement.textContent = score;
                placeFood();
            } else {
                snake.pop();
            }

            // Clear canvas
            ctx.fillStyle = '#2d3748';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw snake
            snake.forEach((segment, index) => {
                ctx.fillStyle = index === 0 ? '#48bb78' : '#68d391';
                ctx.fillRect(
                    segment.x * gridSize + 1,
                    segment.y * gridSize + 1,
                    gridSize - 2,
                    gridSize - 2
                );
            });

            // Draw food
            ctx.fillStyle = '#f56565';
            ctx.beginPath();
            ctx.arc(
                food.x * gridSize + gridSize / 2,
                food.y * gridSize + gridSize / 2,
                gridSize / 2 - 2,
                0,
                Math.PI * 2
            );
            ctx.fill();
        }

        function endGame() {
            gameRunning = false;
            clearInterval(gameLoop);
            gameOverElement.style.display = 'block';
            restartBtn.style.display = 'inline-block';
        }

        function resetGame() {
            snake = [{x: 10, y: 10}];
            velocity = {x: 0, y: 0};
            score = 0;
            scoreElement.textContent = score;
            gameRunning = true;
            gameOverElement.style.display = 'none';
            restartBtn.style.display = 'none';
            placeFood();
            gameLoop = setInterval(draw, 100);
        }

        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowUp':
                case 'w':
                case 'W':
                    if (velocity.y === 0) {
                        velocity = {x: 0, y: -1};
                    }
                    break;
                case 'ArrowDown':
                case 's':
                case 'S':
                    if (velocity.y === 0) {
                        velocity = {x: 0, y: 1};
                    }
                    break;
                case 'ArrowLeft':
                case 'a':
                case 'A':
                    if (velocity.x === 0) {
                        velocity = {x: -1, y: 0};
                    }
                    break;
                case 'ArrowRight':
                case 'd':
                case 'D':
                    if (velocity.x === 0) {
                        velocity = {x: 1, y: 0};
                    }
                    break;
            }
        });

        restartBtn.addEventListener('click', resetGame);

        // Start game
        placeFood();
        gameLoop = setInterval(draw, 100);
    </script>
</body>
</html>
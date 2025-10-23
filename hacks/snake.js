// Get canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game settings
const gridSize = 20;
const tileCount = canvas.width / gridSize;
let speed = 7;

// Snake initial position and body
let snake = [{x: 10, y: 10}]; // Head of the snake
let dx = 0; // Direction X
let dy = 0; // Direction Y

// Food position
let foodX = Math.floor(Math.random() * tileCount);
let foodY = Math.floor(Math.random() * tileCount);

// Score
let score = 0;

// Game loop
function gameLoop() {
    updateSnake();
    if (checkGameOver()) {
        displayGameOver();
        return;
    }
    clearCanvas();
    checkFoodCollision();
    drawFood();
    drawSnake();
    setTimeout(gameLoop, 1000/speed);
}

// Update snake position
function updateSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    if (!checkFoodCollision()) {
        snake.pop();
    }
}

// Draw the snake
function drawSnake() {
    ctx.fillStyle = 'green';
    snake.forEach(segment => {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
    });
}

// Draw the food
function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(foodX * gridSize, foodY * gridSize, gridSize - 2, gridSize - 2);
}

// Clear the canvas
function clearCanvas() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Check if snake eats food
function checkFoodCollision() {
    if (snake[0].x === foodX && snake[0].y === foodY) {
        foodX = Math.floor(Math.random() * tileCount);
        foodY = Math.floor(Math.random() * tileCount);
        score += 10;
        document.getElementById('score').innerHTML = 'Score: ' + score;
        speed += 0.5; // Increase speed
        return true;
    }
    return false;
}

// Check for game over
function checkGameOver() {
    // Check wall collision
    if (snake[0].x < 0 || snake[0].x >= tileCount || 
        snake[0].y < 0 || snake[0].y >= tileCount) {
        return true;
    }
    
    // Check self collision
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    return false;
}

// Display game over message
function displayGameOver() {
    ctx.fillStyle = 'black';
    ctx.font = '50px Arial';
    ctx.fillText('Game Over!', canvas.width/4, canvas.height/2);
    ctx.font = '30px Arial';
    ctx.fillText('Press Space to Restart', canvas.width/6, canvas.height/2 + 50);
}

// Handle keyboard controls
document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'ArrowUp':
            if (dy !== 1) { // Prevent reversing
                dx = 0;
                dy = -1;
            }
            break;
        case 'ArrowDown':
            if (dy !== -1) {
                dx = 0;
                dy = 1;
            }
            break;
        case 'ArrowLeft':
            if (dx !== 1) {
                dx = -1;
                dy = 0;
            }
            break;
        case 'ArrowRight':
            if (dx !== -1) {
                dx = 1;
                dy = 0;
            }
            break;
        case ' ':
            if (checkGameOver()) {
                // Reset game
                snake = [{x: 10, y: 10}];
                dx = 0;
                dy = 0;
                foodX = Math.floor(Math.random() * tileCount);
                foodY = Math.floor(Math.random() * tileCount);
                score = 0;
                speed = 7;
                document.getElementById('score').innerHTML = 'Score: 0';
                gameLoop();
            }
            break;
    }
});

// Start the game
gameLoop();
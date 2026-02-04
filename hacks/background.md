---
layout: default
title: Background with Object
description: Use JavaScript to have an in motion background.
sprite: images/platformer/sprites/dog.png
background: images/platformer/backgrounds/alien_planet1.jpg
permalink: /background5
---

<canvas id="world"></canvas>

<script>
  /* 
  Get the <canvas> element and its 2D drawing context. 
  The canvas is where all rendering (background, sprites, animations) will happen. 
*/
const canvas = document.getElementById("world");
const ctx = canvas.getContext('2d');

/* 
  Create two image objects:
  - backgroundImg will hold the game world's background.
  - spriteImg will hold a character or object to display on top of the background. 
*/
const backgroundImg = new Image();
const spriteImg = new Image();

/* 
  Set the source paths for the images.
  These template placeholders ({{page.background}} and {{page.sprite}})
  will be replaced dynamically by actual image URLs at runtime.
*/
backgroundImg.src = '{{page.background}}';
spriteImg.src = '{{page.sprite}}';

/* 
  Keep track of how many images have finished loading.
  This ensures the game only starts once all required images are ready.
*/
let imagesLoaded = 0;

/* 
  When the background image loads:
  - Increase the counter of loaded images.
  - Call startGameWorld() to attempt starting the game.
*/
backgroundImg.onload = function() {
  imagesLoaded++;
  startGameWorld();
};

/* 
  When the sprite image loads:
  - Increase the counter of loaded images.
  - Call startGameWorld() to attempt starting the game.
*/
spriteImg.onload = function() {
  imagesLoaded++;
  startGameWorld();
};


  /* 
  This function initializes the game world. 
  It only runs after all required images have been loaded.
*/
function startGameWorld() {
  /* 
    If not all images are loaded yet, stop here. 
    Prevents the game from starting too early. 
  */
  if (imagesLoaded < 2) return;

  /* 
    Define a GameObject class to represent items in the game world.
    Each game object can:
      - store its image and size
      - track its position (x, y)
      - move at a speed based on a ratio of the game speed
      - draw itself onto the canvas
  */
  class GameObject {
    constructor(image, width, height, x = 0, y = 0, speedRatio = 0) {
      this.image = image;             // Image to display (background, sprite, etc.)
      this.width = width;             // Width of the object on canvas
      this.height = height;           // Height of the object on canvas
      this.x = x;                     // X-coordinate (horizontal position)
      this.y = y;                     // Y-coordinate (vertical position)
      this.speedRatio = speedRatio;   // Ratio of game speed (controls relative motion)
      this.speed = GameWorld.gameSpeed * this.speedRatio; 
    }

    /* 
      Placeholder for future updates (like movement, physics, etc.).
      Can be overridden or expanded later.
    */
    update() {}

    /* 
      Draw the object’s image onto the canvas at its current position and size.
    */
    draw(ctx) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }
}

    /* 
  The Background class extends GameObject to represent the scrolling background. 
  It automatically fills the entire canvas and moves horizontally to create 
  a looping/parallax effect.
*/
class Background extends GameObject {
  constructor(image, gameWorld) {
    /* 
      Call the parent GameObject constructor with:
        - image → the background image
        - width & height → match the entire game world (fills the canvas)
        - x = 0, y = 0 → start at the top-left corner
        - speedRatio = 0.1 → background scrolls slowly (parallax effect)
    */
    super(image, gameWorld.width, gameWorld.height, 0, 0, 0.1);
  }

  /* 
    Update the background’s position. 
    The x-coordinate shifts left by its speed each frame.
    The modulo operator (%) makes it loop seamlessly once it has fully scrolled.
  */
  update() {
    this.x = (this.x - this.speed) % this.width;
  }

  /* 
    Draw the background image twice:
      1. At its current x-position.
      2. A second copy immediately after it (x + width).
    
    This ensures that as the first image scrolls out of view, 
    the second image slides in, creating an endless scrolling background.
  */
  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
  }
}

/* 
  The Player class extends GameObject to represent the main character. 
  It starts centered on the canvas and has a smooth "floating" 
  idle animation using sine wave motion. The design is flexible, 
  allowing customization of scale, bounce height, and speed.
*/
class Player extends GameObject {
  constructor(image, gameWorld, scale = 0.5, amplitude = 20, frequency = 0.05) {
    /* 
      Scale the player sprite based on the given scale factor. 
      By default, the sprite is reduced to 50% of its natural size.
    */
    const width = image.naturalWidth * scale;
    const height = image.naturalHeight * scale;

    /* 
      Position the player in the exact center of the game world.
      Subtracting half the width/height ensures proper centering.
    */
    const x = (gameWorld.width - width) / 2;
    const y = (gameWorld.height - height) / 2;

    /* 
      Call the parent GameObject constructor:
        - image → player sprite
        - width & height → scaled dimensions
        - x & y → starting position (centered)
        - speedRatio left as 0 → player does not auto-scroll
    */
    super(image, width, height, x, y);

    /* 
      Store the base Y position for the floating effect.
      The player will oscillate smoothly around this point.
    */
    this.baseY = y;

    /* 
      Store animation parameters:
        - amplitude → how high/low the player bounces
        - frequency → how fast the oscillation occurs
    */
    this.amplitude = amplitude;
    this.frequency = frequency;

    /* 
      Frame counter to drive the sine wave animation.
      Increments each update for continuous motion.
    */
    this.frame = 0;
  }

  /* 
    Update the player’s vertical position using a sine wave:
      y = baseY + sin(frame * frequency) * amplitude
    This creates a smooth floating animation effect.
  */
  update() {
    this.y = this.baseY + Math.sin(this.frame * this.frequency) * this.amplitude;
    this.frame++;
  }
}


    /* 
  The Player class extends GameObject to represent the main character. 
  It starts centered on the canvas and has a smooth "floating" 
  idle animation using sine wave motion. The design is flexible, 
  allowing customization of scale, bounce height, and speed.
*/
class Player extends GameObject {
  constructor(image, gameWorld, scale = 0.5, amplitude = 20, frequency = 0.05) {
    /* 
      Scale the player sprite based on the given scale factor. 
      By default, the sprite is reduced to 50% of its natural size.
    */
    const width = image.naturalWidth * scale;
    const height = image.naturalHeight * scale;

    /* 
      Position the player in the exact center of the game world.
      Subtracting half the width/height ensures proper centering.
    */
    const x = (gameWorld.width - width) / 2;
    const y = (gameWorld.height - height) / 2;

    /* 
      Call the parent GameObject constructor:
        - image → player sprite
        - width & height → scaled dimensions
        - x & y → starting position (centered)
        - speedRatio left as 0 → player does not auto-scroll
    */
    super(image, width, height, x, y);

    /* 
      Store the base Y position for the floating effect.
      The player will oscillate smoothly around this point.
    */
    this.baseY = y;

    /* 
      Store animation parameters:
        - amplitude → how high/low the player bounces
        - frequency → how fast the oscillation occurs
    */
    this.amplitude = amplitude;
    this.frequency = frequency;

    /* 
      Frame counter to drive the sine wave animation.
      Increments each update for continuous motion.
    */
    this.frame = 0;
  }

  /* 
    Update the player’s vertical position using a sine wave:
      y = baseY + sin(frame * frequency) * amplitude
    This creates a smooth floating animation effect.
  */
  update() {
    this.y = this.baseY + Math.sin(this.frame * this.frequency) * this.amplitude;
    this.frame++;
  }
}

      gameLoop() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (const obj of this.gameObjects) {
  const canvas = document.getElementById("world");
  const ctx = canvas.getContext('2d');
  const backgroundImg = new Image();
  const spriteImg = new Image();
  backgroundImg.src = '{{page.background}}';
  spriteImg.src = '{{page.sprite}}';

  let imagesLoaded = 0;
  backgroundImg.onload = function() {
    imagesLoaded++;
    startGameWorld();
  };
  spriteImg.onload = function() {
    imagesLoaded++;
    startGameWorld();
  };

  function startGameWorld() {
    if (imagesLoaded < 2) return;

    class GameObject {
      constructor(image, width, height, x = 0, y = 0, speedRatio = 0) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speedRatio = speedRatio;
        this.speed = GameWorld.gameSpeed * this.speedRatio;
      }
      update() {}
      draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
    }

    class Background extends GameObject {
      constructor(image, gameWorld) {
        // Fill entire canvas
        super(image, gameWorld.width, gameWorld.height, 0, 0, 0.1);
      }
      update() {
        this.x = (this.x - this.speed) % this.width;
      }
      draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
      }
    }

    class Player extends GameObject {
      constructor(image, gameWorld) {
        const width = image.naturalWidth / 2;
        const height = image.naturalHeight / 2;
        const x = (gameWorld.width - width) / 2;
        const y = (gameWorld.height - height) / 2;
        super(image, width, height, x, y);
        this.baseY = y;
        this.frame = 0;
      }
      update() {
        this.y = this.baseY + Math.sin(this.frame * 0.05) * 20;
        this.frame++;
      }
    }

    class GameWorld {
      static gameSpeed = 5;
      constructor(backgroundImg, spriteImg) {
        this.canvas = document.getElementById("world");
        this.ctx = this.canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.width = `${this.width}px`;
        this.canvas.style.height = `${this.height}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = `0px`;
        this.canvas.style.top = `${(window.innerHeight - this.height) / 2}px`;

        this.objects = [
         new Background(backgroundImg, this),
         new Player(spriteImg, this)
        ];
      }
      gameLoop() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        for (const obj of this.objects) {
          obj.update();
          obj.draw(this.ctx);
        }
        requestAnimationFrame(this.gameLoop.bind(this));
      }
      start() {
        this.gameLoop();
      }
<<<<<<< HEAD
    
=======
    }
>>>>>>> eb02e31 (fixed background)

    const world = new GameWorld(backgroundImg, spriteImg);
    world.start();
  }

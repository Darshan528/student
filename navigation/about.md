---
layout: post
title: About
permalink: /about/
comments: true
---
#Mr. Mortenson you only see us in binary: 1s if we're paying attention, and 0s if we're daydreaming


## As a conversation Starter

Areas I have lived in 

<comment>
Flags are made using Wikipedia images
</comment>

<style>
    /* Style looks pretty compact, 
       - grid-container and grid-item are referenced the code 
    */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Dynamic columns */
        gap: 10px;
    }
    .grid-item {
        text-align: center;
    }
    .grid-item img {
        width: 100%;
        height: 100px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }

    .image-gallery {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
        }

    .image-gallery img {
        max-height: 150px;
        object-fit: cover;
        border-radius: 5px;
    }
</style>

<!-- This grid_container class is used by CSS styling and the id is used by JavaScript connection -->
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our http source and our data rows for the Living in the World grid
    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var living_in_the_world = [
        {"flag": "0/01/Flag_of_California.svg", "greeting": "Hey", "description": "California - 12 years "},
        {"flag": "4/41/Flag_of_India.svg", "greeting": "Hi", "description": "India - 3 years"},
    
    ];

    // 3a. Consider how to update style count for size of container
    // The grid-template-columns has been defined as dynamic with auto-fill and minmax

    // 3b. Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        // Create a "div" with "class grid-item" for each row
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  // This class name connects the gridItem to the CSS style elements
        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = http_source + location.flag; // concatenate the source and flag
        img.alt = location.flag + " Flag"; // add alt text for accessibility

        // Add "p" HTML tag for the description
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        // Append the grid item DIV to the container DIV
        container.appendChild(gridItem);
    }
</script>

### Education 

Here is where I went to school
- 🏫 Day care at India (I got scolded alot)
- 🏫 3 Elementary schools including Dingeman elementary, Stone ranch, and Delsur elementary
- 🏫 Middle School: Oakvalley
- 🏫 Highschool: Delnorte!


### Culture and Family

Everything for me, is family, culture, being a great person, and hitting the gym as much as possible

- I'm indian and from a state called tamilnadu
- I'm religous and believe in hinduisum
- My mother is from a city in tamilnadu (india) called Salem
- My dad is from a city in tamilnadu (india) called Coimbatore
- My favorite cultural food is pongal (Ven Pongal is a creamy, comforting dish made with raw rice and yellow moong dal,
 tempered with ghee, cumin, black pepper, ginger, curry leaves, and asafoetida, giving it a rich, aromatic flavor.)
- A cultural day I enjoy is diwali because its fun to get together with friends and light fireworks



 
<comment>
Gallery of Pics, scroll to the right for more ...
</comment>
<div class="image-gallery">
  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Tamil_Nadu_District_Map_%28Tamil%29.png" 
       alt="Tamil Nadu District Map">
</div>
<div class="image-gallery">
  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Tamil_Nadu_District_Map_%28Tamil%29.png" 
       alt="Tamil Nadu District Map">
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/92/India_Tamil_Nadu_locator_map.svg"
       alt="Tamil Nadu Locator Map">
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Chennai_Montage.jpg"
       alt="Chennai City">
</div>
<head>
  ...
  <style>
    /.image-gallery {
  display: flex;
  gap: 10px;              /* space between images */
  overflow-x: auto;        /* enable horizontal scroll */
  padding: 10px;
  scroll-behavior: smooth; /* smooth scrolling */
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 100%;         /* prevents overflow outside page */
}

.image-gallery img {
  height: 200px;          /* adjust size */
  flex-shrink: 0;         /* don’t shrink images */
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

  </style>
</head>

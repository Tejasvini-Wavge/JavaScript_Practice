<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mouse Down & Up Events</title>
  <style>
    #button {
      padding: 20px;
      background-color: coral;
      border: none;
      color: white;
      cursor:pointer;
      font-size: 16px;
    }
  </style>
</head>
<body>

    <button id="button">Press Me!</button>

    <script>
        const button = document.getElementById('button');

        // Mouse Down event
        button.onmousedown = () => {
            console.log("Mouse button pressed down!");
            button.style.backgroundColor = "black"; // Change color when mouse is pressed
        };

        // Mouse Up event
        button.onmouseup = () => {
            console.log("Mouse button released!");
            button.style.backgroundColor = "coral"; // Revert color when mouse is released
        };
    </script>

</body>
</html>

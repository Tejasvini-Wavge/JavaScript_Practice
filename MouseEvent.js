<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mouse Event Handling</title>
  <style>
    #myDiv {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      margin: 50px;
      text-align: center;
      line-height: 200px;
    }
  </style>
</head>
<body>

<div id="myDiv">Hover or Click Me!</div>

<script>
        // Get the div element
        const myDiv = document.getElementById('myDiv');

        // Mouseover event: When the mouse enters the div
        myDiv.addEventListener('mouseover', () => {
            myDiv.style.backgroundColor = 'lightgreen';
            // myDiv.style.border = 'solid 2px';
        });

        // Mouseout event: When the mouse leaves the div
        myDiv.addEventListener('mouseout', () => {
            myDiv.style.backgroundColor = 'red';
        });

        // Mouse click event: When the div is clicked
        myDiv.addEventListener('click', (event) =>{
            alert(` Div clicked at coordinates: X=${event.clientX}, Y=${event.clientY} `);
        });

        // Mousemove event: When the mouse moves over the div
        myDiv.addEventListener('mousemove', (event) => {
            console.log(` Mouse position: X=${event.clientX}, Y=${event.clientY} `);
        });
</script>

</body>
</html>

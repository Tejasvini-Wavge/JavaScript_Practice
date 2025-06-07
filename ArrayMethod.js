<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let subjects=['maths','Bio','physics','chemistry'];
        document.write(subjects+"<br>");

        subjects.push("english");
         document.write(subjects+"<br>");
         
         subjects.unshift("marathi");
        document.write(subjects+"<br>");

        subjects.pop();
        document.write(subjects+"<br>");

         subjects.shift();
        document.write(subjects+"<br>");

         subjects.splice(1,3);
        document.write(subjects+"<br>");


    </script>
    
</body>
</html>

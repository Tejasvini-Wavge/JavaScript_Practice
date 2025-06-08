<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data types</title>
</head>
<body>
    <script>
        var a="string";
        document.write(typeof a + "<br>"); //string

        var a=22;
        document.write(typeof a + "<br>"); //number

        var a=true;
        document.write(typeof a + "<br>"); //boolean

        var a=["html","css","js"];
        document.write(typeof a + "<br>"); //object

        var a={first:"abc",last:"xyz"};
        document.write(typeof a + "<br>"); //object

        var a=null;
        document.write(typeof a + "<br>"); //object

        var a=undefined;
        document.write(typeof a + "<br>"); //object/undefined
    </script>
    
</body>
</html>

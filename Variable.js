<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
    let z=30; //global variable
    function demo(){
        let a=10; //local variable
        document.writeln("a="+ a +"<br>");
         document.writeln("z="+ z +"<br>");
         z=50; //reinitialized global variable
         document.writeln("z="+ z +"<br>");
    }
    demo();
    document.writeln("z="+ z +"<br>");
</script>
    
</body>
</html>

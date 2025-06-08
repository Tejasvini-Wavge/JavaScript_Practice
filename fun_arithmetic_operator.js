<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function sum(a,b){
           return a+b; 
        }
        function multi(a,b){
           return a*b; 
        }
        function mod(a,b){
           return a%b; 
        }
        function sub(a,b){
           return a-b; 
        }
        function div(a,b){
           return a/b; 
        }
        var result=sum(10,20);
        var a=multi(10,20);
        var b=mod(10,20);
        var c=sub(10,20);
        var d=div(10,20);
        document.writeln("addition=" + result);
        document.writeln("<br>");
        document.writeln("multiplication=" + a);
        document.writeln("<br>");
        document.writeln("mod=" + b);
        document.writeln("<br>");
        document.writeln("sub=" + c);
        document.writeln("<br>");
        document.writeln("div=" + d);
    </script>
</body>
</html>

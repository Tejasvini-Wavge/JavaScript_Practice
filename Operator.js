<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //Arithmetic Operator
        var a=21;
        var b=2;
        document.write( a + b +"<br>"); //29
        document.write( a - b +"<br>"); //19
        document.write("Addition="+ a + b +"<br>"); //NaN -NOT a NUMBER
        document.write("multiplication="+ a * b +"<br>"); //42
        document.write("modulus="+ a % b +"<br>"); //1
        document.write("division="+ a / b +"<br>"); //10.5
        document.write( ++a +"<br>"); //22
        document.write( a++); //22
        document.write("<br>");
        document.write("<br>");


    document.write("Comparision Operator");
    //Comparision Operator
    var a=10;
    var b=20;
    document.write(a<b);
    document.write("<br>");

    document.write(a>b);
    document.write("<br>");

    document.write(a>=b);
    document.write("<br>");

    document.write(a<=b);
    document.write("<br>");

    document.write(a!=b);
    document.write("<br>");

    document.write(a==b);
    document.write("<br>");
    document.write("<br>");

document.write("Logical Operator");
document.write("<br>");
//Logical Operator
var a=20;
var b=30;

    document.write(a<b|| b>a);
    document.write("<br>");

    document.write(a<b && b>a);
    document.write("<br>");

    document.write(!(a<b));
    document.write("<br>");
    document.write("<br>");


document.write("Assignment Operator");
document.write("<br>");
    //Assignment Operator
    document.write(a=b);
    document.write("<br>");

    document.write(a+=b);
    document.write("<br>");

    document.write(a-=b);
    document.write("<br>");

    document.write(a*=b);
    document.write("<br>");

    document.write(a/=b);
    document.write("<br>");

    document.write(a%=b);
    document.write("<br>");
    document.write("<br>");

    document.write("conditional Operator");
    document.write("<br>");
    //conditional Operator
    var no=10;
    document.write((no%2==0)?"even":"odd");



 </script>
    
</body>
</html>

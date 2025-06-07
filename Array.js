<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //array with array literal
        var emp=["abc","xyz","mnp"];
        document.write(emp + "<br>");
        for(i=0;i<emp.length;i++);
        {
            document.write(emp[i] + "<br/>");
        }

        //array with new keyword
        var emp=new Array();
       {
           emp[0]="a";
            emp[1]="b";
            emp[3]="c";

            for(var i=0;i<emp.length;i++);
       {
            document.write(emp[i] + "<br/>");
        }

        }

        //by using constructor
        var emp1=["abc","xyz","mnp","a","b","c"]
         for(i=0;i<emp1.length;i++);
        {
            document.write(emp1[i] + "<br/>");
        }

        var a=emp.indexOf("xyz");
        document.write(a +"<br>");

        var r=emp.reverse("xyz");
        document.write(r +"<br>");

        document.write(emp +"<br>");


        var R=emp.concat("emp1");
        document.write(R +"<br>");

        
    </script>
</body>
</html>

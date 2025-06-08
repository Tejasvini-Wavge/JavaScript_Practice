<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let currentDate=new Date();
        let year=currentDate.getFullYear();
        let month=currentDate.getMonth();
        let day=currentDate.getDate();
        let hours=currentDate.getHours();
        let minutes=currentDate.getMinutes();
        let seconds=currentDate.getSeconds();
        console.log(year,month,+1,day,hours,minutes,seconds);

        //set
        let myDate=new Date();
        myDate.setFullYear(2025);
        myDate.setMonth(5);
        myDate.setDate(15);
        console.log(myDate);

        currentDate=new Date();
        currentDate.setDate(currentDate.getDate()+5);
        console.log(currentDate);

        let pastDate=new Date();
        pastDate=new Date();
        pastDate.setDate(pastDate.getDate()-10);

        

    </script>
</body>
</html>

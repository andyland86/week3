<html>

<head>
    <script>
        function calc(operation) {
         
            var a = prompt("Give me a number");
            var b = prompt("Give me another number");

           
            a = +a;
            b = +b;

            var result = 0;

           
            if (operation == 'add') {
                result = a + b;
            }
            else if (operation == 'sub')
            {
                result = a - b;
            }
            else if (operation == 'mul') {
                result = a * b;
            }
            else if (operation == 'div') {
                result = (b == 0) ? 0 : (a / b);
            }

           
            alert("The answer is: " + result);            
        }
    </script>
</head>

<body>
    <button onclick="calc('add')">Add</button>
    <button onclick="calc('sub')">Subtract</button>
    <button onclick="calc('mul')">Multiply</button>
    <button onclick="calc('div')">Divide</button>
</body>

</html>
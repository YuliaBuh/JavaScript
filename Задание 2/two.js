  //Задание №1. Почему код дает такие результаты?
        var a = 1
            , b = 1
            , c, d;
        c = ++a;
        alert(c); // 2
        // префиксная форма сначала увеличивает a до 2, а потом возвращает это значение
        d = b++;
        alert(d); // 1
        // постфиксная форма увеличивает b до 2, но возвращает начальное значение
        c = (2 + ++a);
        alert(c); // 5
        // префиксная форма увеличила а до 3, т.к. в предыдущем выражении а было увеличено до 2
        d = (2 + b++);
        alert(d); // 4
        // постфиксная форма увеличила b до 3, но вернула значение 2 из предыдущего выражения
        alert(a); // 3
        alert(b); // 3
        // обе переменные были увеличены по два раза
        
        //Задание №2. Чему равен х?
        var a = 2;
        var x = 1 + (a *= 2);
        // x = 5; a = 4
        
        // Задание №3.
        var a = prompt('Число a');
        var b = prompt('Число b');
        if (a >= 0 && b >= 0) {
            alert(a - b);
        }
        else if (a < 0 && b < 0) {
            alert(a * b);
        }
        else {
            alert(a + b);
        }
        
        // Задание №4.
        var a = 2;
        switch (a) {
        case 1:
            alert(a++);
                break;
        case 2:
            alert(a++);
                break;
        case 3:
            alert(a++);
                break;
        case 4:
            alert(a++);
                break;
        case 5:
            alert(a++);
                break;
        case 6:
            alert(a++);
                break;
        case 7:
            alert(a++);
                break;
        case 8:
            alert(a++);
                break;
        case 9:
            alert(a++);
                break;
        case 10:
            alert(a++);
                break;
        case 11:
            alert(a++);
                break;
        case 12:
            alert(a++);
                break;
        case 13:
            alert(a++);
                break;
        case 14:
            alert(a++);
                break;
        case 15:
            alert(a);
                break;
        default:
                alert('Перебор');
        }
        
        // Задание №5.
        function numberPlus(x, y) {
            return x + y;
        }
        sumOne = numberPlus(1, 2);
        alert(sumOne);

        function numberSubtract(x, y) {
            return x - y;
        }
        sumTwo = numberSubtract(9, 2);
        alert(sumTwo);

        function numberMultiply(x, y) {
            return x * y;
        }
        sumThree = numberMultiply(0, 5);
        alert(sumThree);

        function numberDivide(x, y) {
            return x / y;
        }
        sumFour = numberDivide(10, 5);
        alert(sumFour)
        
            //Задание №6.
        function mathOperation(arg1, arg2, operation) {
        switch (operation) {
            case '+':
                return numberPlus ( arg1, arg2 );
            case '-':
                return numberSubtract ( arg1, arg2 );
            case '*':
                return numberMultiply ( arg1, arg2 );
            case '/':
                return numberDivide ( arg1 , arg2 );
            default:
                return ('Thats all');
            }
        }

            //Задание №7*.
        alert( null >= 0 ); // true, т.к. null преобразуется к 0
        alert( null > 0 ); // false, т.к. null преобразуется к 0
        alert( null == 0 ); // false, т.к. null равен undefined и не равен чему бы то ни было ещё

          //Задание №8.
function power(val, pow) {
    if (pow === 0) {
        return 1
    } else {
        return val * power(val, pow - 1);
    }
}
  

 
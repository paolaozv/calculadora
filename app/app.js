var opcion = parseInt(prompt("Ingresa una opción \n" + 
   "1. Suma \n" + 
   "2. Resta \n" +
   "3. Multiplicación \n" +
   "4. División \n" +
   "5. Resto \n" +
   "6. Relación mayor que \n" +
   "7. Relación menor que \n" +
   "8. Igualdad"));
var resultado;

if (opcion <= 0 || opcion >= 9) {
   document.write("Opción no válida!");
}
else { 
   var numero1 = parseInt(prompt("Ingresa un número"));
   var numero2 = parseInt(prompt("Ingresa otro número"));
      switch (opcion) {
      case 1:
         resultado = numero1 + numero2;
         document.write("La suma es: " + resultado);
         break;
      case 2:
         resultado = numero1 - numero2;
         document.write("La resta es: " + resultado);
         break;
      case 3:
         resultado = numero1 * numero2;
         document.write("La multiplicación es: " + resultado);
         break;
      case 4:
         resultado = numero1 / numero2;
         document.write("La división es: " + resultado);
         break;
      case 5:
         resultado = numero1 % numero2;
         document.write("El resto es: " + resultado);
         break;
      case 6:
         if (numero1 > numero2)
            document.write("El mayor es: " + numero1);
         else 
            document.write("El mayor es: " + numero2);
         break;
      case 7:
         if (numero1 < numero2)
            document.write("El menor es: " + numero1);
         else 
            document.write("El menor es: " + numero2);
         break;
      case 8:
         if (numero1 == numero2)
            document.write("Los números son iguales");
         else 
            document.write("Los números son diferentes");
         break;
   }
}
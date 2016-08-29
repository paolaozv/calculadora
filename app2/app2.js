do {
   var resultado;
   var opcion = parseInt(prompt("Ingresa una opción \n" + 
   "1. Suma \n" + 
   "2. Resta \n" +
   "3. Multiplicación \n" +
   "4. División \n" +
   "5. Resto \n" +
   "6. Relación mayor que \n" +
   "7. Relación menor que \n" +
   "8. Igualdad \n" +
   "0. Salir"));

   if (opcion >=1 && opcion <= 8) {
      var numero1 = parseInt(prompt("Ingresa un número"));
      var numero2 = parseInt(prompt("Ingresa otro número"));
      switch (opcion) {
         case 1:
            resultado = numero1 + numero2;
            alert("La suma es: " + resultado);
            break;
         case 2:
            resultado = numero1 - numero2;
            alert("La resta es: " + resultado);
            break;
         case 3:
            resultado = numero1 * numero2;
            alert("La multiplicación es: " + resultado);
            break;
         case 4:
            resultado = numero1 / numero2;
            alert("La división es: " + resultado);
            break;
         case 5:
            resultado = numero1 % numero2;
            alert("El resto es: " + resultado);
            break;
         case 6:
            if (numero1 > numero2)
               alert("El mayor es: " + numero1);
            else 
               alert("El mayor es: " + numero2);
            break;
         case 7:
            if (numero1 < numero2)
               alert("El menor es: " + numero1);
            else 
               alert("El menor es: " + numero2);
            break;
         case 8:
            if (numero1 == numero2)
               alert("Los números son iguales");
            else 
               alert("Los números son diferentes");
            break;
         default:
            break;
      }
   }
}  while (opcion >=1 && opcion <= 8) 
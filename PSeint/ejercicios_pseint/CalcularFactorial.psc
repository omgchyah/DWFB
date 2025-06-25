Algoritmo CalcularFactorial
	
	//Rossana Liendo
	
	Definir nUser, factorial, i Como Entero
	
	factorial = 1
	
	Mostrar "Introduce un número para saber su factorial: "
	Leer nUser
	
	Mientras nUser < 0 Hacer
		Mostrar "Introduce un número mayor o igual a 0."
		Leer nUser
	FinMientras
	
	si nUser == 0 Entonces
		factorial = 1
	SiNo
		Para i Desde 1 Hasta nUser
			factorial = factorial * i
		FinPara
	FinSi
	
	Mostrar "El factorial de ", nUser, " es: ", factorial, "."	
FinAlgoritmo

Algoritmo CalculadoraSimple
	
	//Rossana Liendo
	
	Definir n1, n2 Como Entero
	Definir option Como Caracter
	
	Mostrar "Escriba el primer n�mero: "
	Leer n1
	
	Mostrar "Escriba el segundo n�mero: "
	Leer n2
	
	Mostrar "Escoja una opci�n: "
	Mostrar "S. Suma"
	Mostrar "R. Resta"
	Mostrar "M. Multiplicaci�n"
	Mostrar "D. Divisi�n"
	
	Leer option
	
	Segun option Hacer
		"S":
			Mostrar "La suma de ", n1, " y ", n2, " es: ", n1 + n2, "."
		"R":
			Mostrar "La resta de ", n1, " y ", n2, " es: ", n1 - n2, "."
		"M":
			Mostrar "La multiplicaci�n de ", n1, " y ", n2, " es: ", n1 * n2, "."
		"D":
			si n2 == 0 Entonces
				Mostrar "Divisi�n entre cero no es v�lida."
			SiNo
				Mostrar "La divisi�n de ", n1, " y ", n2, " es: ", n1 / n2, "."
			FinSi
		De Otro Modo:
			Mostrar "Opci�n no v�lida."
	FinSegun
	
	
FinAlgoritmo

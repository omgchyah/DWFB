Algoritmo CalculadoraSimple
	
	//Rossana Liendo
	
	Definir n1, n2 Como Entero
	Definir option Como Caracter
	
	Mostrar "Escriba el primer número: "
	Leer n1
	
	Mostrar "Escriba el segundo número: "
	Leer n2
	
	Mostrar "Escoja una opción: "
	Mostrar "S. Suma"
	Mostrar "R. Resta"
	Mostrar "M. Multiplicación"
	Mostrar "D. División"
	
	Leer option
	
	Segun option Hacer
		"S":
			Mostrar "La suma de ", n1, " y ", n2, " es: ", n1 + n2, "."
		"R":
			Mostrar "La resta de ", n1, " y ", n2, " es: ", n1 - n2, "."
		"M":
			Mostrar "La multiplicación de ", n1, " y ", n2, " es: ", n1 * n2, "."
		"D":
			si n2 == 0 Entonces
				Mostrar "División entre cero no es válida."
			SiNo
				Mostrar "La división de ", n1, " y ", n2, " es: ", n1 / n2, "."
			FinSi
		De Otro Modo:
			Mostrar "Opción no válida."
	FinSegun
	
	
FinAlgoritmo

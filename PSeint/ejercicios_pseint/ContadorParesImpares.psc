Algoritmo ContadorParesImpares
	
	//Rossana Liendo
	
	Definir numberQty, n1, i, nImpares, nPares Como Entero
	
	nImpares = 0
	nPares = 0
	
	Mostrar "¿Cúantos números quieres guardar?"
	Leer numberQty
	
	Para i Desde 1 Hasta numberQty Hacer
		Mostrar "Introduce el ", i, "º número: "
		Leer nUser
		si nUser % 2 <> 0 Entonces
			nImpares = nImpares + 1
		SiNo
			nPares = nPares + 1
		FinSi
	FinPara
	
	Mostrar "Cantidad de números impares es: ", nImpares
	Mostrar "Cantidad de números pares: ", nPares
		
FinAlgoritmo

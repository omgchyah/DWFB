Algoritmo ContadorParesImpares
	
	//Rossana Liendo
	
	Definir numberQty, n1, i, nImpares, nPares Como Entero
	
	nImpares = 0
	nPares = 0
	
	Mostrar "�C�antos n�meros quieres guardar?"
	Leer numberQty
	
	Para i Desde 1 Hasta numberQty Hacer
		Mostrar "Introduce el ", i, "� n�mero: "
		Leer nUser
		si nUser % 2 <> 0 Entonces
			nImpares = nImpares + 1
		SiNo
			nPares = nPares + 1
		FinSi
	FinPara
	
	Mostrar "Cantidad de n�meros impares es: ", nImpares
	Mostrar "Cantidad de n�meros pares: ", nPares
		
FinAlgoritmo

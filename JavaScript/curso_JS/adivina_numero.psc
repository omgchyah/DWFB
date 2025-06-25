Algoritmo adivina_numero
	
    randomNum <- Aleatorio(1, 10)
    nTries <- 3
	
    Mostrar "Adivina el número del 1 al 10"
    Mostrar "Tienes", nTries, "intentos"
	
    Leer nUser
	
    Mientras nUser <> randomNum Y nTries > 1 Hacer
        nTries <- nTries - 1
        Mostrar "Lo siento. Intenta de nuevo. Te quedan", nTries, "intentos"
        Leer nUser
    FinMientras
	
    Si nUser = randomNum Entonces
        Mostrar "¡Felicidades! Has adivinado el número con", nTries, "intentos restantes."
    SiNo
        Mostrar "Lo siento. Te has quedado sin intentos. El número era:", randomNum
    FinSi
	
FinAlgoritmo

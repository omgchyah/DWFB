Algoritmo guess_number
	
	max_guesses = 3

	number_random = Aleatorio(1, 10)
	Mostrar number_random
	Mostrar "Write a number from 1 to 10: " 
	Leer number_user
	
	Mientras  (number_random <> number_user Y max_guesses > 1) Hacer
		si (number_user > number_random)
			Mostrar "Yous guess was too high. Try again: "
		SiNo
			Mostrar "Your guess was too low. Try again: "
		FinSi
		Leer number_user
		max_guesses = max_guesses - 1
	FinMientras
	
	si (number_random = number_user)
		Mostrar "Congrats! You have guessed correctly with ", max_guesses, " guesses left."
	SiNo
		Mostrar "I am sorry. You have no more guesses left. The random number was ", number_random, "."
	FinSi
	
FinAlgoritmo

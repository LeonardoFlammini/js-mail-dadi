Mail / Dadi
===

## Consegna

**Mail**

1. Chiedi all’utente la sua email,
1. controlla che sia nella lista di chi può accedere
1. stampa un messaggio appropriato sull’esito del controllo.

---

**Gioco dei dadi**


1. Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
1. Stabilire il vincitore, in base a chi fa il punteggio più alto.

--- 

**Prima di partire a scrivere codice poniamoci qualche domanda:**

Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
---

## Procedimento

**Mail:**

1. Chiedo all' utente la sua email attraverso un input email e la salvo su una variabile js
1. con un ciclo for scorro l'array che ho delle mail registrate, nel mentre con un if cerco la corrispondenza
1. se trovo la corrispondenza accendo un flag altrimenti no
1. stampo l'esito positivo o negativo a seconda che il mio flag sia acceso oppure no 

**Dadi:**

1. voglio generare un risultato ogni volta che clicco un bottone, quindi al click del bottone mi richiamo una funzione custom che mi simula il lancio del dado, per farlo:
  
    1. salvo in due variabili distinte il risultato di un estrazione random tra 1 e 6 
    1. confronto il risultato con un if 
    1. stampo a video il risultato
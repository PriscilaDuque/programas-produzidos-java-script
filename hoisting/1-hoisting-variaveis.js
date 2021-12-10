    /**O JavaScript apenas eleva (hoists) as declarações, não as inicializações. Se uma variável for declarada e inicializada após 
     * usá-la, o valor será undefined. */
    
    console.log();
    
    console.log(firstName); // Retorna undefined
    var firstName; // Declaração
    firstName = 'Priscila'; // Inicialização  

    console.log();

    /** Se você declarar a variável depois que ela for usada, mas inicializá-la antecipadamente, ela retornará o valor: */
    lastName = 'Vaz'; // Inicialização  
    console.log(lastName); // Retorna Vaz
    var lastName; // Declaração'
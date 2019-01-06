// var g = G$('Joe', 'Doe');

// Example of using our library without a button
// $('select').change(function() {
//     console.log($( "select option:selected").val());
//     ($( "select option:selected").val() === 'en') 
//     ? g.setLang('en').greet().HTMLGreeting('#greeting', false) 
//     : g.setLang('es').greet().HTMLGreeting('#greeting', false);
// })

// example of using our library with a button

// $('#login').click(function() {
//     ($( "select option:selected").val() === 'en') 
//     ? g.setLang('en').greet().HTMLGreeting('#greeting', false).log() 
//     : g.setLang('es').greet().HTMLGreeting('#greeting', false).log();
// })

// // gets a new object (the architecture allows us to not have to use the 'new' keyword here)
// var g = G$('John', 'Doe');

// // use our chainable methods
// g.greet().setLang('es').greet(true).log();

// // let's use our object on the click of the login button
// $('#login').click(function() {
   
//     // create a new 'Greetr' object (let's pretend we know the name from the login)
//     var loginGrtr = G$('John', 'Doe');
    
//      // hide the login on the screen
//     $('#logindiv').hide();
    
//      // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
//     loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
    
// });
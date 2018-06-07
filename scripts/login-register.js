
const appKey 			= 'kid_ryqsEmWxQ';
const appSecret 		= 'a80bcf0cc4954e4aa299e3160baa962d';

Kinvey.init( {
    appKey:     appKey,
    appSecret:  appSecret
} );
////////////////////////////////////////////////////////////////////////////////

var activeUser          = Kinvey.User.getActiveUser();

////////////////////////////////////////////////////////////////////////////////

function    showUserGreeting() {
    var helloUser           = document.getElementById( 'helloUser' );
    var userHeader          = document.getElementById( 'userHeader' );
    var logout              = document.getElementById( 'logout' );

    if( helloUser != null ) {
        helloUser.style.display    = "inline-block";
    }

    if( userHeader != null ) {
        userHeader.style.display   = "inline-block";
        userHeader.innerHTML       = activeUser.data.username;
    }

    if ( logout != null ) {
        logout.style.display       = "inline-block";
    }
}
////////////////////////////////////////////////////////////////////////////////

function    hideUserGreeting() {
    var helloUser           = document.getElementById( 'helloUser' );
    var userHeader          = document.getElementById( 'userHeader' );
    var logout              = document.getElementById( 'logout' );

    if( helloUser !== null )
        helloUser.style.display    = "none";

    if( userHeader != null ) {
        userHeader.style.display   = "none"
        userHeader.innerHTML       = "";
    }

    if ( logout != null ) {
        logout.style.display       = "none";
    }
}
////////////////////////////////////////////////////////////////////////////////

function    showLoginReg() {
    var loginButton         = document.getElementById( 'loginButton' );
    var registerButton      = document.getElementById( 'registerButton' );

    if( loginButton != null )
        loginButton.style.display    = "inline-block";

    if( registerButton != null )
        registerButton.style.display   = "inline-block";

}
////////////////////////////////////////////////////////////////////////////////

function    hideLogReg() {
    var loginButton         = document.getElementById( 'loginButton' );
    var registerButton      = document.getElementById( 'registerButton' );

    if( loginButton != null )
        loginButton.style.display       = "none";

    if( registerButton != null )
        registerButton.style.display    = "none";

}
////////////////////////////////////////////////////////////////////////////////

function    showRecipes() {
    var youMustBeLoggedIn   = document.getElementById( 'youMustBeLoggedIn' );
    var recipeImage         = document.getElementById( 'recipeImage' );
    var recipeHeader        = document.getElementById( 'recipeHeader' );
    var recipeText          = document.getElementById( 'recipeText' );

    if( youMustBeLoggedIn != null )
        youMustBeLoggedIn.style.display = "none";

    if( recipeImage != null )
        recipeImage.style.display       = "block";

    if( recipeHeader != null )
        recipeHeader.style.display      = "block";

    if( recipeText != null )
        recipeText.style.display        = "block";
}
////////////////////////////////////////////////////////////////////////////////

function    hideRecipes() {
    var youMustBeLoggedIn   = document.getElementById( 'youMustBeLoggedIn' );
    var recipeImage         = document.getElementById( 'recipeImage' );
    var recipeHeader        = document.getElementById( 'recipeHeader' );
    var recipeText          = document.getElementById( 'recipeText' );
    
    if( youMustBeLoggedIn != null )
        youMustBeLoggedIn.style.display = "block";

    if( recipeImage != null )
        recipeImage.style.display       = "none";

    if( recipeHeader != null )
        recipeHeader.style.display      = "none";

    if( recipeText != null )
        recipeText.style.display        = "none";
}
////////////////////////////////////////////////////////////////////////////////

function    hasActiveUser() {
    if( activeUser !== null ) {
        showUserGreeting();
        hideLogReg();
        showRecipes();
    } 
    else {
        hideUserGreeting();
        showLoginReg();
        hideRecipes();
    }
}
////////////////////////////////////////////////////////////////////////////////

function    login() {
    var promise = Kinvey.User.login( $( '#loginUsername' ).val(), $( '#loginPassword' ).val() )
        .then( function( user ) {
            console.log( user );
            document.getElementById( 'successfulLogin' ).style.display  = "block";
            location.reload();

            replaceLocation();
        } )
        .catch( function( error ) {
            document.getElementById( 'failedLogin' ).style.display  = "block";
            console.log( error );
        } );

    return  false;
}
////////////////////////////////////////////////////////////////////////////////

function    register() {
    var promise = Kinvey.User.signup( {
        username: $( '#registerUsername' ).val(),
        password: $( '#registerPassword' ).val()
    } )
        .then( function( user ) {
            console.log( user );
            document.getElementById( 'successfulRegister' ).style.display  = "block";
            location.reload();

            replaceLocation();
        } )
        .catch( function( error ) {
            document.getElementById( 'failedRegister' ).style.display  = "block";
            console.log( error );
        } );

    return  false;
}
////////////////////////////////////////////////////////////////////////////////

function    logout() {
    var promise = Kinvey.User.logout()
        .then( function() {
            console.log( 'Logged out.' );
            location.reload();

            replaceLocation();
        } )
        .catch( function( error ) {
            console.log( error );
        } );
}
////////////////////////////////////////////////////////////////////////////////

function    replaceLocation() {
    window.location.replace( "https://ivelinkrastev.github.io/jsproject/" );
}


const appKey 			= 'kid_ryqsEmWxQ';
const appSecret 		= 'a80bcf0cc4954e4aa299e3160baa962d';
const kinveyServiceUrl 	= 'https://baas.kinvey.com/';

Kinvey.init( {
    appKey:     appKey,
    appSecret:  appSecret
} );

var activeUser = Kinvey.User.getActiveUser();
console.log( activeUser );

function    hasActiveUser() {
    if( activeUser !== null ) {
        document.getElementById( 'helloUser' ).style.display        = "inline-block";
        document.getElementById( 'userHeader' ).style.display       = "inline-block";
        document.getElementById( 'userHeader' ).innerHTML           = activeUser.data.username;
        document.getElementById( 'logout' ).style.display           = "inline-block";

        document.getElementById( 'loginButton' ).style.display      = "none";
        document.getElementById( 'registerButton' ).style.display   = "none";
    }
    else {
        document.getElementById( 'helloUser' ).style.display        = "none";
        document.getElementById( 'userHeader' ).style.display       = "none";
        document.getElementById( 'logout' ).style.display           = "none";

        document.getElementById( 'loginButton' ).style.display      = "inline-block";
        document.getElementById( 'registerButton' ).style.display   = "inline-block";
    }
};


function    login() {
    var promise = Kinvey.User.login( $( '#loginUsername' ).val(), $( '#loginPassword' ).val() )
        .then( function( user ) {
            console.log( user );
            document.getElementById( 'successfulLogin' ).style.display  = "block";
            window.location.href    = "/";
            location.reload();
        } )
        .catch( function( error ) {
            document.getElementById( 'failedLogin' ).style.display  = "block";
            console.log( error );
        } );

    return false;
}

function    register() {
    var promise = Kinvey.User.signup( {
        username: $( '#registerUsername' ).val(),
        password: $( '#registerPassword' ).val()
    } )
        .then( function( user ) {
            console.log( user );
            document.getElementById( 'successfulRegister' ).style.display  = "block";
            window.location.href    = "/";
            location.reload();
        } )
        .catch( function( error ) {
            document.getElementById( 'failedRegister' ).style.display  = "block";
            console.log( error );
        } );

    return false;
}

function    logout() {
    var promise = Kinvey.User.logout()
        .then( function() {
            console.log( 'Logged out.' );
            window.location.href    = "/";
            window.location.reload();
        } )
        .catch( function( error ) {
            console.log( error );
        } );
}

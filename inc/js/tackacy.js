var currentLocation = window.location.href;
//console.log(currentLocation);
var prilink = "/#mentions-legales.html";

var string = currentLocation;
var substring = "/mobile/";

//console.log(string.indexOf(substring) !== -1);


if(string.indexOf(substring) !== -1) {

    
    prilink=  "/mobile/#mentions-legales.html";   

    substring = "/en/";
    if(string.indexOf(substring) !== -1) {

        prilink=  "/mobile/en/#legal-notices.html";   
    }
    substring = "/gp/";
    if(string.indexOf(substring) !== -1) {

        prilink=  "/mobile/gp/#mansion-legal.html";   
    }
   
    

}
else {
    prilink=  "/#mentions-legales.html";   

    substring = "/en/";
    if(string.indexOf(substring) !== -1) {

        prilink=  "/en/#legal-notices.html";   
    }
    substring = "/gp/";
    if(string.indexOf(substring) !== -1) {

        prilink=  "/gp/#mansion-legal.html";   
    }
   
}

//console.log(prilink);




tarteaucitron.init({
    "hashtag": "#tarteaucitron", /* Ouverture automatique du panel avec le hashtag */
    "cookieName": "prefcookies", /* Cookie name */
    "highPrivacy": true, /* désactiver le consentement implicite (en naviguant) ? */
    "orientation": "bottom", /* le bandeau doit être en haut (top) ou en bas (bottom) ? */
    "adblocker": false, /* Afficher un message si un adblocker est détecté */
    "showAlertSmall": false, /* afficher le petit bandeau en bas à droite ? */
    "cookieslist": false, /* Afficher la liste des cookies installés ? */
    "removeCredit": true, /* supprimer le lien vers la source ? */
    "moreInfoLink": false,
    "handleBrowserDNTRequest": false, /* Deny everything if DNT is on */
    //"cookieDomain": ".example.com" /* Nom de domaine sur lequel sera posé le cookie pour les sous-domaines */
    "privacyUrl": prilink,
    "readmoreLink": "", /* Change the default readmore link */

    "mandatory": true
});
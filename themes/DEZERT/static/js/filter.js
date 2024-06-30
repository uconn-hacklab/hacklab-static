var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

let tag_param = getUrlParameter('tag');
if (tag_param) {
    console.log("found tags!" + " " + tag_param);
    document.addEventListener( 'DOMContentLoaded', function() {
        document.querySelectorAll('.tagable').forEach(function(elem) {
            console.log("i'm not being run!");
            console.log(elem.getAttribute("data-tags"));
            if (elem.getAttribute("data-tags").indexOf(tag_param) === -1) {
                elem.style.display = "none";
            }
        });
    });

    
}

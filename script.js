//french date filter
var frenchDate = function(value){
    if (!value) return ''
    value = value.toString()
    year = parseInt(value.slice(0, 4))
    day = parseInt(value.slice(8, 10))
    monthNumber = parseInt(value.slice(5, 7))
    
    switch (monthNumber) {
    case 1:
        month = "janvier";
        break;
    case 2:
        month = "février";
        break;
    case 3:
        month = "mars";
        break;
    case 4:
        month = "avril";
        break;
    case 5:
        month = "mai";
        break;
    case 6:
        month = "juin";
        break;
    case 7:
        month = "juillet";
        break;
    case 8:
        month = "août";
        break;
    case 9:
        month = "septembre";
        break;
    case 10:
        month = "octobre";
        break;
    case 11:
        month = "novembre";
        break;
    case 12:
        month = "décembre";
        break;
}
    
    return day + ' ' + month + ' ' + year
};

Vue.filter('frenchDate', frenchDate);

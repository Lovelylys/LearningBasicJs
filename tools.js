function hasClass(obj, name) {
    var reg = new RegExp("\\b" + name + "\\b");
    return reg.test(obj.className);
}
function removeClass(obj,name) {
    var reg = new RegExp("\\b" + name + "\\b");
    obj.className = obj.className.replace(reg, "");
}
function addClass(obj, name) {
    obj.className += " " + name;
}
function toggleClass(obj, name) {
    if (hasClass(obj, name)) {
        removeClass(obj, name);
    }else {
        addClass(obj, name);
    }
}
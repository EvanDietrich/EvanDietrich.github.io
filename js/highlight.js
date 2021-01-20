var highlight = function() {
    var find = (new RegExp("\"(.*)\"")).exec(window.location.hash.trim())
    if (find) {
        var search = find[1].toLowerCase();

        var doc = document.body.innerHTML;
        var position = doc.toLowerCase().indexOf(search);
        var text = doc.substring(position, position + search.length);

        if (position !== -1) {
            document.body.innerHTML = doc.substring(0, position) + '<mark>' + text + '</mark>' + doc.substring(position + search.length);
        }
    }
}

window.addEventListener('load', highlight);
window.addEventListener('hashchange', highlight);
var REPLACEMENTS = {
    //English
    'terrorist': 'coward',
    'Terrorist': 'Coward',
    'terrorism': 'cowardice',
    'Terrorism': 'Cowardice'
    //Portuguese
    'terrorista': 'covarde',
    'Terrorista': 'Covarde',
    'terrorismo': 'covardia',
    'Terrorismo': 'Covardia',
    //Turkish
    'terörist': 'korkak',
    'Terörist': 'Korkak',
    'terörizm': 'korkaklık',
    'Terörizm': 'Korkaklık'
    'teröristler': 'korkaklar',
    'Teröristler': 'Korkaklar',
};

var replaceTerror = function(textNode) {
    var text = textNode.data;
    for(var before in REPLACEMENTS){
        if(REPLACEMENTS.hasOwnProperty(before))
            text = text.replace(new RegExp(before, "g"), REPLACEMENTS[before]);
    }
    textNode.data = text;
};

// Only alter text nodes
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes) {
            [].slice.call(mutation.addedNodes).forEach(function(node) {
                if (node.nodeName.toLowerCase() == "#text") {
                    replaceTerror(node);
                }
            });
        }
    });
});

observer.observe(document, {
    childList: true,
    subtree:   true
});

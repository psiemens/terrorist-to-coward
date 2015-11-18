var REPLACEMENTS = {
    // English
    'terrorist': 'coward',
    'Terrorist': 'Coward',
    'terrorism': 'cowardice',
    'Terrorism': 'Cowardice',
    // Portuguese
    'terrorista': 'covarde',
    'Terrorista': 'Covarde',
    'terrorismo': 'covardia',
    'Terrorismo': 'Covardia',
    // Spanish
    'terrorista': 'cobarde',
    'Terrorista': 'Cobarde',
    'terrorismo': 'cobardía',
    'Terrorismo': 'Cobardía',
    //German
    'Terrorist': 'Feigling',
    'Terroristen': 'Feiglinge',
    'Terrorismus': 'Feigheit',
    'Terror': 'Feige',
    // Chinese
    '恐怖': '懦弱',
    // Turkish
    'terörist': 'korkak',
    'Terörist': 'Korkak',
    'terörizm': 'korkaklık',
    'Terörizm': 'Korkaklık',
    'teröristler': 'korkaklar',
    'Teröristler': 'Korkaklar',
    //Greek
    'τρομοκράτης': 'δειλός',
    'τρομοκρατης': 'δειλός',
    'τρομοκρατες': 'δειλοί',
    'Τρομοκρατες': 'Δειλοί',
    'τρομοκράτες': 'δειλοί',
    'Τρομοκράτες': 'Δειλοί',
    'Τρομοκράτης': 'Δειλός',
    'Τρομοκρατης': 'Δειλός',
    'τρομοκρατία': 'δειλία',
    'τρομοκρατια': 'δειλία',
    'Τρομοκρατία': 'Δειλία',
    'Τρομοκρατια': 'Δειλία',
    // Serbian (Latin)
    'terorista': 'kukavica',
    'Terorista': 'Kukavica',
    'terorizam': 'kukavičluk',
    'Terorizam': 'Kukavičluk', 
    'teroristički': 'kukavičlučki',
    'Teroristički': 'kukavičlučki',
    // Serbian (Cyrilic)
    'терориста': 'кукавица',
    'Терориста': 'Кукавица',
    'тероризам': 'кукавичлук',
    'Тероризам': 'Кукавичлук', 
    'терористички': 'кукавичлучки',
    'Терористички': 'Кукавичлучки',
    // Italian
    'terrorista': 'codardo',
    'Terrorista': 'Codardo',
    'terroristi': 'codardi',
    'Terroristi': 'Codardi',
    'terrorismo': 'codardia',
    'Terrorismo': 'Codardia',
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

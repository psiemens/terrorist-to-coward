var REPLACEMENTS = {
    'terrorist': 'coward',
    'Terrorist': 'Coward',
    'terrorism': 'cowardice',
    'Terrorism': 'Cowardice'
};

var replaceTerror = function(textNode) {
    var text = textNode.data;
    $.each(REPLACEMENTS, function (before, after) {
        text = text.replace(new RegExp(before, "g"), after);
    });
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

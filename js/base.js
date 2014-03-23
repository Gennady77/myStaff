var define = function(dep, factory) {
    if(!(dep instanceof Array)) throw new Error('dependencies is not an array');
    if(!(factory instanceof Function)) throw new Error('dependencies is not a function');
    
    dep.forEach(function(depId) {
        var req = new XMLHttpRequest();
        req.open('GET', depId + '.js');
        
        req.addEventListener('loadstart', function(e) {
            console.log('loadstart: ', req.readyState, req.status, req.statusText);
        });
        req.addEventListener('loadprogress', function(e) {
            console.log('loadprogress: ', req.readyState, req.status, req.statusText);
        });
        req.addEventListener('load', function(e) {
            console.log('load: ', req.readyState, req.status, req.statusText);
        });
        req.addEventListener('loadend', function(e) {
            console.log('loadend: ', req.readyState, req.status, req.statusText);
        });
        req.addEventListener('readystatechange', function(e) {
            console.log('readystatechange: ', req.readyState, req.status, req.statusText);
        });
        req.send();
    });
};
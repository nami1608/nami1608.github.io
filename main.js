navigator.serviceWorker.register('sw.js').then(function(registration){
    console .log('excellent,registered with scope:',registration.scope);
});
    
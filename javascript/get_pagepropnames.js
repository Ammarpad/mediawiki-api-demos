//This file is autogenerated. See modules.json and autogenerator.py for details

/*
    get_pagepropnames.js

    MediaWiki API Demos
    Demo of `Pagepropnames` module: List page property names on the given wiki.

    MIT License
*/

var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    list: "pagepropnames",
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var pageprops = response.query.pagepropnames;
        for (var p in pageprops) {
            console.log(pageprops[p].propname);
        }
    })
    .catch(function(error){console.log(error);});
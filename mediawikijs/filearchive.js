// This file is autogenerated. See modules.json and autogenerator.py for details

/*
	filearchive.js

	MediaWiki API Demos
	Demo of `Filearchive` module: Enumerate 3 deleted files from filearchive table in descending order.

	MIT License
*/

var params = {
		action: 'query',
		falimit: '3',
		list: 'filearchive',
		fadir: 'descending',
		format: 'json'
	},
	api = new mw.Api();

api.get( params ).done( function ( data ) {
	console.log( data );
} );
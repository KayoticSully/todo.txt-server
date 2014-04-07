'use strict';

/**
 * Module dependencies
 */
var express = require('express');

/**
 * Module Routes
 */
var Index = module.exports = express.Router(),
	base_route = '/';

// GET Web
Index.get(base_route, home);

/**
 * Functions
 */
function home(req, res) {
	res.render('index', {
		title: 'Todo.txt API'
	});
}
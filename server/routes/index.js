'use strict';

const express = require('express');
const router = express.Router();

//
//	RAM DB
//
let db = "";

//
//	Get
//
router.get('/', function(req, res, next) {

	//
	//	-> Respond with the data
	//
	return res.status(200).send(db);

});

//
//	Save
//
router.post('/', function(req, res, next) {

	let ips = req.headers["x-forwarded-for"];
	let ip = '';

	if (ips)
	{
		let list = ips.split(",");

		ip = list[list.length-1];
	}
	else
	{
		ip = req.connection.remoteAddress;
	}

	//
	//	1. Save the remote IP
	//
	db = ip + "\n" + Math.floor(Date.now() / 1000)

	//
	//	-> thank you for the ping :)
	//
	return res.status(200).send("OK");

});

module.exports = router;

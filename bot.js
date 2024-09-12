var HTTPS = require('https');

const botID = process.env.BOT_ID;

const options = {
	hostname: 'api.groupme.com',
	path: '/v3/bots/post',
	method: 'POST'
};

var body = {
	bot_id: botID,
	text: ""
};

function respond() {
	var request = JSON.parse(this.req.chunks[0]);

	if (request.text && Math.random() > 0.9) {
		this.res.writeHead(200);
		postMessage();
		this.res.end();
	}
}

function postMessage() {
	body.text = getVerse();

	console.log('sending ' + body.text + ' to ' + botID);

	var botReq = HTTPS.request(options, function (res) {
		if (res.statusCode != 202) {
			console.log('rejecting bad status code ' + res.statusCode);
		}
	});

	botReq.on('error', function (err) {
		console.log('error posting message ' + JSON.stringify(err));
	});
	botReq.on('timeout', function (err) {
		console.log('timeout posting message ' + JSON.stringify(err));
	});
	botReq.end(JSON.stringify(body));
}

function getVerse() {
    var request = new XMLHttpRequest();
	request.open("GET", "https://labs.bible.org/api/?passage=random&type=text");
	request.send();
	request.responseType = "text";
	return request;
}

exports.respond = respond;

var HTTPS = require('https');

const botID = process.env.BOT_ID;

const options = {
	hostname: 'api.groupme.com',
	path: '/v3/bots/post',
	method: 'POST'
};

var body = {
	bot_id: botID,
	text: "",
	attachments: [
		{
			type: "image",
			url: ""
		}
	]
};

const quotes = [
	"In this world you either drip or drown, and baby, I brought the life jacket.",
	"Ok pal",
	"Sure buddy",
	"Ok buster",
	"In this world you either milk or get milked, and baby, I'm the cow.",
	"All [REDACTED] Week ever was, was me sitting in the DC drinking milk, in a funny outfit.",
	"Tavin Reeves likes crotch shots.",
	"Uhhhh, yeah",
	"That's right!",
	"So true!",
	"I hardly know her!",
	"💀",
	"🗿",
	"☝️🤓",
	"☝️🤓 Erhm, akshulally",
	"You can save by bundling Home & Auto",
	"[RËDÁÇTÊD]",
	"Hello, I'm Jake",
	"Look at me, I'm Jake, I'm so tall and cool and attractive",
	"bruh",
	"**VINE BOOM SOUND EFFECT**",
	"Otis.png",
	"RIP [RËDÁÇTÊD] Week",
	"Let me get uh...",
	"Never forget The Alamo",
	"Tavin: (zooms in on crotch)",
	"Biggy Mike",
	"Let me be clear",
	"Let me be Frank",
	"Your mind is to creamy in the gutter",
	"@Sully..., @Sully...",
	"Giga gadee gida gida ooh",
	"@Dan Bot, pull up",
	"All my homies hate @Dan Bot",
	"Sammy 2 Sucks!",
	"Owen is the Drizzler",
	"Cannibal Sam O'Hare",
	"Everywhere I look I see Dorbees!",
	"🍺💪🏼🐶 ROOT BEER!!!",
	"Hip-hip!",
	"@Tavin Reeves : 🩳📸👀",
	"[INSERT SPAM MESSAGE]",
	"[INSERT MESSAGE]",
	"Y'all spam more than me tbh",
	"John, Blume & Colin's bots are mid",
	"@Josh Benson : 🍑🌳🏙️",
	"@Colin Davis : 🖐️🤠🤚",
	"Boy did I open the wrong door...",
	"@Jake Scott : 👨‍💻🤽‍♂️🤓",
	"I wanna be grown up, I'm not a kid no more, I was when I was four, but that was long ago!",
	"Jake I love you, but your week sucked! - @Elijah Ladd",
	"Michelle, uh...",
	"Tavin_sphere.png",
	"Josh_crying.jpg",
	"FBI Leaks.pdf",
	"@Sam Mauer : 📰✍️🤥",
	"LTB",
	"Penthouse... more like... REPENThouse",
	"Yeah",
	"Mama I'm a criminal",
	"https://youtube.com/shorts/lfDdP93GM3k?si=MudB-7tGL1oD0LAL",
	"I'm feelin' MAD stuffy rn",
];

const imageURLs = [
	"https://i.groupme.com/1080x1079.jpeg.e08faeb0a4bb4068b458a3f63994a842",
	"https://i.groupme.com/750x650.png.8874165939864b6b9d26ad5e918dcd0d",
	"https://i.groupme.com/375x666.jpeg.6bef1d29066e4ace89ad056a551eceb5",
	"https://i.groupme.com/720x1280.jpeg.017a0936855f4703b73bb28cc2d974a3",
	"https://i.groupme.com/433x577.jpeg.6347f72c4ce0467998beb54f9460bd77",
	"https://i.groupme.com/3024x4032.jpeg.c6f14d8fa5b44c30b0bbb031b3634751",
	"https://i.groupme.com/750x739.jpeg.9f6db6097d7b43ab9c497df4b3dea139",
	"https://i.groupme.com/551x699.jpeg.3c182abef6d044dfb218803cf8df828f",
	"https://i.groupme.com/148x148.gif.64f227cfbe1f4d1a934eecf98a90d11f",
	"https://i.groupme.com/1152x1750.png.764de261289d422b8c13117669700e83",
	"https://i.groupme.com/750x650.png.8874165939864b6b9d26ad5e918dcd0d",
	"https://i.groupme.com/480x429.jpeg.5acd54f001864eaaaa1230ba9457ce14",
	"https://i.groupme.com/405x720.gif.99b5d82e6e404e7aa230fbeffdf62557",
	"https://i.groupme.com/1482x800.png.da55ee91b13d4a9aacdda8fe01b8287c",
	"https://i.groupme.com/768x403.jpeg.b130366fed5941fcad9227937db57ddd",
	"https://i.groupme.com/957x1258.jpeg.b5d71e7f4a0f4a59ad6275b2712c3458",
	"https://i.groupme.com/1500x2000.jpeg.977af0db50804deda9842c7d576650cf",
	"https://i.groupme.com/298x167.jpeg.f30bd5f19ccd4a00b31b167a9209911a",
	"https://i.groupme.com/320x180.jpeg.aa245952845042fea4f24bd3a0a75cde",
	"https://i.groupme.com/243x369.jpeg.7f2af1009dc744d0bd0aaefec59508b6",
	"https://i.groupme.com/375x666.jpeg.06b2138cb74e4b6fba392b490743fd18",
	"https://i.groupme.com/606x856.png.c072de3871994608839b38a1fff8d179",
	"https://i.groupme.com/300x480.png.0acdb46bd00c44acb50f5e83e8c2643b",
	"https://i.groupme.com/1500x2000.jpeg.d8eecab63de441e6bfa539af43c8c00c",
	"https://i.groupme.com/2000x924.jpeg.a071b3fc04394277a879b0f1d05aa06d",
	"https://i.groupme.com/2796x4974.jpeg.fbb3ff2d0da04af09015b10ec709544c",
	"https://i.groupme.com/1124x1498.jpeg.ed053252e43d49458f4d209c4e25482d",
	"https://i.groupme.com/720x1280.jpeg.83d0c2376fba4779a8d986e736f96d01",
	"https://i.groupme.com/720x1280.jpeg.b14b1ccb7dae43a98d23e61bd05f368b",
	"https://i.groupme.com/2532x1401.jpeg.3af482e4109d43efadeda614314688bc",
	"https://i.groupme.com/720x1280.jpeg.a699c61c19dd498285f54da5df453af1",
	"https://i.groupme.com/1080x598.jpeg.3947d092bb6e434893c6d78372847cbd",
	"https://i.groupme.com/2532x4494.jpeg.b2b6ebf281e342c0a894c7882c9351c1",
	"https://i.groupme.com/225x225.jpeg.284025cd84ed441db9f93c02308f1d78",
	"https://i.groupme.com/640x522.gif.102d79b04911443ab791e3194e2764c6",
	"https://i.groupme.com/680x653.jpeg.3cf30494de2242f48fae288222bef492",
	"https://i.groupme.com/405x720.gif.9273e0313da342399d63fbf29662c32f",
	"https://i.groupme.com/220x91.gif.9fdc010e19a54c89b5aaa7d2a4d07556",
	"https://i.groupme.com/680x760.png.87e40d892c2b4158ac236deeb5b31ae3",
	"https://i.groupme.com/1170x1149.jpeg.334339372c9e47b4a76d1be82b88d5ac",
	"https://i.groupme.com/1025x1348.jpeg.e9a4efb4a4ce4300ae48646b30166c98",
	"https://i.groupme.com/1334x2372.jpeg.dabcb7a3eaa34d99919d153153aed451",
	"https://i.groupme.com/3024x4032.jpeg.b238c4f2a2a041c38dcd5b60c9b6b3da",
	"https://i.groupme.com/768x1024.jpeg.178e1a140cc5492880e7cc4fefab0577",
	"https://i.groupme.com/2268x4032.jpeg.a864771c5cfb4e1e862bcc4d7cbc878f",
	"https://i.groupme.com/2316x3088.jpeg.614b6cc1d5954cb5a81943f693cfe78d",
	"https://i.groupme.com/390x480.gif.17bf3bd7d62a48a18739f6b3db0801ac",
	"https://i.groupme.com/640x612.gif.79d5b648e1b043edafebc24c3a01250e",
	"https://i.groupme.com/2532x4485.jpeg.dfa35d7a1c684acc8ea6a4a65d874830",
	"https://i.groupme.com/1170x821.jpeg.f1ed3520ba2e4781a98ac3b3f2fe6636",
	"https://i.groupme.com/1920x1280.jpeg.574499bcd88b43a39b6c2a49aaecb30d",
	"https://i.groupme.com/2000x1500.jpeg.174deeccab4a406ea4498f0254a60945",
	"https://i.groupme.com/195x229.gif.f8d72135257a4db18cef44f487ab4186",
	"https://i.groupme.com/480x200.gif.38c3f06228b445b694e0f87ca3220d55",
	"https://i.groupme.com/2268x4032.jpeg.dc60909e71c241709330a43abcfe8b27",
	"https://i.groupme.com/3024x4032.jpeg.f3654b5d693341399af5512c57c85bef",
	"https://i.groupme.com/2532x4494.jpeg.807f615711ae4d429c22bc29a7d131b4",
	"https://i.groupme.com/498x498.gif.9ba90b8b11f94d3dbf50370e1176971c",
	"https://i.groupme.com/3024x4032.jpeg.68b4bb5e41904268ba3f4461b4c8b307",
	"https://i.groupme.com/3024x4032.jpeg.6ac82ac8e5c946ac84b6b0e400fdf75c",
	"https://i.groupme.com/1280x720.jpeg.45cf746afbc140c4966e9975216b836e",
	"https://i.groupme.com/828x1083.jpeg.f8330161bb074bf2a2730b41ef6037a9",
	"https://i.groupme.com/2268x4032.jpeg.b5ea55bd76064a36b7933ffc773194b2",
	"https://i.groupme.com/575x800.png.7c7844c11f61465a8714575f66c714fe",
	"https://i.groupme.com/1334x2372.jpeg.1c399ed3f89f4ad382b13cb485f4efcd",
	"https://i.groupme.com/2259x3048.jpeg.3c8674314f4f4aeeac095238ab5fe65c"
]

function respond() {
	var request = JSON.parse(this.req.chunks[0]);
	console.log(request);

	if (request.text && Math.random() > 0.9) {
		this.res.writeHead(200);
		postMessage();
		this.res.end();
	}
}

function getRandomIndex(arr) {
	return Math.floor(Math.random() * arr.length);
}

function postMessage() {
	body.text = quotes[getRandomIndex(quotes)];
	body.attachments[0].url = imageURLs[getRandomIndex(imageURLs)];

	console.log(body);
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

exports.respond = respond;

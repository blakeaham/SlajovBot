var Twit = require('twit')


var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config);
console.log('the bot is starting');
/*
var stream = T.stream('user');
console.log('follow stream is starting...');
*/
var allTweets = 
	['You will never be free from ideology',
	'This garbage can is called ideology.',
	'99% of twitter is used to reinforce ideology',
	'We feel free because we lack the very language to articulate our unfreedom.',
	'the moment he visits the lavatory after the heated discussion, he is again knee-deep in ideology.',
	'Come on, I have no problem violating my insights in practice.',
	'And unfortunately capitalism is indestructible.',
	'I claim the power of ideology.',
	'The one measure of true love is: you can insult the other',
	'Love feels like a great misfortune, a monstrous parasite, a permanent state of emergency that ruins all small pleasures.',
	'A spectre is haunting Western academia, the spectre of the Cartesian subject.',
	'As a Marxist, let me add: if anyone tells you Lacan is difficult, this is class propaganda by the enemy.',
	'I hate these sudo-left, butiful soul academics. They r doin wat they r; aware that some1 else do the job for them.',
	'With Lenin it was always a substantial commitment.',
	'My whole economy of writing is in fact based on an obsessional ritual 2 avoid the actual act of writing.',
	'Hitler did not ‘have balls’ to really change things; he didnt rly act, all his actions were fundamentally reactions,'];
	
var hashTags = 
	['#ideology','#fantasy','#SublimeObjects','#GarbageCan','#Communista',
	'#AndSoOn','#StalinJokes','#PureIdeology', '- <3 ZizBot','#TugsShirt','#Sniff']



/*
stream.on('follow', followed);  //Could I change this to stream.on('follow', setTimeout(followed, 1000*30));  Would that make it wait 30s to reply?

function followed(eventMsg) {
	console.log('follow event detected...');
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	var chooseTag = Math.floor(Math.random() * hashTags.length);
	tweetThanks(".@" + screenName + " u r free from ideology " + chooseTag);
}

function tweetThanks(text) {
	var tweet1 = {
		status: text
	}

	T.post('statuses/update', tweet1, tweeted);

	function tweeted(err, data, response) {
		if (err) {
			console.log(data);
		} else {
			console.log("DONE!");
		}
	}
}

*/

/*
 tweetIt();
 setInterval(tweetIt, 1000*60*140);
function tweetIt() {
	console.log('Tweeting interval...')

	// var choose = Math.floor(Math.random() * allTweets.length);
	// var chooseTag = Math.floor(Math.random() * hashTags.length);
	var tweet = {
		status: "This is me #FindMeBlake"
	}
	// {
		// status: allTweets[choose] + ' ' + hashTags[chooseTag]

	// }

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if (err) {
			console.log(err);
		} else {
			console.log("DONE! I tweeted" + tweet);
		}
	}
}

*/
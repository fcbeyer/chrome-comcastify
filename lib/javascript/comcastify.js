function buildMemeList() {
	var supportedMemes = ["notsureifserious.jpg","citationneeded.jpg","quizzicaldog.jpg","whynotboth.jpg","youdontsay.jpg","stoppedreadingthere.jpg",
							"thisiswhywecanthavenicethings.jpg","wtfisthisshit.jpg","wat.jpg","fistofangrygod.jpg","icame.jpg","thisisdog.jpg",
							"iseewhatyoudidthere.jpg","howaboutno.jpg","wtfamIreading.jpg","thatsthejoke.jpg","no1curr.gif","brilliant.jpg","thisisanoutrage.jpg",
							"wecanjustignoreher.jpg","golfclap.gif","whothehellcares.jpg","imokaywiththis.jpg"];
	return supportedMemes.map(function(meme) {return "(" + meme + ")";}).join("|");
}

function getImgUrl(memeMatch){
	return '<img src=' + chrome.extension.getURL("lib/images/memes/"+memeMatch)  + ' class="image memer-image">';
}

//convert memes
var memeList = "|" + buildMemeList() + "|";
var memeRegExp = new RegExp("\b" + memeList + "\b",'gi');
$("body *").replaceText(memeRegExp, getImgUrl);
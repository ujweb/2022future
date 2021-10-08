firebase.initializeApp({
	databaseURL: "https://future-57c0b-default-rtdb.firebaseio.com/"
});
const database = firebase.database();

let q1Data = [];
let q2Data = [];
let q3Data = [];

// let q1Data = new Array(8);
// let q2Data = new Array(8);
// let q3Data = new Array(8);

database.ref('/').once('value', e => {
	let initData = e.val();
	let initArrayQ1 = initData.q1;
	let initArrayQ2 = initData.q2;
	let initArrayQ3 = initData.q3;

	for (const [key, value] of Object.entries(initArrayQ1)) {
		q1Data.push({ key: key, value: value });
	}
});

$('form button').on('click', function(e){
	let name = $(this).siblings().children().children('input:checked').attr('name'),
		val = $(this).siblings().children().children('input:checked').val(),
		path = name + "/" + val;
	database.ref(path).once('value', e => {
		let data = e.val();
		database.ref(path).set(data+1);
	});
});

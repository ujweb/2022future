firebase.initializeApp({
	databaseURL: "https://future-57c0b-default-rtdb.firebaseio.com/"
});
const database = firebase.database();

let q1Data = [];
let q2Data = [];
let q3Data = [];
let sizes = [38, 30, 24, 24, 20, 18, 14, 14];
let q1Check = false;
let q2Check = false;
let q3Check = false;

database.ref("/q1").orderByValue().once('value', function (snapshot) {
	snapshot.forEach(function (item) {
		q1Data.unshift({ text: item.key, value: item.val()});
	})
	for (let i = 0; i < q1Data.length; i++) {
		q1Data[i].size = sizes[i]
	}
	q1Check = true;
});
database.ref("/q2").orderByValue().once('value', function (snapshot) {
	snapshot.forEach(function (item) {
		q2Data.unshift({ text: item.key, value: item.val()});
	})
	for (let i = 0; i < q2Data.length; i++) {
		q2Data[i].size = sizes[i]
	}
	q2Check = true;
});
database.ref("/q3").orderByValue().once('value', function (snapshot) {
	snapshot.forEach(function (item) {
		q3Data.unshift({ text: item.key, value: item.val()});
	})
	for (let i = 0; i < q3Data.length; i++) {
		q3Data[i].size = sizes[i]
	}
	q3Check = true;
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

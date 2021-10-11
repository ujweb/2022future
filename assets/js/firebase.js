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

database.ref("/").once('value', function (snapshot) {
	var dataInit1 = snapshot.val().q1;
	var dataInit2 = snapshot.val().q2;
	var dataInit3 = snapshot.val().q3;
	var data1 = Object.entries(dataInit1).sort(([,a],[,b]) => b-a).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
	var data2 = Object.entries(dataInit2).sort(([,a],[,b]) => b-a).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
	var data3 = Object.entries(dataInit3).sort(([,a],[,b]) => b-a).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
	for (const [key, value] of Object.entries(data1)) {
		q1Data.push({ text: key, value: value });
	}
	for (let i = 0; i < q1Data.length; i++) {
		q1Data[i].size = sizes[i]
	}
	console.log(q1Data);
	q1Check = true;

	for (const [key, value] of Object.entries(data2)) {
		q2Data.push({ text: key, value: value });
	}
	for (let i = 0; i < q2Data.length; i++) {
		q2Data[i].size = sizes[i]
	}
	q2Check = true;

	for (const [key, value] of Object.entries(data3)) {
		q3Data.push({ text: key, value: value });
	}
	for (let i = 0; i < q3Data.length; i++) {
		q3Data[i].size = sizes[i]
	}
	q3Check = true;
});

if ( localStorage.getItem('2022future-q1') == null ) {
	$('.message-issue-1 button.btn').addClass('available');
} else {
	let val = localStorage.getItem('2022future-q1');
	console.log(val);
	$('.message-issue-1 input, .message-issue-1 button.btn').attr('disabled', 'disabled');
	$('.message-issue-1 input[value="' + val + '"]').attr('checked', 'checked');
}
if ( localStorage.getItem('2022future-q2') == null ) {
	$('.message-issue-2 button.btn').addClass('available');
} else {
	let val = localStorage.getItem('2022future-q2');
	console.log(val);
	$('.message-issue-2 input, .message-issue-2 button.btn').attr('disabled', 'disabled');
	$('.message-issue-2 input[value="' + val + '"]').attr('checked', 'checked');
}
if ( localStorage.getItem('2022future-q3') == null ) {
	$('.message-issue-3 button.btn').addClass('available');
} else {
	let val = localStorage.getItem('2022future-q3');
	console.log(val);
	$('.message-issue-3 input, .message-issue-3 button.btn').attr('disabled', 'disabled');
	$('.message-issue-3 input[value="' + val + '"]').attr('checked', 'checked');
}

$('form button.available').on('click', function(e){
	let name = $(this).siblings().children().children('input:checked').attr('name'),
		val = $(this).siblings().children().children('input:checked').val(),
		path = name + "/" + val;
	console.log(name, val, path);
	localStorage.setItem(`2022future-${name}`, val);
	$(this).siblings().children('label').children('input').attr('disabled', 'disabled');
	$(this).attr('disabled', 'disabled');
	$('.message').fadeOut();
	$('.black, body').removeClass('opened');
	database.ref(path).once('value', e => {
		let data = e.val();
		database.ref(path).set(data+1);
	});
});

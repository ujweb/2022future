let nextYear = moment.tz('2022-01-01 00:00', 'Asia/Taipei');
$('body').countdown(nextYear.toDate(), {elapse: true}).on('update.countdown', function(event) {
    let str = '';
    if (event.elapsed) {
        console.log(event.elapsed);
        str = `<a href="#!" target="_blank" rel="noopener noreferrer">
            <img class="desktop" src="https://dummyimage.com/1600x800/666/fff" alt="">
            <img class="mobile" src="https://dummyimage.com/640x800/666/fff" alt="">
        </a>`;
    } else {
        console.log(event.elapsed);
        str = `<a href="#!" target="_blank" rel="noopener noreferrer">
            <img class="desktop" src="https://dummyimage.com/1600x800/aaa/fff" alt="">
            <img class="mobile" src="https://dummyimage.com/640x800/aaa/fff" alt="">
        </a>`;
    }
    $('#message-slot').html(str);
});

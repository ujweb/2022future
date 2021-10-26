var keys = [
    {
        "keys": "逆境領導",
        "img": "adversity.jpg",
        "hashtag": ["領袖特質", "打造韌性", "浪琴表"],
        "apple": "https://reurl.cc/GdbRzd",
        "google": "https://reurl.cc/Q76k80",
        "article": ""
    },
    {
        "keys": "數位創新",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "省電模式",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "重啟",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "未來人才",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "智慧聚落",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "疫後K經濟",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "低利對策",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "智慧急診",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "永續佈局",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "美中台關係",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "未來建築",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keys": "2021關鍵字",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    }
]

var imgCard = "";
for (var k = 0; k < keys.length; k++) {
    if (keys[k]["img"] != '') {
        imgCard += '<div class="card-item"><img src="assets/images/keyword/';
        imgCard += keys[k]["img"];
        imgCard += '" alt="';
        imgCard += keys[k]["keys"];
        imgCard += '"><div class="card-text"><h2 class="my-0">';
        imgCard += keys[k]["keys"];
        imgCard += '</h2><ul>';
        for (var m = 0; m < keys[k]["hashtag"].length; m++) {
            imgCard += '<li>#' + keys[k]["hashtag"][m] + '</li>';
        }
        imgCard += '</ul>';
        if ( keys[k]["apple"] != '' ) {
            imgCard += '<a href="' + keys[k]["apple"] + '" target="_blank" class="btn btn--white mt-10">Apple Podcast</a>';
        }
        if ( keys[k]["google"] != '' ) {
            imgCard += '<a href="' + keys[k]["google"] + '" target="_blank" class="btn btn--white mt-10">Google Podcast</a>';
        }
        if ( keys[k]["article"] != '' ) {
            imgCard += '<a href="' + keys[k]["article"] + '" target="_blank" class="btn btn--white mt-10">相關報導</a>';
        }
        imgCard += '</div></div>';
    } else {
        imgCard += '<div class="card-item"><div class="card-text"><h2 class="my-0">' + keys[k]["keys"] + '</h2>';
        imgCard += '<div class="h5 mt-10 mb-0">每週四更新<br/>敬請期待</div></div></div>';
    }
}
$('.card-list').html(imgCard);

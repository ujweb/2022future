var keys = [
    {
        "keyEng": "From Covid to ?",
        "keyZH": "疫後大未來",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keyEng": "Blended World",
        "keyZH": "混成世界",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keyEng": "DeFi Economy",
        "keyZH": "去中心化經濟",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keyEng": "Future Talents",
        "keyZH": "創新人才",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keyEng": "Net Zero",
        "keyZH": "淨零碳排",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keyEng": ":15 City",
        "keyZH": "15 分鐘城市",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keyEng": "Metaverse",
        "keyZH": "元宇宙",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keyEng": "Cyber Security",
        "keyZH": "網路安全",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keyEng": "Energy Storage",
        "keyZH": "電動與能",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keyEng": "Retron & Crispr",
        "keyZH": "基因編輯",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keyEng": "Just in Case",
        "keyZH": "管理",
        "img": "",
        "hashtag": ["", "", ""],
        "apple": "",
        "google": "",
        "article": ""
    },
    {
        "keyEng": "Designing Life",
        "keyZH": "重新設計生活",
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
        imgCard += keys[k]["keyZH"];
        imgCard += '"><div class="card-text"><div class="h5 my-0">' + keys[k]["keyEng"] + '</div><h2 class="my-0">';
        imgCard += keys[k]["keyZH"];
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
        imgCard += '<div class="card-item"><div class="card-text"><div class="h5 my-0">' + keys[k]["keyEng"] + '</div><h2 class="my-0">' + keys[k]["keyZH"] + '</h2>';
        imgCard += '<div class="h5 mt-10 mb-0">每週三下午更新<br/>敬請期待</div></div></div>';
    }
}
$('.card-list').html(imgCard);

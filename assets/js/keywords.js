var keys = [
    {
        "keyEng": "From Covid to ?",
        "keyZH": "疫後大未來",
        "img": "covid.jpg",
        "hashtag": ["2022", "趨勢預測"],
        "podcast": "https://open.firstory.me/story/ckv9c00qi52vd0981wxsdwdsa/platforms",
        "article": ""
    },
    {
        "keyEng": "Blended World",
        "keyZH": "混成世界",
        "img": "",
        "hashtag": ["", "", ""],
        "podcast": "",
        "article": ""
    },
    {
        "keyEng": "DeFi Economy",
        "keyZH": "去中心化經濟",
        "img": "",
        "hashtag": ["", "", ""],
        "podcast": "",
        "article": ""
    },
    {
        "keyEng": "Future Talents",
        "keyZH": "創新人才",
        "img": "",
        "hashtag": ["", "", ""],
        "podcast": "",
        "article": ""
    },
    {
        "keyEng": "Net Zero",
        "keyZH": "淨零碳排",
        "img": "",
        "hashtag": ["", "", ""],
        "podcast": "",
        "article": ""
    },
    {
        "keyEng": ":15 City",
        "keyZH": "15 分鐘城市",
        "img": "",
        "hashtag": ["", "", ""],
        "podcast": "",
        "article": ""
    },
    {
        "keyEng": "Metaverse",
        "keyZH": "元宇宙",
        "img": "",
        "hashtag": ["", "", ""],
        "podcast": "",
        "article": ""
    },
    {
        "keyEng": "Cyber Security",
        "keyZH": "網路安全",
        "img": "",
        "hashtag": ["", "", ""],
        "podcast": "",
        "article": ""
    },
    {
        "keyEng": "Energy Storage",
        "keyZH": "電動與能源",
        "img": "",
        "hashtag": ["", "", ""],
        "podcast": "",
        "article": ""
    },
    {
        "keyEng": "Retron & Crispr",
        "keyZH": "基因編輯",
        "img": "",
        "hashtag": ["", "", ""],
        "podcast": "",
        "article": ""
    },
    {
        "keyEng": "Just in Case",
        "keyZH": "管理",
        "img": "",
        "hashtag": ["", "", ""],
        "podcast": "",
        "article": ""
    },
    {
        "keyEng": "Designing Life",
        "keyZH": "重新設計生活",
        "img": "",
        "hashtag": ["", "", ""],
        "podcast": "",
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
        imgCard += '"><div class="card-text"><div class="h5 mt-0 mb-5">' + keys[k]["keyEng"] + '</div><h2 class="my-0">';
        imgCard += keys[k]["keyZH"];
        imgCard += '</h2><ul>';
        for (var m = 0; m < keys[k]["hashtag"].length; m++) {
            imgCard += '<li>#' + keys[k]["hashtag"][m] + '</li>';
        }
        imgCard += '</ul>';
        if ( keys[k]["podcast"] != '' ) {
            imgCard += '<a href="' + keys[k]["podcast"] + '" target="_blank" class="btn btn--white mt-20">Podcast</a>';
        }
        if ( keys[k]["article"] != '' ) {
            imgCard += '<a href="' + keys[k]["article"] + '" target="_blank" class="btn btn--white mt-10">相關報導</a>';
        }
        imgCard += '</div></div>';
    } else {
        imgCard += '<div class="card-item"><div class="card-text"><div class="h5 mt-0 mb-5">' + keys[k]["keyEng"] + '</div><h2 class="my-0">' + keys[k]["keyZH"] + '</h2>';
        imgCard += '<div class="h5 mt-10 mb-0">每週三下午更新<br/>敬請期待</div></div></div>';
    }
}
$('.card-list').html(imgCard);

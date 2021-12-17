var keys = [
    {
        "keyEng": "Post-pandemic Trend",
        "keyZH": "疫後趨勢",
        "img": "covid.jpg",
        "hashtag": ["2022", "趨勢預測"],
        "podcast": "https://open.firstory.me/story/ckv9c00qi52vd0981wxsdwdsa",
        "article": ""
    },
    {
        "keyEng": "N-dimensional Space",
        "keyZH": "N 度空間",
        "img": "n-space.jpg",
        "hashtag": ["人與空間", "空間重組"],
        "podcast": "https://open.firstory.me/story/ckvjgod0h051i0923pk43wlia",
        "article": ""
    },
    {
        "keyEng": "15-Minute City",
        "keyZH": "15 分鐘城市",
        "img": "futurecity.jpg",
        "hashtag": ["都市規劃", "未來城市"],
        "podcast": "https://open.firstory.me/story/ckvtcb6f2beik0848m1igbe18",
        "article": ""
    },
    {
        "keyEng": "Metaverse",
        "keyZH": "元宇宙",
        "img": "metaverse.jpg",
        "hashtag": ["去中心化", "MR", "XR"],
        "podcast": "https://open.firstory.me/story/ckw3c1p6itgf80884qfr50ju7",
        "article": ""
    },
    {
        "keyEng": "Thematic Investing",
        "keyZH": "趨勢投資",
        "img": "electric-car.jpg",
        "hashtag": ["未來通訊", "智慧醫療"],
        "podcast": "https://open.firstory.me/story/ckwdcas9269yb09206ewgiat8",
        "article": ""
    },
    {
        "keyEng": "Blended World",
        "keyZH": "混成世界",
        "img": "wfh.jpg",
        "hashtag": ["混成創新", "市場風險"],
        "podcast": "https://open.firstory.me/story/ckwnozqfs0i0j0952elhhg1bj",
        "article": ""
    },
    {
        "keyEng": "Zero-waste Consumption",
        "keyZH": "零廢消費",
        "img": "zero-waste.jpg",
        "hashtag": ["循環經濟", "零廢棄"],
        "podcast": "https://open.firstory.me/story/ckwxp124w2s5208715p21xaqc",
        "article": ""
    },
    {
        "keyEng": "Rethink the meaning of Capitalism",
        "keyZH": "重塑資本主義",
        "img": "esg.jpg",
        "hashtag": ["ESG", "永續商模"],
        "podcast": "https://open.firstory.me/story/ckx820d1q01fr0844ybmiijdx",
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
        imgCard += '<div class="h5 mt-10 mb-0">每週四下午更新<br/>敬請期待</div></div></div>';
    }
}
$('.card-list').html(imgCard);

window.onload = function() {
    var words = [];
    words.push({word : "sandwich"});
    words.push({word : "offering"});
    words.push({word : "in order to"});
    words.push({word : "demand"});
    words.push({word : "environmental"});
    words.push({word : "deteriorate"});
    words.push({word : "qualify"});
    words.push({word : "aim at"});
    words.push({word : "pollutant"});
    words.push({word : "atmosphere"});
    words.push({word : "regulation"});
    words.push({word : "revise"});
    words.push({word : "reflect"});
    words.push({word : "labor"});
    words.push({word : "frequent"});
    words.push({word : "standard"});
    words.push({word : "withstand"});
    words.push({word : "largely"});
    words.push({word : "enhance"});
    words.push({word : "population"});
    
    var means = [];
    means.push({word : "sandwich", mean : "샌드위치"});
    means.push({word : "offering", mean : "제공된 것"});
    means.push({word : "offering", mean : "제물"});
    means.push({word : "offering", mean : "공물"});
    means.push({word : "in order to", mean : "~를 위해"});
    means.push({word : "demand", mean : "수요"});
    means.push({word : "environmental", mean : "환경의"});
    means.push({word : "deteriorate", mean : "악화되다"});
    means.push({word : "qualify", mean : "자격을 주다"});
    means.push({word : "qualify", mean : "자격을 얻다"});
    means.push({word : "aim at", mean : "~를 겨냥한"});
    means.push({word : "pollutant", mean : "오염원"});
    means.push({word : "atmosphere", mean : "대기"});
    means.push({word : "regulation", mean : "규정"});
    means.push({word : "regulation", mean : "통제"});
    means.push({word : "regulation", mean : "단속"});
    means.push({word : "regulation", mean : "통제된"});
    means.push({word : "revise", mean : "변경하다"});
    means.push({word : "reflect", mean : "반사하다"});
    means.push({word : "reflect", mean : "나타내다"});
    means.push({word : "labor", mean : "노동"});
    means.push({word : "labor", mean : "노동자"});
    means.push({word : "frequent", mean : "빈번한"});
    means.push({word : "frequent", mean : "자주 다니다"});
    means.push({word : "standard", mean : "기준"});
    means.push({word : "standard", mean : "일반적인"});
    means.push({word : "standard", mean : "표준 규격에 맞춘"});
    means.push({word : "withstand", mean : "견뎌내다"});
    means.push({word : "largely", mean : "대부분"});
    means.push({word : "largely", mean : "주로"});
    means.push({word : "enhance", mean : "강화하다"});
    means.push({word : "population", mean : "인구"});
    
    var chooseCnt = 5;
    // 랜덤함수
    function fnRefresh() {
        var chooseWords = [];
        
            while (chooseWords.length < chooseCnt) {
            var ran = parseInt(Math.random() * words.length);
            var word = words[ran];
            
            // word배열에 있으면 chooseWords배열에 담기
            if( chooseWords.indexOf(word) < 0) {
                chooseWords.push(word);
            }
        }
        
        var html = "";
        for( var i = 0; i < chooseCnt; i++ ) {
            html += '<article class="wordContainer">';
            html += '<div class="word"><span>' + chooseWords[i].word + '</span></div>';
            html += '<div class="mean"><span>' + means.filter((o)=>o.word == chooseWords[i].word).reduce((a,b)=>({
                "mean": a.mean + ", " + b.mean
            })).mean + '</span></div>';
            html += '</article>';
        }
        document.getElementsByClassName("words")[0].innerHTML = html;
        
    }
    
    fnRefresh();
    document.getElementById("refreshButton").onclick = fnRefresh;
};



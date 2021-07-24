function prefecture(spot) {
    var message = "";
    var choice = ['群馬県', '栃木県', '茨城県', '埼玉県', '東京都', '神奈川県', '千葉県']

    if (spot == 0) {
        message = "1位：伊香保神社, 2位：谷川岳, 3位：榛名湖";
    } else if (spot == 1) {
        message = "1位：日光東照宮, 2位：那須ハイランドパーク, 3位：鬼怒川温泉";
    } else if (spot == 2) {
        message = "1位：牛久大仏, 2位：鹿島神社, 3位：筑波山";
    } else if (spot == 3) {
        message = "1位：西武園ゆうえんち, 2位：羊山公園, 3位：川越氷川神社";
    } else if (spot == 4) {
        message = "1位：東京スカイツリー, 2位：上野動物園, 3位：サンリオピューロランド";
    } else if (spot == 5) {
        message = "1位：横浜中華街, 2位：横浜・八景島シーパラダイス, 3位：ららぽーと横浜";
    } else if (spot == 6) {
        message = "1位：三井アウトレットパーク木更津, 2位：幕張メッセ, 3位：酒々井プレミアム・アウトレット";
    } 

    alert(choice[spot] + 'のおすすめスポットは、' + message + 'です。');

}


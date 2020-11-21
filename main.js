var mode_val = -1;//モード格納用　0:ランダム，1:マーク，2:数字１，3:数字２
var ans = [-1, -1, -1];// [0]:SUIT,  [1][2]: 00~11までで 0 ~ 15を表す
var show_text = "";//出力するテキストリスト
var tap_cnt = 0;// 連続タップ回数

var numberX, numberY;		// 数値表示部分のDOM取得用					
var SWIPE_DIR = {RIGHT: 0, DOWN: 1, LEFT: 2, UP: 3};//→ ↓ ← ↑
var SUIT = { 0: '♤' , 1:'♡' , 2: '♢', 3: '♧'};//♤  ♡  ♢   ♧
var swipe_dir = -1;

  

/*
 * スワイプイベント設定
 */
function setSwipe(elem) {
	let t = document.querySelector(elem);
	let startX = -1, startY = -1, endX = -1, endY = -1;		// タッチ開始(x, y), タッチ終了(x, y);
	const MIN_DIST = 30;	// スワイプを感知する最低距離（ピクセル単位）
	// const CHMOD_RANGE = 70;//モード切替をする範囲
	const CHMOD_THRESH = 3;//CHMOD_THRESH回左上をタップするとモードチェンジ
	// タッチ開始時： xy座標を取得
	t.addEventListener("touchstart", function (e) {
		e.preventDefault();
		startX = e.touches[0].pageX;
		startY = e.touches[0].pageY;
		endX = startX;
		endY = startY;
	});

	// スワイプ中： xy座標を取得
	t.addEventListener("touchmove", function (e) {
		e.preventDefault();
		endX = e.changedTouches[0].pageX;
		endY = e.changedTouches[0].pageY;
	});

	// タッチ終了時： スワイプした距離から左右どちらにスワイプしたかを判定する/距離が短い場合何もしない
	t.addEventListener("touchend", function (e) {

		// スワイプorタップ判定
		if(Math.abs(startX - endX) < MIN_DIST){
			if(Math.abs(startY - endY) < MIN_DIST){
				tap_cnt++;//連続タップ回数
				if (tap_cnt >= CHMOD_THRESH){ mode_val = 1;}
				
				numberY.innerHTML = " startX: " + startX.toFixed(2) + "      startY: " + startY.toFixed(2) + "</br> endX: " + endX.toFixed(2) + "         endY: " + endY.toFixed(2);
				numberX.innerHTML = " mode_val: "+mode_val + " tap_cnt: " + tap_cnt + " show_text: " + show_text ;//+ " startX: " + startX + " startY: " + startY + " endX: " + endX + " endY: " + endY;
				return;//タップの場合は終了
			}
		}
		
		//以下スワイプの場合の処理
		tap_cnt = 0;
		
		//スワイプ処理 // 左上(0, 0),  右下(INF, INF)
		if (Math.abs(endX - startX) >= Math.abs(endY - startY)) {
		  if (endX - startX> 0) { swipe_dir = SWIPE_DIR.RIGHT;}		// 左から右にスワイプ
		  else if (endX - startX < 0) {swipe_dir = SWIPE_DIR.LEFT;}	// 右から左にスワイプ
		}
		else {
		  if (endY - startY > 0) {swipe_dir = SWIPE_DIR.DOWN;}//上から下にスワイプ
		  else if (endY - startY < 0) {swipe_dir = SWIPE_DIR.UP}//下から上にスワイプ
		}

		card_cal();
		if(mode_val > 0) mode_val = (mode_val+1) % 5;
		
		numberY.innerHTML = " startX: " + startX.toFixed(2) + "      startY: " + startY.toFixed(2) + "</br> endX: " + endX.toFixed(2) + "         endY: " + endY.toFixed(2);
		numberX.innerHTML = " mode_val: "+mode_val + " tap_cnt: " + tap_cnt + " show_text: " + show_text ;//+ " startX: " + startX + " startY: " + startY + " endX: " + endX + " endY: " + endY;

	});

}


/*
 * 数値を画面に表示する
 */
function setNumber() {//numberX.innerHTML = " mode_val: "+mode_val + " tap_cnt: " + tap_cnt + " show_text: " + show_text ;//+ " startX: " + startX + " startY: " + startY + " endX: " + endX + " endY: " + endY;
}

/*
 * 起動時の処理
 */
window.addEventListener("load", function () {
	// 数値表示部分のDOM取得
	numberX = document.getElementById("numberX");
	numberY = document.getElementById("numberY");
	numberZ = document.getElementById("numberZ");

	// 数値を画面に表示
	numberX.innerHTML = " mode_val: "+mode_val + " tap_cnt: " + tap_cnt + " show_text: " + show_text ;//+ " startX: " + startX + " startY: " + startY + " endX: " + endX + " endY: " + endY;


	// スワイプイベント設定
	setSwipe("#contents");
});
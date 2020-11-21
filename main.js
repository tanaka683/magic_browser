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
		swipe_cal(startX, startY, endX, endY);
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
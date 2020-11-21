var mode_val;//モード格納用　0:ランダム，1:マーク，2:数字１，3:数字２
var show_text;//出力するテキストリスト
var mode_cnt;
// var swipe_no;				// 数値格納用
var numberX;		// 数値表示部分のDOM取得用						
var numberY;		// 数値表示部分のDOM取得用					
var SWIPE_DIR = {RIGHT: 0, DOWN: 1, LEFT: 2, UP: 3};//→ ↓ ← ↑
// var SUIT = { SPADE: 0, HEART: 1, DIA: 2, CLOVER: 3};//♤  ♡  ♢   ♧
var SUIT = { 0: '♤' , 1:'♡' , 2: '♢', 3: '♧'};//♤  ♡  ♢   ♧
var swipe_dir;
/*
 * スワイプイベント設定
 */
function setSwipe(elem) {
	let t = document.querySelector(elem);
	let startX;		// タッチ開始 x座標
	let startY;		// タッチ開始 y座標
	let moveX;	// スワイプ中の x座標
	let moveY;	// スワイプ中の y座標
	const MIN_DIST = 30;	// スワイプを感知する最低距離（ピクセル単位）
	const CHMOD_RANGE = 50;//モード切替をする範囲
	const CHMOD_THRESH = 3;//mode_C回左上をタップするとモードチェンジ
	// タッチ開始時： xy座標を取得
	t.addEventListener("touchstart", function (e) {
		e.preventDefault();
		startX = e.touches[0].pageX;
		startY = e.touches[0].pageY;
	});

	// スワイプ中： xy座標を取得
	t.addEventListener("touchmove", function (e) {
		e.preventDefault();
		moveX = e.changedTouches[0].pageX;
		moveY = e.changedTouches[0].pageY;
	});

	// タッチ終了時： スワイプした距離から左右どちらにスワイプしたかを判定する/距離が短い場合何もしない
	t.addEventListener("touchend", function (e) {
		//左上をタップした回数をカウント
		if (startX < CHMOD_RANGE && moveX < CHMOD_RANGE
			&& startY < CHMOD_RANGE && moveY < CHMOD_RANGE) {
			mode_cnt++;
		}
		else { mode_cnt = 0; }
		//左上タップ回数がmode_C以上ならmodeチェンジ
		if (mode_cnt >= CHMOD_THRESH && mode_val == 0) { mode_val = 1; }

		// numberX.innerHTML = "X: " + startX;
		// numberY.innerHTML = "Y: " + startY;
		//スワイプ処理
		if (Math.abs(startX - moveX) >= Math.abs(startY - moveY)) {
			if (startX - moveX > MIN_DIST) {		// 右から左にスワイプ
				// swipe_no=3;
				// swipe_no='♢';
				swipe_dir = SWIPE_DIR.LEFT;
				model_cal(swipe_dir);
			}
			else if (startX - moveX < -1 * MIN_DIST) {	// 左から右にスワイプ
				// swipe_no=1;
				// swipe_no='♤';
				swipe_dir = SWIPE_DIR.RIGHT;
				model_cal(swipe_dir);
			}
		}
		else {
			if (startY - moveY > MIN_DIST) {//上から下にスワイプ
				// swipe_no=2;
				// swipe_no = '♡';
				swipe_dir = SWIPE_DIR.DOWN
				model_cal(swipe_dir);
			}
			else if (startY - moveY < -1 * MIN_DIST) {//下から上にスワイプ
				// swipe_no=0;
				// swipe_no = '♧';
				swipe_dir = SWIPE_DIR.UP
				model_cal(swipe_dir);
			}
		}
		setNumber();
	});
	numberY.innerHTML = " startX: " + startX + "      startY: " + startY + "</br> moveX: " + moveX + "         moveY: " + moveY;
}


/*
 * 数値を画面に表示する
 */
function setNumber() {
	// numberX.innerHTML = "swipe"+swipe_no;
	// numberY.innerHTML = "mode"+mode_cnt;
	// numberZ.innerHTML =  "text"+show_text;
	numberX.innerHTML = " 1swipe_no: "+swipe_no + " mode_cnt: " + mode_cnt + " show_text: " + show_text ;//+ " startX: " + startX + " startY: " + startY + " moveX: " + moveX + " moveY: " + moveY;
	
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
	mode_val = 0;
	mode_cnt = 0;
	swipe_no = 0;
	show_text="♡"
	setNumber();

	// スワイプイベント設定
	setSwipe("#contents");
});
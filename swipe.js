var mode_val;//モード格納用　0:ランダム，1:マーク，2:数字１，3:数字２
var show_text;//出力するテキストリスト
var no;				// 数値格納用
var number;		// 数値表示部分のDOM取得用						

/*
 * スワイプイベント設定
 */
function setSwipe(elem) {
	let t = document.querySelector(elem);
	let startX;		// タッチ開始 x座標
	let startY;		// タッチ開始 y座標
	let moveX;	// スワイプ中の x座標
	let moveY;	// スワイプ中の y座標
	let dist = 30;	// スワイプを感知する最低距離（ピクセル単位）

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

numberX.innerHTML="X: "+startX;
numberY.innerHTML="Y: "+startY;
		// if (Math.abs(startX - moveX) >= Math.abs(startY - moveY)) {
		// 	if (startX - moveX > dist) {		// 右から左にスワイプ
		// 		previous();
		// 	}
		// 	else if (startX - moveX < -1 * dist) {	// 左から右にスワイプ
		// 		next();
		// 	}
		// }
		// else {
		// 	if (startY - moveY > dist) {//上から下にスワイプ

		// 	}
		// 	else if (startY - moveY < -1 * dist) {//下から上にスワイプ

		// 	}
		// }
	});
}

/*
 * 次の番号を表示
 */
function next() {
	no++;
	setNumber();
}

/*
 * 前の番号を表示
 */
function previous() {
	no--;
	setNumber();
}

/*
 * 数値を画面に表示する
 */
function setNumber() {
	numberX.innerHTML = no;
	numberY.innerHTML=no;
}

/*
 * 起動時の処理
 */
window.addEventListener("load", function () {
	// 数値表示部分のDOM取得
	numberX = document.getElementById("numberX");
	numberY = document.getElementById("numberY");

	// 数値を画面に表示
	mode_val = 0;
	no = 0;
	setNumber();

	// スワイプイベント設定
	setSwipe("#contents");
});
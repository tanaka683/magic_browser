var mode_val;//モード格納用　0:ランダム，1:マーク，2:数字１，3:数字２
var show_text;//出力するテキストリスト
var mode_counter;
var swipe_no;				// 数値格納用
var numberX;		// 数値表示部分のDOM取得用						
var numberY;		// 数値表示部分のDOM取得用						
let print_list;
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
	let mode_dist = 50;//モード切替をする範囲
	let mode_C = 3;//mode_C回左上をタップするとモードチェンジ
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
		if (startX < mode_dist && moveX < mode_dist
			&& startY < mode_dist && moveY < mode_dist) {
			mode_counter++;
		}
		else { mode_counter = 0; }
		//左上タップ回数がmode_C以上ならmodeチェンジ
		if (mode_counter >= mode_C && mode_val == 0) { mode_val = 1; }

		// numberX.innerHTML = "X: " + startX;
		// numberY.innerHTML = "Y: " + startY;
		//スワイプ処理
		if (Math.abs(startX - moveX) >= Math.abs(startY - moveY)) {
			if (startX - moveX > dist) {		// 右から左にスワイプ
				swipe_no=1;
				model_cal(swipe_no);
			}
			else if (startX - moveX < -1 * dist) {	// 左から右にスワイプ
				swipe_no=1;
				model_cal(swipe_no);
			}
		}
		else {
			if (startY - moveY > dist) {//上から下にスワイプ
				swipe_no=2;
				model_cal(swipe_no);
			}
			else if (startY - moveY < -1 * dist) {//下から上にスワイプ
				swipe_no=0;
				model_cal(swipe_no);
			}
		}
		setNumber();
	});
}


/*
 * 数値を画面に表示する
 */
function setNumber() {
	numberX.innerHTML = "swipe"+swipe_no;
	numberY.innerHTML = "mode"+mode_counter;
	numberZ.innerHTML=  "text"+show_text;
	print_list.innerHTML = "1:";

}

/*
 * 起動時の処理
 */
window.addEventListener("load", function () {
	// 数値表示部分のDOM取得
	numberX = document.getElementById("numberX");
	numberY = document.getElementById("numberY");
	numberZ = document.getElementById("numberZ");
	print_list.innerHTML = document.getElementById("print_list")

	// 数値を画面に表示
	mode_val = 0;
	mode_counter = 0;
	swipe_no = 0;
	show_text="♡"
	setNumber();

	// スワイプイベント設定
	setSwipe("#contents");
});
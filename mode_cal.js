var mode_val=null;//モード格納用　0:ランダム，1:マーク，2:数字１，3:数字２
var show_text=null;//出力するテキストリスト
var SWIPE_DIR = null;//{RIGHT: 0, DOWN: 1, LEFT: 2, UP: 3};//→ ↓ ← ↑ // enumがうまく使えねえ
var SUIT = null; //{ 0: '♤' , 1:'♡' , 2: '♢', 3: '♧'}  { SPADE: 0, HEART: 1, DIA: 2, CLOVER: 3};//♤  ♡  ♢   ♧
function model_cal(swipe_dir){//引数はスート(マーク)
  // if(mode_val==0){
  //     show_text="♡1"
  // }
  // if(mode_val==1){
  //     if(swipe_num==0){show_text="♠"}
  // }
  // show_text = SUIT[swipe_dir];// enumがうまく使えねえ
  show_text = swipe_dir;

}
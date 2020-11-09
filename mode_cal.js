var mode_val=null;//モード格納用　0:ランダム，1:マーク，2:数字１，3:数字２
var show_text=null;//出力するテキストリスト

function model_cal(swipe_num){
  if(mode_val==0){
      show_text="♡1"
  }
  if(mode_val==1){
      if(swipe_num==0){show_text="♠"}
  }

}
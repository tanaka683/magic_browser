

function model_cal(swipe_dir){//引数はスート(マーク)
  // if(mode_val==0){
  //     show_text="♡1"
  // }
  // if(mode_val==1){
  //     if(swipe_num==0){show_text="♠"}
  // }
  // show_text = SUIT[swipe_dir];// enumがうまく使えねえ

  show_text = SUIT[swipe_dir];
  if(swipe_dir==SWIPE_DIR.LEFT){show_text="いえーい"+mode_val+" "+SUIT[swipe_dir];}
}
console.log("hello");

function draw() {
  //2Dコンテキストのオブジェクトを生成する
  var cvs = document.getElementById('image-blur');
  var ctx = cvs.getContext('2d');

  //画像オブジェクトを生成
  var img = new Image();
  img.src = "test.jpeg";

  //画像をcanvasに設定
  img.onload = function(){
    ctx.filter = 'blur(4px)';
    ctx.drawImage(img, 0, 0, 300, 300);  //400x300に縮小表示
  }
}
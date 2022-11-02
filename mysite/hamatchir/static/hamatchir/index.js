// FileAPIで画像を表示する
var inputFile = document.getElementById('img-file'); //inputタグと紐づけ
var image = document.getElementById('input-img')


//inputタグに画像が入力されると下のイベントを発火
inputFile.addEventListener('change', function(e){ 
    //console.log(e.target.files)

    //読み込んだファイルの表示
    //FileReaderクラスの使用
    let Reader = new FileReader(); //インスタンス化
    let file = e.target.files;
    Reader.readAsDataURL(file[0]); //Readerのresultプロパティに入力画像のローカルURLが読み込まれる
    Reader.onload = function(){
        image.src = Reader.result;
    }
}, false);

(function(){

    //要素の取得
    var elements = document.getElementsByClassName("drag-and-drop");

    //要素内のクリックされた位置を取得するグローバル（のような）変数
    var x;
    var y;

    //マウスが要素内で押されたとき、又はタッチされたとき発火
    for(var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mousedown", mdown, false);
        elements[i].addEventListener("touchstart", mdown, false);
    }
 //マウスが押された際の関数
 function mdown(e) {

    //クラス名に .drag を追加
    this.classList.add("drag");

    //タッチデイベントとマウスのイベントの差異を吸収
    if(e.type === "mousedown") {
        var event = e;
    } else {
        var event = e.changedTouches[0];
    }

    //要素内の相対座標を取得
    x = event.pageX - this.offsetLeft;
    y = event.pageY - this.offsetTop;

    //ムーブイベントにコールバック
    document.body.addEventListener("mousemove", mmove, false);
    document.body.addEventListener("touchmove", mmove, false);
}

//マウスカーソルが動いたときに発火
function mmove(e) {

    //ドラッグしている要素を取得
    var drag = document.getElementsByClassName("drag")[0];

    //同様にマウスとタッチの差異を吸収
    if(e.type === "mousemove") {
        var event = e;
    } else {
        var event = e.changedTouches[0];
    }

    //フリックしたときに画面を動かさないようにデフォルト動作を抑制
    e.preventDefault();

    //マウスが動いた場所に要素を動かす
    drag.style.top = event.pageY - y + "px";
    drag.style.left = event.pageX - x + "px";

    //マウスボタンが離されたとき、またはカーソルが外れたとき発火
    drag.addEventListener("mouseup", mup, false);
    document.body.addEventListener("mouseleave", mup, false);
    drag.addEventListener("touchend", mup, false);
    document.body.addEventListener("touchleave", mup, false);

}

//マウスボタンが上がったら発火
function mup(e) {
    var drag = document.getElementsByClassName("drag")[0];

    //ムーブベントハンドラの消去
    document.body.removeEventListener("mousemove", mmove, false);
    drag.removeEventListener("mouseup", mup, false);
    document.body.removeEventListener("touchmove", mmove, false);
    drag.removeEventListener("touchend", mup, false);

    //クラス名 .drag も消す
    drag.classList.remove("drag");
}

})()

var x = 1.0
var plus=document.getElementById("plus");
var minus=document.getElementById("minus");
function up(){
    if(x>1.5){
        return 0;
    }
    x += 0.05;
    let img_scale = document.getElementById("aaa");
    img_scale.style.transform = "scale(" + x + "," + x + ")";
    console.log("pon")
}


function down(){
    if(x<0.5){
        return 0;
    }
    x -= 0.05;
    let img_scale = document.getElementById("aaa");
    img_scale.style.transform = "scale(" + x + "," + x + ")";
    console.log("pon")
}

var reset=document.getElementById("reset");
function resetf(){
    let img_scale = document.getElementById("aaa");
    img_scale.style.transform = "scale(" + 1 + "," + 1 + ")";
    console.log("pon")
}

plus.addEventListener("click", up);
minus.addEventListener("click", down);
reset.addEventListener("click", resetf);

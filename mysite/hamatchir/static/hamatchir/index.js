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

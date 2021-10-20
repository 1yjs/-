function showData(v){
    // 1、创建对象
var ajax_ =new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP');
// 2、创建链接
ajax_.open('get',v,true);
// 3、发送请求
ajax_.send();
var pu=[];
// 4、接收数据
ajax_.onreadystatechange =function(){
    if(ajax_.readyState==4){
        if(ajax_.status==200){
           var res=JSON.parse(ajax_.responseText);
        //    console.log(res);
        var play_list_in=document.querySelector('.play_list_in');
        // console.log(play_list_in);
        var pl=document.getElementsByClassName('pl')[0];
         for(var i=0;i<4;i++){
            for(var j=0;j<8;j++){
                // console.log(pl);
                pu[j]=pl.cloneNode(true);
                pu[j].children[0].src=res[i][j].img.replace(/192.168.1.64/,'192.168.1.29');
                // console.log(pu[i].children[0].src);
                pu[j].children[1].innerHTML=res[i][j].description;
                // console.log(pu[j].children[1]);
                pu[j].children[2].innerHTML=res[i][j].text;
                pu[j].children[3].children[0].innerHTML=res[i][j].price;
                // console.log(pu[j].children[3].children[0]);
                pu[j].children[3].children[1].innerHTML='<img src="../css/img/xin.png">'+res[i][j].like;  
                pu[j].children[3].children[2].innerHTML='<img src="../css/img/reply.png">'+res[i][j].words;
                play_list_in.appendChild(pu[j]);
                }
            }
        }
    }
}
}


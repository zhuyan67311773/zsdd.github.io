function GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null){
          return decodeURI(r[2]);
      } 
      return null;
  }

  // 模糊匹配
function fuzzyMatch(str, key){
    let index = -1, flag = false;
    for(var i = 0, arr = key.split(""); i < arr.length; i++ ){
        //有一个关键字都没匹配到，则没有匹配到数据
        if(str.indexOf(arr[i]) < 0){
            break;
        }else{
            let match = str.matchAll(arr[i]);
            let next = match.next();
            while (!next.done){
                if(next.value.index > index){
                    index = next.value.index;
                    if(i === arr.length - 1){
                        flag = true
                    }
                    break;
                }
                next = match.next();
            }

        }
    }
    return flag
}

//根据id查找json数据，返回数据项，返回id所在的数据

function queryDataId(id,data,xx_id){
    var json = [];
    for(var i=0; i<data.length;i++){
        if(parseInt(id)==data[i][xx_id]){
            json = data[i]
        }
    }
    return json
}

function queryDataIdAll(id,data,xx_id){
    var json = [];
    for(var i=0; i<data.length;i++){
        if(parseInt(id)==data[i][xx_id]){
            json.push(data[i])
        }
    }
    return json
}


$(".yzp-btn").click(function () {
    $(".zzc").show();
    $(".tc").show();
})
$(".tc").click(function () {
    $(".zzc").hide();
    $(".tc").hide();
})


/*
.m-main-list li:visited:nth-child(4n) {
	margin-right: 0px;
}
*/

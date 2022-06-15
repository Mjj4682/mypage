const Link = {
    setcolor:function(colorr){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
        alist[i].style.color = colorr;
        i = i + 1;
        }  
    }
}
const Body = {
    setcolor:function(colorr){
        document.querySelector('body').style.color = colorr;
    },
    setbackcolor:function(colorr){
        document.querySelector('body').style.backgroundColor = colorr
    }
} 
function nightHandler(self){
    var bodycolor = document.querySelector('body');
    if(self.value === '다크모드'){
    Body.setbackcolor('#2E2E2E');
    Body.setcolor('white');
    self.value = '낮모드'
    Link.setcolor('#C8FE2E');
    } else {
    Body.setbackcolor('blanchedalmond');
    Body.setcolor('black');
    self.value = '다크모드';
    Link.setcolor('#5858FA');
    }
}
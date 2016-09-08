var Ztil = {
    runAnim: (selector,x,callback) => {
        $(selector).addClass(x + " animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
            $(this).removeClass(x + " animated")
            if(callback) callback();
        })
    },
    iCheckInit(){
        $('input').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green',
            increaseArea: '20%' // optional
        });
    },
    objToArr(obj){
        var arr = [];
        for(var i in obj){
            arr.push(obj[i])
        }
        return arr;
    }
}

export default Ztil;
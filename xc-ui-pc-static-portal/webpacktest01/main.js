//导入plus.js
var {add} = require('./plus');
var Vue = require('./vue.min');


//编写MVVM中的Model部分以及(ViewModel)部分
var VM = new Vue({
    el: '#app',
    data:{
        name:'咚咚咚',
        num1:null,
        num2:null,
        result:null,
        url:"https://www.baidu.com",
        size:33,
        imageSrc:"../vuetest/pic.jpg",

    },
    methods:{
        change:function () {
            this.result = add(Number.parseInt(this.num1),Number.parseInt(this.num2));
            // alert(this.result);
        }
    }
});



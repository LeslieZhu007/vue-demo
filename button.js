//定义组件，封装页面中的一部分内容，将来可以被复用
//该组件中同时具备了html,jsm,css
const btn = {
    //页面的html部分
    template: ` 
      <button style="border-radius:25px;color:white;background-color: deepskyblue;border: deepskyblue 1px solid"><h1>{{name}}</button></h1></button>
      <button><h1>click this button2</button></h1></button>
      <button><h1>click this button3</button></h1></button>` ,
    data() {
        return {
            name: 'click on me'
        }
    },

    methods: {

    },


};

//注册组件
Vue.component("el-button",btn);
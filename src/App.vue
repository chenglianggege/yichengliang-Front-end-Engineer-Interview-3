<template>
  <div id="app">
    <div class="main">
      <img class="moblie" src="./assets/img/moblie.png" alt="">
      <img class="ipad" src="./assets/img/ipad.jpg" alt="">
      <img class="pc" src="./assets/img/PC.jpg" alt="">
    </div>
    <Cover v-if="isMoblie"/>
  </div>
</template>

<script>
import Cover from './components/Cover.vue'
import { checkMachine } from './common/device'
import { httpRequest } from './common/http'
export default {
  name: 'App',
  data: () => {
    return {
      isMoblie: false
    }
  },
  components: {
    Cover
  },
  directives: {
    // 加载图片网络图片使用
    img: {
      inserted:function (el,binding){
        var color = Math.floor(Math.random()*1000000);
        el.style.backgroundColor = '#' + color;

        var img = new Image();
        img.src = binding.value;
        img.onload = function (){
            el.appendChild(img)
        }
      }
    }
  },
  mounted(){
    // When it is mobile phone access, detect horizontal and vertical screens
    let machine = checkMachine();
    this.isMoblie = machine === 'Moblie';
    this.initData()
  },
  methods: {
    async initData(){
      let data = await httpRequest('get','http://localhost:8080/request.json',{name: '998'})
      console.log(data)
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main{
  width: 100vw;
}
.main img{
  width: 100%;
  display: block;
}
/*手机*/
@media screen and (max-width:600px){
    .main .ipad, .main .pc {
        display: none;
    }
}
/*平板*/
@media screen and (min-width:600px) and (max-width:960px){
    .main .moblie, .main .pc {
        display: none;
    }
}
/*PC*/
@media screen and (min-width:960px){
    .main .ipad, .main .moblie {
        display: none;
    }
}
</style>

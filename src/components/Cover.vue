<template>
  <div>
    <div class="cover" v-if="!screenType">
        <img src="../assets/img/scape.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cover',
  props: {
  },
  data: () => {
    return {
      screenType: false
    }
  },
  mounted(){
    this.checkWindow();
    let event = "onorientationchange" in window ? "orientationchange" : "resize"
    window.addEventListener(event,this.checkWindow,false)
  },
  methods: {
    checkWindow() {
        if ( window.orientation == 180 || window.orientation==0 ) { 
            this.screenType = false
            return 'Vertical'; 
        } else if( window.orientation == 90 || window.orientation == -90 ) {
            this.screenType = true
            return 'Transverse'; 
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .cover{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        position: fixed;
        left: 0;
        top: 0;
    }
    @keyframes scape
    {
        from {
            transform:rotate(270deg);
            -ms-transform:rotate(270deg); /* IE 9 */
            -webkit-transform:rotate(270deg); /* Safari and Chrome */
        }
        to {
            transform:rotate(360deg);
            -ms-transform:rotate(360deg); /* IE 9 */
            -webkit-transform:rotate(360deg); /* Safari and Chrome */
        }
    }
    
    @-webkit-keyframes scape /* Safari 与 Chrome */
    {
        from {
            transform:rotate(270deg);
            -ms-transform:rotate(270deg); /* IE 9 */
            -webkit-transform:rotate(270deg); /* Safari and Chrome */
        }
        to {
            transform:rotate(360deg);
            -ms-transform:rotate(360deg); /* IE 9 */
            -webkit-transform:rotate(360deg); /* Safari and Chrome */
        }
    }
    .cover img{
        width: 80%;
        position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto;
        animation: scape 1s infinite;
        -webkit-animation: scape 1s infinite; /* Safari 与 Chrome */
    }
</style>

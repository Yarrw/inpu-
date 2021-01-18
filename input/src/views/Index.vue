<template>
  <div class="index">
    <xinput
      :xmaxlength=10
      @input="input">
    </xinput>
    <xinput
      style="margin-top:10px"
      :xmaxlength=10
      xvalue='禁止输入'
      :xdisabled=true
      @input="input">
    </xinput>
  </div>
</template>

<script>
import xinput from '../components/input'
export default {
  data(){
    return{
    }
  },
  methods:{
    input(e){
      console.log("e",e)
    }
  },
  components:{
    xinput
  }
}
</script>

<style>

</style>

<template>
  <div :class="['input-box',{'isdisabled':xdisabled}]" :style="{width:xsize+'px'}">
      <input 
        :value="currentValue"
        :type="xtype"
        :maxlength="xmaxlength"
        :disabled="xdisabled"
        :placeholder="xplaceholder"
        @input="inputHandle"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      >
  </div>
</template>

<script>
export default {
    props:{
        //类型
        xtype:{
            type:String,
            default:'text'
        },
        // 禁用
        xdisabled:{
            type:Boolean,
            default:false
        },
        // 提示语
        xplaceholder:{
            type:String,
            default:'请输入'
        },
        // 当前值
        xvalue:{
            type:[String,Number]
        },
        // 最大输入长度
        xmaxlength:{
            type:Number
        },
        // 输入框长度
        xsize:{
            type:Number,
            default:150
        }
    },
    data(){
        return{
            currentValue:this.xvalue == undefined || this.xvalue == null ? '' : this.xvalue
        }
    },
    watch:{
        xvalue(val, oldValue) {
        this.setCurrentValue(val);
      }
    },
    methods:{
        inputHandle(e){
            const value=event.target.value;
            this.setCurrentValue(value)
            this.$emit('input', value);
        },
        handleFocus(e) {
            this.$emit('focus', e);
        },
        handleBlur(e) {
            this.$emit('focus', e);
        },
        handleChange(e) {
            this.$emit('focus', e);
        },
        setCurrentValue(value){
            if (value === this.currentValue){
                return
            }
            this.currentValue = value
        },
    }
}
</script>

<style lang="less" scoped>
    .input-box{
        width: 150px;
        border: 1px solid #666;
        display: flex;
        align-items: center;
        border-radius: 3px;
        position: relative;
        .icon{
            position: absolute;
            width: 20px;
            height: 20px;
            top: 50%;
            left: 0;
            margin-top:-10px ;
            background: url("../../src/assets/clear.png") no-repeat center center;
            background-size: 20px 20px;
        }
    }
    .isdisabled{
        background: #f5f5f5;;
    }
     input{
        width: 100%;
        background:none;
        outline:none;
        border:0px;
        line-height: 100%;
        padding: 8px 5px;
        border-radius: 3px;
    }
    input:focus{
        border: none;
        box-shadow:  0 0 0 1px #42A7FF,0 0 0 3px #BDE7FF;
    }
    
</style>


<template>
  <div class="tips-wrap">
    <div class="protocol">
      <span class="checkbox" :class="{checked:isAgree}" @click="handleCheck"></span>同意
      <a href="http://www.baokaodaxue.com/ydzt/web_school/xhkagreement" target="_blank">《学护卡用户协议》</a>
    </div>
    <p class="help-tips">
      点击立即开通并同意《学护卡用户协议》表示您已清楚所申请业务服务内容，接受以上资费标准，自愿开通该业务
      <br/>
      <br/>
      如有问题请拨打客服电话400-6099-019或10086
      <br/>
      <br/>
      业务退订：手机发送0000到10086
    </p>
  </div>
</template>


<script>
export default {
  name: "BottomTips",
  props: {
    isAgree: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleCheck() {
      this.$emit('update:isAgree',!this.isAgree)
    }
  }
}
</script>

<style lang="scss" scoped>
.tips-wrap{
  .help-tips{
      text-align: center;
      padding: 0.613333rem 0.8rem 0.346667rem;
      line-height: 0.5rem;
      color: #8a9199;
      font-size: 25px;
    }
  .protocol{
    margin-top: 20px;
    color: #47aefe;
    font-size: 26px;
    text-align: center;
    .checkbox{
      display: inline-block;
      width: 24px;
      height: 24px;
      border: 1px solid #ccc;
      position: relative;
      margin-right: 5px;
      vertical-align: middle;
      &.checked::after{
        content: '\00a0';
        display: inline-block;
        border: 3px solid #47aefe;
        border-top-width: 0;
        border-right-width: 0; 
        width: 16px; /*16px*/
        height: 8px; 
        transform: rotate(-50deg) translate(-50%,-50%);
        position: absolute;
        top:4%;
        left:50%;
      }
    }
    a{
      color: #47aefe;
      text-decoration: none;
    }
  }
}
</style>



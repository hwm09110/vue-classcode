<template>
  <section class="donwload-tips-wrap">
    <h2 class="title" v-if="!isXtl">微信扫一扫关注掌通校园微信公众号</h2>
    <div class="qrcode-intr" v-if="!isXtl">
        <div class="qrcode-img">
            <img src="../assets/img/wx-ewm.png" alt="二维码">
        </div>
        <div class="intr-content">
            <p>
                <strong>第一种方式：</strong><br/>
      扫一扫左方二维码，关注”掌通校园”点击 菜单栏→我的→孩子信息，绑定孩子信息后即可通过微信端获取到离校通知
            </p>
            <p>
                <strong>第二种方式：</strong><br/>
      1．扫一扫左方二维码，关注“掌通校园”微信公众号，公众号回复：8 ，即可获取“掌通校园APP（家长版）”下载链接。
            </p>
        </div>
    </div>
    <div class="qrcode-intr" v-else>
        <div class="qrcode-img">
            <img src="../assets/img/xtl-ewm.png" alt="二维码">
        </div>
        <div class="intr-content">
            <p>请用手机下载“学童乐”APP：</p>
            <p>1、安卓手机：各大应用市场搜索“学童乐”下载</p>
            <p>2、苹果手机：AppStore上搜索“学童乐”下载</p>
            <p>3、手机扫描左侧二维码下载</p>
        </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "DownloadTips",
  props: {
    isXtl: {
      type:Boolean,
      default: false
    }
  }
}
</script>


<style lang="scss" scoped>
.donwload-tips-wrap{
  background-color: #fff;
  padding: 45px 42px;
  .title{
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: bold;
    margin-left: 15px;
  }
  .qrcode-intr{
    display: flex;
    .qrcode-img{
      width: 300px;
      height: 300px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .intr-content{
      width: 348px;
      margin-left: 18px;
      color: #3f3f3f;
      font-size: 24px;
      p{
        strong{
            font-weight: bold;
        }
        line-height: 1.6;
        margin-bottom: 20px;
        font-size: 24px;
        color: #3f3f3f;
      }
    }
  }
}
</style>

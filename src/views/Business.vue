<template>
  <div class="business-wrap">
    <tab :active="active" :tabList="tabList" @on-tab-click="handleTabClick"></tab>
    <h1 class="title">[学护卡]业务办理</h1>
    <div class="class-info-wrap">
      <p class="tips">请确认您的班级信息</p>
      <ul class="class-info">
        <li>
          <div class="label-text">所在学校：</div>
          <div class="info-content">河南宏途第一实验学校</div>
        </li>
        <li>
          <div class="label-text">所在班级：</div>
          <div class="info-content">一年级1班</div>
        </li>
      </ul>
    </div>
    <div class="line"></div>
    <div class="phone-info-wrap">
      <p class="tips">请认真完整填写以下信息，我们将统一为您办理</p>
      <div class="sub-title">开通手机号</div>
      <div class="phone-form-box">
        <div class="form-item required">
          <div class="item-label">开通业务手机号：</div>
          <div class="item-content">
            <input type="number">
          </div>
        </div>
        <div class="form-item required">
          <div class="item-label">验证码：</div>
          <div class="item-content">
            <input type="number" placeholder="填写6位验证码">
          </div>
        </div>
      </div>
      <div class="get-phonecode">
        <span class="send-msg-tips">使用开通业务手机号（限河南移动），编辑短信3496 发送到10086，将获得的验证码。</span>
        <span class="sendmsg-btn">发送短信</span>
      </div>
      <div class="fee-box">
        <div class="fee-content">
          <div class="label-text">业务资费：</div>
          <div class="info-content">5元/月，按天收费</div>
        </div>
        <div class="fee-tips">在开通业务的手机号码中扣取</div>
      </div>
    </div>
    <div class="line"></div>
    <div class="student-info-wrap">
      <div class="sub-title">学生信息</div>
      <div class="phone-form-box">
        <div class="form-item required">
          <div class="item-label">姓名：</div>
          <div class="item-content">
            <input type="text">
          </div>
        </div>
      </div>
      <div class="relphone-tips">亲情号码（学生持卡可免费拨打电话）</div>
      <div class="relphone-box">
        <div class="item-box required">
          <div class="label">第一联系人：</div>
          <div class="phone">
            <input type="number">
          </div>
          <div class="relation">
            <select class="select-rel">
              <option value="">爸爸</option>
              <option value="">妈妈</option>
            </select>
          </div>
        </div>
        <div class="item-box required">
          <div class="label">第二联系人：</div>
          <div class="phone">
            <input type="number">
          </div>
          <div class="relation">
            <select class="select-rel">
              <option value="">爸爸</option>
              <option value="">妈妈</option>
            </select>
          </div>
        </div>
        <div class="item-box">
          <div class="label">第二联系人：</div>
          <div class="phone">
            <input type="number">
          </div>
          <div class="relation">
            <select class="select-rel">
              <option value="">爸爸</option>
              <option value="">妈妈</option>
            </select>
          </div>
        </div>
      </div>
      <div class="open-more">
        <span class="more-btn">填写更多联系人</span>
      </div>
    </div>
    <div class="bottom-wrap">
      <div class="operate-box">
        <button class="open-btn">立即开通</button>
      </div>
      <bottom-tips></bottom-tips>
    </div>
  </div>
</template>

<script>
import Tab from '@c/Tab'
import BottomTips from '@c/BottomTips'
export default {
  name: 'business',
  components: {
    Tab,
    BottomTips
  },
  data () {
    return {
      active: 0,
      tabList: [
        {
          name: '业务办理',
          pathName: 'business'
        },
        {
          name: '致家长一封信',
          pathName: 'letter'
        }
      ]
    }
  },
  methods: {
    handleTabClick (index, item) {
      this.active = index
      this.$router.push({name:item.pathName})
    }
  }
}
</script>


<style lang="scss" scoped>
 .business-wrap{
   background-color: #fff;
   .line{
     width: 100%;
     height: 1px;
     background-color: #dcdcdc;
   }
   .title{
     font-size: 36px;
     color: #3f3f3f;
     padding: 60px 40px;
     font-weight: bold;
   }
   .class-info-wrap{
     padding: 0 40px;
     .tips{
       font-size: 25px;
       color: #8a9199;
       margin-bottom: 40px;
     }
     .class-info{
       li{
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin-bottom: 60px;
         font-size: 30px;
         .label-text{
           color: #3f3f3f;
         }
         .info-content{
           color: #000;
           font-weight: 700;
         }
       }
     }
   }
   .phone-info-wrap{
     padding: 0 40px;
     .tips{
       font-size: 25px;
       color: #8a9199;
       margin: 40px 0;
     }
     .sub-title{
       color: #3f3f3f;
       font-size: 28px;
       margin-bottom: 40px;
       font-weight: 700;
     }
     .phone-form-box{
       .form-item{
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin-bottom: 50px;
         .item-label{
           color: #3f3f3f;
           font-size: 30px;
           position: relative;
         }
         .item-content{
           width: 50%;
           input{
             border:1px solid #dcdcdc;
             height: 60px;
             width: 100%;
             padding-left: 5px;
             font-size: 25px;
           }
         }
         &.required{
           .item-label::after{
             position: absolute;
             top:8px;
             right: -10px;
             content: '*';
             color: #ff6666;
           }
         }
         &:last-child{
           margin-bottom: 20px;
         }
       }
     }
   }
   .get-phonecode{
     margin-bottom: 50px;
     line-height: 42px;
     .send-msg-tips{
       color: #ffb000;
       font-size: 25px;
     }
     .sendmsg-btn{
       display: inline-block;
       border-radius: 10px;
       background-color: #47aefe;
       color: #fff;
       padding: 4px 10px;
       line-height: 1;
       font-size: 25px;
     }
   }
   .fee-box{
     margin-bottom: 50px;
     .fee-content{
       color: #3f3f3f;
       display: flex;
       justify-content: space-between;
       align-items: center;
       font-size: 30px;
       .label-text{
       }
       .info-content{
         color: #3f3f3f;
       }
     }
     .fee-tips{
       text-align: right;
       color: #8a9199;
       font-size: 13px;
       margin-top: 10px;
     }
   }
   .student-info-wrap{
     padding: 0 40px;
    //  display: none;
     .sub-title{
       color: #3f3f3f;
       font-size: 28px;
       margin: 40px 0;
       font-weight: 700;
     }
     .phone-form-box{
       .form-item{
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin-bottom: 50px;
         .item-label{
           color: #3f3f3f;
           font-size: 30px;
           position: relative;
         }
         .item-content{
           width: 50%;
           input{
             border:1px solid #dcdcdc;
             height: 60px;
             width: 100%;
             padding-left: 5px;
             font-size: 25px;
           }
         }
         &.required{
           .item-label::after{
             position: absolute;
             top:8px;
             right: -10px;
             content: '*';
             color: #ff6666;
           }
         }
         &:last-child{
           margin-bottom: 20px;
         }
       }
     }
     .relphone-tips{
       font-size: 25px;
       color: #8a9199;
       margin-top: 40px;
       margin-bottom: 40px;
     }
     .relphone-box{
       padding-bottom: 10px;
       .item-box{
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin-bottom: 40px;
         .label{
           position: relative;
           width: 200px;
           color: #3f3f3f;
           font-size: 30px;
         }
         .phone{
           width: 238px;
           input{
             border:1px solid #dcdcdc;
             height: 60px;
             width: 100%;
             padding-left: 5px;
             font-size: 25px;
           }
         }
         .relation{
           width: 197px;
           select{
             border:1px solid #dcdcdc;
             height: 60px;
             width: 100%;
             background-color: #fff;
             outline: none;
           }
         }
         &.required{
           .label::after{
             position: absolute;
             top:8px;
             right: 10px;
             content: '*';
             color: #ff6666;
           }
         }
       }
     }
     .open-more{
      text-align: right;
      position: relative;
      top:-0.5rem;
      padding-right: 0.333333rem;
      .more-btn{
        font-size: 0.333333rem;
        color: #8a9199;
        position: relative;
        &::after{
          position: absolute;
          right: -0.333333rem;
          top:0.036667rem;
          content: '';
          width: 0.2rem;
          height: 0.2rem;
          border:0.026667rem solid #8a9199;
          border-top: none;
          border-right: none;
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
      }
     }
   }
   .bottom-wrap{
     background-color: #efeff4;
     padding-top: 22px;
     .operate-box{
       text-align: center;
       .open-btn{
          width: 666px;
          height: 92px;
          color: #fff;
          font-size: 34px;
          letter-spacing: 2px;
          border-radius: 46px;
          text-align: center;
          background-color: #47aefe;
          margin-bottom: 20px;
          border: none;
       }
     }
   }
 }
</style>

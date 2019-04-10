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
      <div class="phone-form-box" v-for="(item,index) of openPhones" :key="index">
        <div :class="['form-item', {required:index==0}]">
          <div class="item-label">开通业务手机号{{ openPhones.length > 1? (index + 1) : ''}}：</div>
          <div class="item-content">
            <input type="number" v-model.trim="item.phone" placeholder="填写手机号码">
          </div>
        </div>
        <div :class="['form-item', {required:index==0}]">
          <div class="item-label">验证码：</div>
          <div class="item-content">
            <input type="number" placeholder="填写6位验证码" v-model.trim="item.yzm">
          </div>
        </div>
      </div>
      <div class="get-phonecode">
        <span class="send-msg-tips">{{getcodetips}}</span>
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
            <input type="text" v-model="studentInfo.name">
          </div>
        </div>
      </div>
      <div class="relphone-tips">亲情号码（学生持卡可免费拨打电话）</div>
      <div class="relphone-box">
        <div :class="['item-box',{required:item.isrequire == 1}]" v-for="(item,index) of relphones" :key="index" v-show="index < showRelPhoneInputNum">
          <div class="label">第{{chineseNumber[index]}}联系人：</div>
          <div class="phone">
            <input type="number" placeholder="输入手机号码" v-model.trim="item.phone">
          </div>
          <div class="relation">
            <select class="select-rel" v-model="item.rel">
              <option value="">与学生关系</option>
							<option :value="rel" v-for="(rel,j) of relations" :key="j">{{rel}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="open-more" v-show="showMoreEntry">
        <span class="more-btn" @click="handleGetMore">填写更多联系人</span>
      </div>
    </div>
    <div class="bottom-wrap">
      <div class="operate-box">
        <button class="open-btn" @click="handleSubmit">立即开通</button>
      </div>
      <bottom-tips :isAgree.sync="isChecked"></bottom-tips>
    </div>
  </div>
</template>

<script>
import Tab from '@c/Tab'
import BottomTips from '@c/BottomTips'
import utils from '@a/js/utils'
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
      ],
      isChecked: true, //是否同意用户协议
      getcodetips: "使用开通业务手机号（限河南移动），编辑短信3496 发送到10086，将获得的验证码。",
      chineseNumber: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
      relations: ['爸爸', '妈妈', '爷爷', '奶奶', '姑姑', '叔叔'],
      showRelPhoneInputNum:1,
      showMoreEntry:true, //显示添加更多联系人入口
      //开通业务手机号码 
      openPhones: [
        {phone:'18202038213', yzm:'123456'},
        {phone:'', yzm:''},
      ],
      //学生信息
      studentInfo: {
        name: '黄伟明',
        gender: 1, //1男 2女 
      },
      //亲情号码
      relphones: [
        {isrequire:1, isrel:'1', phone:'18202038215', rel:'爷爷', id:'1'},
        {isrequire:0, isrel:'1', phone:'', rel:'', id:'2'},
        {isrequire:0, isrel:'1', phone:'', rel:'', id:'3'},
      ] 
    }
  },
  methods: {
    handleTabClick (index, item) {
      this.active = index
      this.$router.push({name:item.pathName})
    },
    handleGetMore() {
      this.showRelPhoneInputNum = this.relphones.length
      this.showMoreEntry = false
    },
    //验证开通业务手机号和验证码
    validateOpenPhone() {
      let result = {error:false, msg:''}
      for(let i = 0, len = this.openPhones.length; i < len; i++){
        let item = this.openPhones[i]
        if(i == 0){
          if(!item.phone){
            result['error'] = true
            result['msg'] = "第一个手机号码不能为空"
            return result
          }
          if(item.phone && !utils.isPhoneNum(item.phone)){
            result['error'] = true
            result['msg'] = "第一个手机号码格式不正确"
            return result
          }
          if(!item.yzm){
            result['error'] = true
            result['msg'] = "开通验证码不能为空"
            return result
          }
          if(item.yzm && item.yzm.length !== 6){
            result['error'] = true
            result['msg'] = "开通验证码格式不正确(验证码为6位数)"
            return result
          }
        }else{
          if(item.phone && !utils.isPhoneNum(item.phone)){
            result['error'] = true
            result['msg'] = "第"+( i + 1 )+"个手机号码格式不正确"
            return result
          }
          if(item.phone && !item.yzm){
            result['error'] = true
            result['msg'] = "第"+( i + 1 )+"个手机号的开通验证码不能为空"
            return result
          }
          if(item.phone && item.yzm && item.yzm.length !== 6){
            result['error'] = true
            result['msg'] = "第"+( i + 1 )+"个手机号的开通验证码格式不正确(验证码为6位数)"
            return result
          }
        }
      }
      return result
    },
    //验证亲情号码
    validateRelPhone() {
      let result = {error:false,msg:''}
      for(let i = 0, len = this.relphones.length; i < len; i++){
        let item = this.relphones[i]
        if(item.isrequire == 1){
          if(!item.phone){
            result['error'] = true
            result['msg'] = "亲情号码第"+(this.chineseNumber[i])+"联系人手机号码为必填选项"
            console.log(i);
            return result
          }
        }
        if(item.phone && !utils.isPhoneNum(item.phone)){
          result['error'] = true
          result['msg'] = "亲情号码第"+(this.chineseNumber[i])+"联系人手机号码格式不正确"
          console.log(i);
          return result
        }
      }
      return result
    },
    //立即开通
    handleSubmit() {
      let result = this.validateOpenPhone()
      console.log(result);
      if(result.error){
        alert(result.msg)
        return false
      }
    },
    //设置发送短信内容到10086
    setSendmsg() {
			const $sendmsg = document.querySelector('.sendmsg-btn')
			if(utils.isIphone()){
				$sendmsg.setAttribute('href','sms:10086&body=3496')
			}else{
				$sendmsg.setAttribute('href','sms:10086?body=3496')
			}
		}
  },
  mounted() {
    this.setSendmsg()
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

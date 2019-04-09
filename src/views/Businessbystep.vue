<template>
  <div class="businessbystep-wrap">
    <tab :active="active" :tabList="tabList" @on-tab-click="handleTabClick"></tab>
    <div class="step-wrap" style="display:none;">
				<h2 class="module-title">[和教育学生卡]业务办理</h2>
				<div class="class-info-box">
					<div class="pre-tips">请确认您的班级信息</div>
					<div class="info-item-box">
						<div class="item-name">所在学校：</div>
						<div class="item-content">
							宏途中学
            </div>
					</div>
					<div class="info-item-box">
						<div class="item-name">所在班级：</div>
						<div class="item-content">
							五年级1班
            </div>
					</div>
					<div class="info-item-box">
						<div class="item-name">业务资费：</div>
						<div class="item-content fee-info">
							<strong>
								<span class="money">10元/月</span>
							</strong><br>
							在开通业务的手机号码中扣取
						</div>
					</div>
				</div>
				<div class="operate-box">
					<button>立即开通</button>
          <bottom-tips></bottom-tips>
				</div>
    </div>
    <progress-bar :activeNum="progressNum"></progress-bar>
    <div class="step-wrap" style="display:none;">
				<h2 class="module-title">开通手机号</h2>
				<div class="bussiness-info-box">
					<div class="pre-tips">请认真完整填写以下信息，我们将统一为您办理</div>
          <div class="open-phone-box">
            <div class="info-item-box">
              <div class="item-name">
                开通业务手机号：
                <span class="star">*</span>
              </div>
              <div class="item-content">
                <input type="number" class="open-phone" placeholder="填写手机号码">
              </div>
            </div>
            <div class="info-item-box">
              <div class="item-name">
                验证码：
                <span class="star">*</span>
              </div>
              <div class="item-content">
                <input type="number" class="yzm" placeholder="填写6位验证码">
              </div>
            </div>
          </div>
          <div class="get-code-tips">
            <span>使用开通业务手机号（限河南移动），编辑短信3496 发送到10086，将获得的验证码。</span>
            <a class="sendmsg" href="javascript:;">发送短信</a>
          </div>
				</div>
				<div class="operate-box">
					<button>下一步</button>
				</div>
    </div>
    <div class="step-wrap" style="display:none;">
				<h2 class="module-title">学生信息</h2>
				<div class="stu-info-box">
					<div class="pre-tips">请认真完整填写以下信息，我们将统一为您办理</div>
					<div class="item-box" data-isrequire="1">
						<div class="item-name">
							姓名：<span class="star">*</span>
						</div>
						<div class="item-content">
							<input type="text" class="stu-name" placeholder="填写学生姓名">
						</div>
					</div>
					<div class="item-box" data-isrequire="1">
						<div class="item-name">
							性别：
							<span class="star">*</span>
						</div>
						<div class="item-content">
							<ul class="choose-box stu-gender">
								<li class="active">男生</li>
								<li>女生</li>
							</ul>
						</div>
					</div>
				</div>
				<h2 class="phone-tips">亲情号码（学生持卡可免费拨打电话）</h2>
				<div class="parent-phone-box">
					<div class="row-box" data-index="1" data-isrequire="1" data-rel="1">
						<div class="row-name">
							第一联系人：<span class="star">*</span>
            </div>
						<div class="row-content">
							<div class="input-wrap">
								<input type="number" class="phone" placeholder="输入手机号码">
							</div>
							<div class="input-wrap">
								<select class="relationship">
									<option value="">与学生关系</option>
									<option value="爸爸">爸爸</option>
									<option value="妈妈">妈妈</option>
									<option value="爷爷">爷爷</option>
									<option value="奶奶">奶奶</option>
									<option value="姑姑">姑姑</option>
									<option value="叔叔">叔叔</option>
								</select>
								<i class="arrow"></i>
							</div>
						</div>
					</div>
					<div class="open-more">
						<span class="more-btn">填写更多联系人</span>
					</div>
				</div>
				<div class="operate-box">
					<button class="three-next-btn">下一步</button>
				</div>
    </div>
    <div class="step-wrap">
      <div class="success-content-wrap">
					<div class="success-info-box">
						<div class="success-icon"></div>
						<div class="success-text">业务办理提交成功！</div>
						<div class="other-tips">我们将统一为您办理开通，请留意短信通知</div>
					</div>
					<div class="order-info-box">
						<div class="item">
							<span class="label">学生姓名：</span>
							<span class="val open-stu-name">--</span>
						</div>
						<div class="item">
							<span class="label">业务资费：</span>
							<span class="val open-fee">--</span>
						</div>
						<div class="item">
							<span class="label">开通业务手机号：</span>
							<span class="val open-suc-phone">18202038213</span>
						</div>
					</div>
				</div>
    </div>
    <download-tips style="margin-top:0.133333rem;" :isXtl="isXtl"></download-tips>
  </div>
</template>


<script>
import Tab from '@c/Tab'
import BottomTips from '@c/BottomTips'
import ProgressBar from '@c/ProgressBar'
import DownloadTips from '@c/DownloadTips'
export default {
  name: 'businessbystep',
  components: {
    Tab,
    BottomTips,
    ProgressBar,
    DownloadTips
  },
  data () {
    return {
      active: 0,
      tabList: [
        {
          name: '业务办理',
          pathName: 'businessbystep'
        },
        {
          name: '致家长一封信',
          pathName: 'letter'
        }
      ],
      isXtl: false, //是否学童乐
      progressNum: 1 //当前完成进度
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
.businessbystep-wrap{
  height: 100%;
  background-color: #efeff4;
  .step-wrap{
    background-color: #fff;
  }
  .module-title{
    font-size: 36px;
    color: #3f3f3f;
    padding-top: 33px;
    margin-bottom: 46px;
    padding-left: 42px;
    font-weight: bold;
  }
  .star{
    color: #f16464;
    font-size: 36px;
    position: relative;
    top: 6px;
  }
  .class-info-box{
    padding: 0 42px;
    .pre-tips{
      color: #8a9199;
      font-size: 25px;
      margin-bottom: 47px;
    }
    .info-item-box{
      margin-bottom: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .item-name{
        font-size: 30px;
        color: #333;
        width: 35%;
      }
      .item-content{
        width: 65%;
        color: #333;
        font-size: 30px;
        text-align: right;
        font-weight: bold;
      }
      .fee-info{
        font-size: 22px; 
        color: #8a9199;
        line-height: 1.4;
        .money{
          color: #ffb000;
        }
      }
    }
  }
  .operate-box{
    text-align: center;
    background-color: #efeff4;
    button{
      width: 666px;
      height: 92px;
      color: #fff;
      font-size: 34px;
      letter-spacing: 2px;
      border-radius: 46px;
      text-align: center;
      background-color: #47aefe;
      margin-bottom: 20px;
      margin-top: 20px;
      border: none;
    }
  }
  .bussiness-info-box{
    padding: 0 42px;
    border-bottom: 1px solid #dcdcdc;
    .pre-tips{
      color: #8a9199;
      font-size: 25px;
      margin-bottom: 47px;
    }
    .get-code-tips{
      color: #ffb000;
      font-size: 25px;
      margin-bottom: 30px;
      position: relative;
      margin-top: -50px;
      line-height: 50px;
      .sendmsg{
        color: #fff; 
        margin-left: 15px; 
        text-decoration: none; 
        font-size: 24px; 
        padding: 6px 19px; 
        background-color: #47aefe; 
        border-radius: 8px;
      }
    }
    .info-item-box{
      margin-bottom: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .item-name{
        font-size: 30px;
        color: #333;
        width: 45%;
      }
      .item-content{
        width: 55%;
        text-align: right;
        input{
          width: 324px;
          height: 72px;
          border: 1px solid #dcdcdc;
          font-size: 0.373333rem;
          padding-left: 10px;
        }
      }
      &.fee-intr{
        .item-name{
          width:30%; 
        }
        .item-content{
          width:70%; 
        }
      }
    }
  }
  .stu-info-box{
    padding: 0 42px;
    .pre-tips{
      color: #8a9199;
      font-size: 25px;
      margin-bottom: 47px;
    }
    .item-box{
      margin-bottom: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .item-name{
        font-size: 30px;
        color: #333;
        width: 40%;
      }
      .item-content{
        width: 60%;
        text-align: right;
        font-size: 30px;
        position: relative;
        select,
        input{
          width: 324px;
          height: 72px;
          border: 1px solid #dcdcdc;
          background-color: #fff;
          font-size: 28px;
          padding-left: 10px;
          color: #8a9199;
        }
      }
      .choose-box {
        li{
          display: inline-block;
          margin-left: 24px;
          width: 144px;
          height: 72px;
          line-height: 72px;
          text-align: center;
          border: 1px solid #dcdcdc;
          color: #8a9199;
          font-size: 32px;
          &.active{
            color: #47aefe;
            border-color: #47aefe;
          }
        }
      }
    }
  }
  .phone-tips{
    color: #8a9199;
    font-size: 30px;
    padding: 0 42px;
    margin-bottom: 0.5rem;
  }
  .parent-phone-box{
    padding: 0 42px;
    .row-box{
      margin-bottom: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .row-name{
        font-size: 30px;
        color: #333;
        width: 200px;
      }
      .row-content{
        width: calc(100% - 200px);
        text-align: right;
        font-size: 30px;
        .input-wrap{
          position: relative;
          display: inline-block;
        }
        select,
        input{
          height: 72px;
          border: 1px solid #dcdcdc;
          background-color: #fff;
          font-size: 28px;
          padding-left: 10px;
          color: #8a9199;
        }
        select{
          width: 197px;
        }
        input{
          width: 236px;
        }
      }
    }
    .open-more{
      text-align: right;
      position: relative;
      top:-38px;
      padding-right: 25px;
      .more-btn{
        font-size: 25px;
        color: #8a9199;
        position: relative;
        &::after{
          position: absolute;
          right: -25px;
          top:2.75px;
          content: '';
          width: 15px;
          height: 15px;
          border: 1px solid #8a9199;
          border-top: none;
          border-right: none;
          transform: rotate(-45deg);
        }
      }
    }
  }
  /*提交成功提示*/
  .success-content-wrap{
    text-align: center;
    overflow: auto;
    .success-info-box{
      .success-icon{
        display: inline-block;
        width: 156px;
        height: 156px;
        background-image: url('../assets/img/img_success@2x.png');
        background-size: 156px 156px;
        margin-top: 66px;
        margin-bottom: 42px;
      }
      .success-text{
        color: #47aefe;
        font-size: 36px;
      }
      .other-tips{
        color: #8a9199;
        margin-top: 20px;
        font-size: 30px;
      }
    }
    .order-info-box{
      margin-top: 98px;
      margin-left: 145px;
      text-align: left;
      .item{
        margin-bottom: 38px;
        font-size: 30px;
        .label{
          color: #8a9199;
        }
        .val{
          margin-left: 76px;
          color: #3f3f3f;
        }
      }
    }
    .operate-box{
      margin-top: 84px;
      background-color: #fff;
      .explain{
        margin-top: 44px;
        padding: 0 100px 33px;
        color: #8a9199;
        font-size: 25px;
        line-height: 40px;
      }
    }
  }
}
</style>

<template>
  <div class="businessbystep-wrap">
    <tab :active="active" :tabList="tabList" @on-tab-click="handleTabClick"></tab>
    <section class="letter-wrap">
        <article class="letter-content">
			<p style="line-height:2em;"><span style="font-size:14px;">尊敬的学生家长：</span></p><p><br></p><p style="line-height:2em;"><span style="font-size:14px;">您好！安全，是家庭幸福的保障，是孩子健康成长的保证！我们将致力于加强管理，为您的孩子健康成长而努力。</span></p><p><br></p><p style="line-height:2em;"><span style="font-size:14px;">然而，外面的环境并不容乐观，涉及学生的安全事故时有发生。为了防患于未然，为了您的孩子能够更好地学习与生活，为了你的孩子的身心健康与生命安全，我们真诚希望您和学校一起，共同做好孩子的安全教育，也真诚的希望您能履行监护人的职责，与学校一起做好以下工作：</span></p><p><br></p><p style="line-height:2em;"><span style="font-size:14px;">一、要注意饮食安全。要教育孩子日常生活中养成良好卫生习惯，不到没有卫生许可证的摊点吃饭，不购买无质量安全保证的食品，不食用来历不明的可疑食物。不把子女送到没有卫生许可证、从业人员无健康证的小餐桌就餐，以防止发生食物中毒事故。</span></p><p><br></p><p style="line-height:2em;"><span style="font-size:14px;">二、要注意交通安全。要教育子女自觉遵守交通规则，靠右行走，不要在马路上游玩嬉戏、随意横穿马路和闯红灯，过交叉路口等要注意避让过往车辆，小学生必须有家长护送，不得独自骑车上下学，禁止学生乘坐无证照、违章超载车辆和低速三轮车等运输工具，避免交通事故发生。</span></p><p><br></p><p style="line-height:2em;"><span style="font-size:14px;">三、要注意外出活动安全。除学校组织的正常教育、教学活动之外的一切外出活动，家长必须对子女外出要做到知去向、知活动内容、知同伴、知归时，防止发生意外。不把子女送到无办学许可证、无安全保障的民办学校和培训机构去学习。</span></p><p><br></p><p style="line-height:2em;"><span style="font-size:14px;">四、要注意教育子女遵守有关法律规定。不进游戏厅、网吧等娱乐场所。</span></p><p><br></p><p style="line-height:2em;"><span style="font-size:14px;">五、注意防范不法分子的侵害。不要轻信陌生人，不要轻易接触不认识的人，要防范不法分子对孩子的诱惑欺骗。平安是福，安全第一。</span></p><p><br></p><p style="line-height:2em;"><span style="font-size:14px;">敬请各位家长务必在百忙中加强对子女的安全监督力度，时时提醒子女注意安全事项，一切以安全为重，确保子女平平安安，快乐成长。</span></p><p><br></p><p><br></p>
        </article>
		<button class="open-btn">现在去办理业务</button>	
    </section>
    <download-tips :isXtl="isXtl"></download-tips>
  </div>
</template>

<script>
import Tab from '@c/Tab'
import DownloadTips from '@c/DownloadTips'
export default {
  name: 'letter',
  components: {
    Tab,
    DownloadTips
  },
  data () {
    return {
      active: 1,
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
      isXtl: true //是否是学童乐
    }
  },
  methods: {
    handleTabClick (index,item) {
      this.active = index
      this.$router.push({name:item.pathName})
    }
  }
}
</script>


<style lang="scss" scoped>
.letter-wrap{
    background-color: #fff;
    padding: 35px 42px;
    border-bottom:1px solid #dcdcdc;
    .letter-content{
        color: #333;
    }
    .open-btn{
        display: block;
        width: 666px;
        height: 92px;
        line-height: 92px;
        color: #fff;
        font-size: 34px;
        letter-spacing: 2px;
        border-radius: 46px;
        text-align: center;
        background-color: #47aefe;
        margin: 43px auto 0;
        border: none;
    }
}
</style>

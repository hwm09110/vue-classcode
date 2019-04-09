<template>
  <div class="tab-wrap">
    <ul class="tab">
      <li v-for="(item,index) in tabList" :key="index" :class="active == index?'active':''">
        <a href="javascript:;" @click="handleClick(index,item)">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    active: {
      required: true,
      type: Number,
      default: 0
    },
    tabList: {
      required: true,
      type: Array
    }
  },
  methods:{
    handleClick (index,item) {
      this.$emit('on-tab-click',index,item);
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-wrap{
  background-color: #fff;
  .tab{
    border-bottom:2px solid #dcdcdc;
    display:flex;
    li{
      flex:1;
      height: 110px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size:  32px;
      a{
        display: block;
        height: 110px;
        line-height: 110px;
        color: #8a9199;
        text-decoration: none;
        border-bottom:6px solid transparent;
      }
      &.active{
        a{
          border-color:#47aefe;
          color: #47aefe;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
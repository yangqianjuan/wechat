<template>
  <div class="shop">
    <div class="shop-content">
      <div class="shop_card">
        <div class="img">
          <p>z</p>
        </div>
        <div class="imginfo">
          <p>手机号：18321310000</p>
          <p>所属部门：浦东新区张江路旗舰店</p>
          <p>角色名称：店长</p>
        </div>
      </div>
    </div>
    <div class="shop_setup">
      <div class="shop_switch">
        <div
          class="shop_require"
          @click="changeRemind"
        >
          <span>到店提醒条件</span>
          <div>
            <span>已设置</span>
            <Icon type="ios-arrow-forward" />
          </div>
        </div>
      </div>
      <div class="shop_switch">
        <div class="shop_require">
          <span>接收到店提醒</span>
          <i-switch
            v-model="switch1"
            @on-change="change"
            size="default"
          />
        </div>
      </div>
    </div>
    <div class="report_setup">
      <div class="shop_switch">
        <div class="shop_require">
          <span>接收报告推送</span>
          <i-switch
            v-model="switch1"
            @on-change="change"
            size="default"
          />
        </div>
      </div>
      <div class="shop_switch">
        <div class="shop_require">
          <span>报告类型</span>
          <div @click="modal1 = true">
            <span>{{reportType}}</span>
            <Icon type="ios-arrow-forward" />
          </div>
        </div>
      </div>
      <div class="shop_switch">
        <div class="shop_require">
          <span>接收时间</span>
          <div>
            <span>每月1号</span>
            <Icon type="ios-arrow-forward" />
          </div>
        </div>
      </div>
    </div>
    <Modal
      v-model="modal1"
      title="选择报告类型"
      class="reportTypes"
      width="270px"
    >
      <p @click="()=>{changeReportType('月报')}">月报</p>
      <p @click="()=>{changeReportType('日报')}">日报</p>
      <p @click="()=>{changeReportType('周报')}">周报</p>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modal1: false,
      switch1: false,
      reportType: '月报'
    }
  },
  methods: {
    changeRemind() {
      this.$router.push('/reminder')
    },
    change(status) {
      // this.$Message.info('开关状态');
    },
    changeReportType(value) {
      this.reportType = value
      this.modal1 = false
    }
  }
}
</script>

<style lang='scss' scoped>
.shop {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.09);
  .shop-content {
    padding: 10px 15px;
  }
  .shop_card {
    height: 126px;
    background-color: #0175ff;
    border-radius: 6px;
    padding: 22px 10px;
    .img {
      width: 60px;
      height: 60px;
      border: 2px solid #fff;
      border-radius: 50%;
      float: left;
      margin-right: 20px;
      text-align: center;
      line-height: 50px;
      font-size: 40px;
      color: #fff;
    }
    .imginfo {
      width: 100%;
      font-size: 14px;
      color: #fff;
      p {
        margin-bottom: 8px;
      }
    }
  }
}
.shop_setup {
  margin-bottom: 10px;
  background-color: rgb(255, 255, 255);
}
.report_setup {
  // height: calc(100%-300px);
  height: -moz-calc(100% - 313px);
  height: -webkit-calc(100% - 313px);
  height: calc(100% - 313px);
  background-color: rgb(255, 255, 255);
}
.shop_switch {
  padding: 20px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  .shop_require {
    display: flex;
    justify-content: space-between;
  }
}
.reportTypes {
  text-align: center;
  p {
    height: 46px;
    line-height: 46px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  }
}
</style>

<template>
  <div class="reminder">
    <div class="report_setup">
      <div class="shop_switch">
        <div class="shop_require">
          <span>性别</span>
          <div @click="modal1 = true">
            <span>{{reportType}}</span>
            <Icon type="ios-arrow-forward" />
          </div>
        </div>
      </div>
      <div class="shop_switch">
        <div class="shop_require">
          <span>年龄</span>
          <div>
            <span>每月1号</span>
            <Icon type="ios-arrow-forward" />
          </div>
        </div>
      </div>
      <div class="shop_switch">
        <div class="shop_require">
          <span>到店次数大于</span>
          <div style="font-size:0px">
            <Button
              :disabled='number<1'
              @click="minus"
              class="minus"
            >-</Button>
            <Input
              type="number"
              v-model="number"
              style="width:40px"
              class="number"
            />
            <Button
              :disabled='number>99'
              @click="add"
              class="add"
            >+</Button>
          </div>
        </div>
      </div>
      <div style="margin:209px 30px 0px">
        <Button
          type="primary"
          shape="circle"
          style="width:100%;height:50px"
        >下一步</Button>
      </div>
    </div>
    <Modal
      v-model="modal1"
      title="选择性别"
      class="reportTypes"
      width="270px"
    >
      <p @click="()=>{changeReportType('全部')}">全部</p>
      <p @click="()=>{changeReportType('男')}">男</p>
      <p @click="()=>{changeReportType('女')}">女</p>
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
      number: 0,
      reportType: '全部'
    }
  },
  watch: {
    number(cur) {
      if (cur > 100) {
        this.number = 100
      }
      if (cur < 0) {
        this.number = 0
      }
    }
  },
  methods: {
    minus() {
      this.number--
    },
    add() {
      this.number++
    },
    changeRemind() {

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
.minus {
  border-radius: 4px 0px 0px 4px;
  height: 37px;
  line-height: 22px;
}
.add {
  border-radius: 0px 4px 4px 0px;
  height: 37px;
  line-height: 22px;
}
.shop {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.09);
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
  padding: 12px 15px 11px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  box-sizing: border-box;
  .shop_require {
    display: flex;
    justify-content: space-between;
    line-height: 37px;
    height: 37px;
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


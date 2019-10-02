<template>
  <div class="shop">
    <div class="login_header">
      <Icon
        type="md-close"
        size='14'
      />
      <h1>顾客详情</h1>
      <Icon
        type="ios-more"
        size='14'
      />
    </div>
    <div class="shop-content">
      <div class="shop_card">
        <div class="img">
          <p>z</p>
        </div>
        <div class="imginfo">
          <p>手机号：18321310000</p>
          <p>所属部门：浦东新区张江路旗舰店</p>
          <p>角色名称：店长</p>
          <p>到店次数：8次</p>
        </div>
      </div>
    </div>
    <div class="detail_record">
      <p>最近5次到店记录:</p>
      <ul>
        <li v-for="item in times"><span></span>{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      times: ['2019-09-25 20:12:56', '2019-09-25 20:12:56', '2019-09-25 20:12:56', '2019-09-25 20:12:56']
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
      width: 62px;
      height: 84px;
      border: 2px solid #fff;
      border-radius: 5px;
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
        height: 14px;
        line-height: 14px;
        margin-bottom: 10px;
      }
    }
  }
}
.login_header {
  display: flex;
  justify-content: space-between;
  padding: 0px 12px;
  background-color: #fff;
  height: 46px;
  line-height: 46px;
  h1 {
    font-size: 20px;
    color: rgb(0, 0, 0);
  }
  .ivu-icon {
    line-height: 46px;
  }
}
.detail_record {
  margin: 36px 15px 0px 15px;
  ul {
    list-style: none;
    margin-left: 20px;
    border-left: 2px dotted #ffb61b;
    li {
      padding-left: 25px;
      margin-bottom: 30px;
      line-height: 20px;
      height: 20px;
      position: relative;
      span {
        position: absolute;
        left: -6px;
        top: 0px;
        width: 10px;
        height: 10px;
        background-color: #ffb61b;
        border-radius: 50%;
      }
    }
  }
  p {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 25px;
  }
}
</style>

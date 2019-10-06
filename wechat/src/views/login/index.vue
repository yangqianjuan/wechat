<template>
  <div class='login_pagelogin_page'>
    <div class="loginFrom">
      <div class='titleArea rflex'>
        <span class='title'>
          <!-- <svg-icon icon-class='eye' /> -->
          <img
            src="../../image/logo.png"
            alt=""
          >
        </span>
        <h2>Hi，欢迎登录智慧门店</h2>
      </div>
      <Form
        :model='loginForm'
        :rules='loginRules'
        ref='loginForm'
        class='login-form'
      >
        <FormItem
          prop='username'
          class='login-item'
        >
          <Input
            name='username'
            type='text'
            v-model='loginForm.username'
            placeholder='请输入手机号码'
          ></Input>
        </FormItem>
        <FormItem
          prop='password'
          class='login-item'
        >
          <Input
            name='password'
            :type='pwdType'
            @keyup.enter.native='handleLogin'
            v-model='loginForm.password'
            placeholder='请输入密码'
          ></Input>
          <!-- <span
            class="show-pwd"
            @click="showPwd"
          >
            <svg-icon :icon-class="pwdType === 'password' ? 'eye' : 'eye-open'" />
          </span> -->
        </FormItem>
        <FormItem>
          <Button
            type='primary'
            :loading='loading'
            @click.native.prevent='handleLogin'
            class='submit_btn'
          >登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
// import { isvalidUsername } from '@/utils/validate'
// import { getWechatCode } from '@/api/account.js'
// import { setUserName } from '@/utils/auth'
// import axios from 'axios'

export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('用户名不能为空'))
      } else if (value.length > 40) {
        callback(new Error('用户名不能大于40位'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('密码不能为空'))
      } else if (value.length > 40) {
        callback(new Error('密码不能大于40位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        // username: 'admin',
        username: 'qianjuan.yang',
        // password: 'admin'
        password: 'f059'
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  mounted() {
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.getCode()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getCode() {
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe61439ad27bbf558&redirect_uri=${encodeURIComponent('http://dev.xmartmonkey.com/xm/sns/api/login')}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect&username=${this.loginForm.username}&password=${this.loginForm.password}`
      this.$router.push({ path: '/shop' })
    },
    // getUrl() {
    //   window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe61439ad27bbf558&redirect_uri=http://dev.xmartmonkey.com/xm/sns/api/login&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`
    // },
    extractQueryParams(url) {
      var queryParams = {}
      if (url.includes('?')) {
        var queryString = url.substr(url.indexOf('?') + 1)
        var pairs = queryString.split('&')
        for (var pair of pairs) {
          var splitArray = pair.split('=')
          var key = splitArray[0]
          var value = splitArray[1]
          if (value.indexOf('#') > -1) {
            value = value.substring(0, value.indexOf('#'))
          }

          queryParams[key] = value
        }
      }
      return queryParams
    }
  }
}
</script>
<style lang='scss' scoped>
.titleArea {
  h2 {
    margin: 16px auto 50px;
    font-size: 20px;
    color: #fff;
  }
}
.title {
  display: inline-block;
  height: 81px;
  width: 81px;
  border-radius: 50%;
  img {
    height: 81px;
    width: 81px;
    border-radius: 50%;
  }
}
.login_pagelogin_page {
  height: 100%;
  background: url("../../image/pic.png");
  background-size: cover;
  text-align: center;
}
.loginFrom {
  width: 84%;
  margin: 0 auto;
  padding: 50px 0px;
}
.ivu-btn-primary {
  height: 50px;
  width: 100%;
  border-radius: 50px;
}
</style>

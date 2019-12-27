<template>
	<view class="index">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
      <text class="title">{{description}}</text>
		</view>
    <HelloWorld :msg="isLogin ? user.username : '您未登录，请登录!'" />
    <view>
      <button type="primary" @click="login" v-if="!isLogin">登录</button>
      <button @click="logoutAction" v-if="isLogin">注销</button>
    </view>
	</view>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import HelloWorld from '../../components/HelloWorld.vue'

export default {
	data() {
		return {
		}
	},
  computed: {
    ...mapState('common', ['title', 'description']),
    ...mapState('user', ['isLogin', 'user'])
  },
	onLoad() {
    this.getCommonDataAction()
    
	},
	methods: {
    ...mapActions({
      getCommonDataAction: 'common/getCommonDataAction',
      loginAction: 'user/loginAction',
      logoutAction: 'user/logoutAction'
    }),
    login() {
      this.loginAction({
        username: 'admin',
        password: '123456'
      })
    }
	},
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
  display: block;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
  display: block;
}
</style>

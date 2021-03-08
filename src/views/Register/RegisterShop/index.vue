<template>
  <div class="registershop">
    <div class="register">
      <div class="register-top">
        <div class="progress-first">
          <span class="num">1</span>
          <div class="text active">验证手机号</div>
        </div>
        <div class="progress">
          <span class="num primary">2</span>
          <div class="text">填写店铺信息</div>
        </div>
      </div>
      <div class="content">
        <label>手机号：</label>
        <input
          type="text"
          placeholder="请输入你的手机号"
          v-model="phone"
          name="phone"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterShop",
};
</script>

<style lang="less" scoped>
</style>
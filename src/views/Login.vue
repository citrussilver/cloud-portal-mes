<template>
  <div>
      <div class="common-container">
          <div>
              <div style="height: 15rem;"></div>
              <div class="login-form">
                  <label class="m-label">로그인 화면</label>
                  <div class="m-tb-spacer"></div>
                  <div class="forms-flex">
                    <div class="col-wise" style="justify-content: normal; align-items: normal;">
                        <label for="">ID</label>
                        <div class="b-margin"></div>
                        <label for="">PW</label>
                    </div>
                    <div class="col-wise">
                        <input type="text" class="l-spacing">
                        <div class="b-margin"></div>
                        <input type="password" class="l-spacing">
                    </div>
                  </div>
                  <div class="m-tb-spacer"></div>
                  <button class="common-button l-spacing">로그인</button>
              </div>
              <div style="height: 25rem;"></div>
          </div>
          
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.m-label {
    font-size: 3rem;
}

.forms-flex {
    display: flex;
    align-items: center;
    justify-content: center;
}

.col-wise {
    display: flex;
    flex-direction: column;
}

.col-wise label {
    text-align: right;
}

.m-tb-spacer {
    margin-bottom: 4rem;
}
</style>
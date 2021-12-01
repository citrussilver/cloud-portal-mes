<template>
  <div>
      <div class="common-container">
          <div>
              <div style="height: 15rem;"></div>
              <div class="login-form login-lr-margin">
                  <div class="login-text-container login-colored-box-header">
                        <span class="header-text-span">MES 클라우드 포털</span>
                    </div>
                  <div class="forms-flex">
                    <!-- <div class="col-wise" style="justify-content: normal; align-items: normal;">
                        <label for="">ID</label>
                        <div class="b-margin"></div>
                        <label for="">PW</label>
                    </div> -->
                    <div class="col-wise">
                        <input type="text" placeholder="ID">
                        <div class="b-margin"></div>
                        <input type="password" placeholder="Password">
                        <div class="b-margin"></div>
                        <button class="common-button login-button">로그인</button>
                    </div>
                  </div>
                  <div id="join-member">
                      <label>회원가입</label>
                  </div>
                  <div class="m-tb-spacer"></div>
              </div>
              <div style="height: 25rem;"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Login",
    
}
</script>

<style>
.login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    border-radius: 3rem;
}

.m-label {
    font-size: 3rem;
}

.login-text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;
    height: 10rem;
    width: 80%;
}

.login-colored-box-header {
    background-color: #5a92c5;
    color: #fff;
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

/* .login-button {
    width: 55%;
} */

.col-wise input, .login-button {
    height: 5rem;
    padding-left: 1rem;
    border-radius: 5px;
}

.m-tb-spacer {
    margin-bottom: 4rem;
}

#join-member {
    margin-top: 3rem;
}

#join-member label {
    font-size: 2.5rem;
    font-weight: lighter;
}

</style>
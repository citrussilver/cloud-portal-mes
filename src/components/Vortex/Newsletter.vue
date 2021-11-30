<template>
  <section id="newsletter">

        <div class="container">

            <div class="row">

                <h3>Subscribe to get early access!</h3>

                <div class="form-container">

                    <form class="form-inline">

                        <input type="email" class="form-control" id="newsletter-form" placeholder="Email" required="required">

                        <button type="submit" class="btn btn-white">Subscribe</button>

                    </form>

                </div>

            </div>

        </div>

    </section>
</template>

<script>
export default {

}
</script>

<style>
#newsletter {
  background: #44c5ee;
  padding: 60px 0;
  text-align: center;
  color: #fff; }
  #newsletter .form-container {
    margin-top: 40px; }
    #newsletter .form-container .form-inline {
      left: 50px;
      position: relative; }
    #newsletter .form-container .form-control::-webkit-input-placeholder {
      color: #fff; }
    #newsletter .form-container .form-control:-moz-placeholder {
      color: #fff; }
    #newsletter .form-container .form-control::-moz-placeholder {
      color: #fff; }
    #newsletter .form-container .form-control:-ms-input-placeholder {
      color: #fff; }
    #newsletter .form-container .form-control {
      width: 50%;
      height: 50px;
      border-radius: 50px;
      border: 2px solid #fff;
      background: transparent;
      color: #fff; }
    #newsletter .form-container .btn {
      position: relative;
      right: 143px; }
</style>
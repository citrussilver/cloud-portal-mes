<template>
  <section id="contact" class="section-padding">

        <div class="container">

            <h2>Contact Us</h2>

            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>

            <p>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

        </div>

        <!-- Contact Info -->

        <div class="container contact-info">

            <div class="row">

                <div class="col-md-4">

                    <div class="icon-box">

                        <i class="material-icons">place</i>

                        <h4>Address</h4>

                        <p>PABox 13592, Lorem Street Ipsum Dolor, Victoria 8007, USA</p>

                    </div>

                </div>

                <div class="col-md-4">

                    <div class="icon-box">

                        <i class="material-icons">phone</i>

                        <h4>Call Us On</h4>

                        <p>1-834-527-6940</p>

                        <p>1-834-527-6940</p>

                    </div>

                </div>

                <div class="col-md-4">

                    <div class="icon-box">

                        <i class="material-icons">email</i>

                        <h4>Email us on</h4>

                        <p>lorem@xyz.com</p>

                        <p>lorem@xyz.com</p>

                    </div>

                </div>

            </div>

        </div>

        <!-- Google Map -->

        <div id="map"></div>

        <!-- Contact Form -->

        <div class="contact-forms">

            <div class="container">

                <h2>Drop us a Line</h2>

                <form class="contact-form">

                    <div class="col-md-6">

                        <div class="form-group">

                            <input type="text" class="form-control" placeholder="Full Name" required="required">

                        </div>

                        <div class="form-group">

                            <input type="email" class="form-control" placeholder="Email" required="required">

                        </div>

                    </div>

                    <div class="col-md-6">

                        <div class="form-group">

                            <textarea class="form-control" rows="3" placeholder="Message"></textarea>

                        </div>

                    </div>

                    <button type="submit" class="btn btn-blue">Send Message</button>

                </form>

            </div>

        </div>

    </section>
</template>

<script>
export default {

}
</script>

<style>
#contact {
  text-align: center; }
  #contact .contact-info {
    position: relative;
    top: 100px;
    z-index: 1;
    background: #44c5ee;
    box-shadow: 0px 0px 60px 0px rgba(68, 197, 238, 0.6);
    padding: 30px;
    color: #fff; }
    #contact .contact-info i {
      font-size: 46px; }
  #contact #map {
    width: 100%;
    height: 500px; }
  #contact .contact-forms {
    padding: 80px 0; }
    #contact .contact-forms h2 {
      margin-bottom: 40px; }
    #contact .contact-forms input:focus {
      border-color: #44c5ee; }
    #contact .contact-forms .form-control {
      font-size: 16px;
      padding: 20px 15px;
      color: #555;
      background-color: #fff;
      border-radius: 3px;
      border: 2px solid #999;
      height: 38px;
      box-shadow: none !important;
      margin: 30px 0; }
    #contact .contact-forms textarea {
      height: 118px !important;
      resize: none;
      margin: 0; }
</style>
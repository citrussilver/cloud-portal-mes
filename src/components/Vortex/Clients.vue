<template>
  <section id="clients" class="section-padding">

        <div class="container">

            <div class="row">

                <h2>Clients Trust Us</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, optio.</p>

                <!--// Clients Images //-->

                <div class="clients-images">

                    <div id="owl-clients">

                        <div class="item"><img src="assets/img/clients/c_logo01.png" class="center-block" alt="client"></div>

                        <div class="item"><img src="assets/img/clients/c_logo02.png" class="center-block" alt="client"></div>

                        <div class="item"><img src="assets/img/clients/c_logo03.png" class="center-block" alt="client"></div>

                        <div class="item"><img src="assets/img/clients/c_logo04.png" class="center-block" alt="client"></div>

                        <div class="item"><img src="assets/img/clients/c_logo05.png" class="center-block" alt="client"></div>

                        <div class="item"><img src="assets/img/clients/c_logo06.png" class="center-block" alt="client"></div>

                    </div>

                </div>

                <!--// Clients Testimonials //-->

                <div id="owl-testimonials">

                    <div class="item">

                        <i class="material-icons">mood</i>

                        <p class="quote">Vivamus quam neque, aliquet ac faucibus ut, vestibulum. Nulla quis laoreet diam. Donec sed egestas ex, nec facilisis ante. Vivamus imperdiet odio. Cras luctus interdum sodales. Quisque quis odio dui.</p>

                        <h4>-John Doe, Company inc.</h4>

                    </div>

                    <div class="item">

                        <i class="material-icons">mood</i>

                        <p class="quote">Vivamus quam neque, aliquet ac faucibus ut, vestibulum. Nulla quis laoreet diam. Donec sed egestas ex, nec facilisis ante. Vivamus imperdiet odio. Cras luctus interdum sodales. Quisque quis odio dui.</p>

                        <h4>-Jarl Doe, Company inc.</h4>

                    </div>

                    <div class="item">

                        <i class="material-icons">mood</i>

                        <p class="quote">Vivamus quam neque, aliquet ac faucibus ut, vestibulum. Nulla quis laoreet diam. Donec sed egestas ex, nec facilisis ante. Vivamus imperdiet odio. Cras luctus interdum sodales. Quisque quis odio dui.</p>

                        <h4>-Adam Doe, Company inc.</h4>

                    </div>

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
#clients {
  text-align: center; }
  #clients #owl-clients {
    margin: 60px 0; }
    #clients #owl-clients .owl-pagination {
      display: none; }
  #clients #owl-testimonials {
    margin: 60px 0; }
    #clients #owl-testimonials .owl-pagination .owl-page.active span {
      background: #f23c7e; }
    #clients #owl-testimonials .owl-pagination .owl-page span {
      border: 2px solid #f23c7e;
      border-radius: 50%;
      background: transparent;
      opacity: 1;
      -webkit-transition: all .3s ease-in-out;
              transition: all .3s ease-in-out; }
    #clients #owl-testimonials i {
      font-size: 48px;
      color: #f23c7e; }
    #clients #owl-testimonials p {
      width: 50%;
      margin: 25px auto; }
    #clients #owl-testimonials h3 {
      color: #fff; }
</style>
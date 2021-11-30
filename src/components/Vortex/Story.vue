<template>
  <section id="story">
        <div class="container-fluid">
            <div class="row">
                <!-- Img -->
                <div class="col-md-6 story-bg">
                    
                </div>
                <!-- Story Caption -->
                <div class="col-md-6">
                    <div class="story-content">
                        <h2>Our Success Story</h2>
                        <p class="story-quote">
                            " Success is finding satisfaction in giving a little more than you take."
                        </p>
                        <div class="story-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis amet consequatur incidunt, alias odit quisquam laborum nemo nisi, vel, tempora eligendi enim voluptate accusamus libero voluptas commodi ex rerum dolorem!</p>
                        </div>
                        <a href="#" class="btn btn-white">Learn More</a>
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
#story {
  background: #44c5ee; }
  #story .col-md-6 {
    padding: 0; }
  #story .story-bg {
    /* background-image: url(../img/success.jpg); */
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 480px; }
  #story .story-content {
    padding: 40px;
    color: #fff; }
    #story .story-content .story-quote {
      font-size: 24px;
      margin: 35px 0;
      font-style: italic; }
    #story .story-content .btn {
      margin-top: 35px; }
</style>
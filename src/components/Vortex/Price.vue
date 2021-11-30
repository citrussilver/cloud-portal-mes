<template>
    <section id="price" class="section-padding">
            <div class="container">
                <h2>MES 요금 체계</h2>
                <div class="m-tb-spacer"></div>
                <p>클라우드 MES 는 월 비용 형태로 서비스를 제공 합니다</p>
                <p>월 생산량에 따라 서비스 요금 체계가 다르며, 월 생산량에 해당하는 서비스 수수료를 지불 하면 됩니다. </p>
                <div class="row">
                    <!-- Pricing Start Here -->
                    <div class="pricing-container">
                        <div class="col-md-3">
                            <!--== Basic 1 ==-->
                            <div class="plan">
                                <div class="pricing-header basic-pricing">
                                    <h3 style="color: #fff;">Basic 1</h3>
                                    <h3>
                                        <span class="currency" style="color: #fff;">₩</span>
                                        <span class="amount">500,000</span>
                                        <!-- <span class="period">/mo</span> -->
                                    </h3>
                                </div>
                                <div class="pricing-body">
                                    <ul class="list-unstyled">
                                        <li class="kr-desc">월간 생산 수량</li>
                                        <li class="kr-desc"><i class="material-icons">done</i><b>50,000 EA</b></li>
                                        <!-- <li><i class="material-icons">done</i><b>265MB</b> Memory</li>
                                        <li><i class="material-icons">done</i><b>1</b> User</li>
                                        <li><i class="material-icons">done</i><b>1</b> Website</li>
                                        <li><i class="material-icons">done</i><b>1</b> Domain</li>
                                        <li><i class="material-icons">done</i><b>Unlimeted</b> Bandwitch</li>
                                        <li><i class="material-icons">done</i><b>24/7</b> Support</li> -->
                                    </ul>
                                </div>
                                <div class="pricing-footer">
                                    <a href="#" class="btn btn-blue">Select</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <!--== Basic 2 ==-->
                            <!-- set class to "plan active" for Blue highlighting -->
                            <div class="plan">
                                <div class="pricing-header basic-pricing">
                                    <h3 style="color: #fff;">Basic 2</h3>
                                    <h3>
                                        <span class="currency" style="color: #fff;">₩</span>
                                        <span class="amount" style="color: #fff;">800,000</span>
                                        <!-- <span class="period">/mo</span> -->
                                    </h3>
                                </div>
                                <div class="pricing-body">
                                    <ul class="list-unstyled">
                                        <li class="kr-desc">월간 생산 수량</li>
                                        <li><i class="material-icons">done</i><b>100,000 EA</b></li>
                                        <!-- <li><i class="material-icons">done</i><b>512MB</b> Memory</li>
                                        <li><i class="material-icons">done</i><b>3</b> User</li>
                                        <li><i class="material-icons">done</i><b>5</b> Website</li>
                                        <li><i class="material-icons">done</i><b>7</b> Domain</li>
                                        <li><i class="material-icons">done</i><b>Unlimeted</b> Bandwitch</li>
                                        <li><i class="material-icons">done</i><b>24/7</b> Support</li> -->
                                    </ul>
                                </div>
                                <div class="pricing-footer">
                                    <a href="#" class="btn btn-blue">Select</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <!--== Standard ==-->
                            <div class="plan">
                                <div class="pricing-header sta-premium">
                                    <h3 style="color: #fff;">Standard</h3>
                                    <h3>
                                        <span class="currency" style="color: #fff;">₩</span>
                                        <span class="amount" style="color: #fff;">1,000,000</span>
                                        <!-- <span class="period">/mo</span> -->
                                        </h3>
                                        </div>
                                    <div class="pricing-body">
                                        <ul class="list-unstyled">
                                            <li>월간 생산 수량</li>
                                            <li><i class="material-icons">done</i><b>150,000 EA</b></li>
                                        </ul>
                                    </div>
                                <div class="pricing-footer">
                                    <a href="#" class="btn btn-blue">Select</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <!--== Premium ==-->
                            <div class="plan">
                                <div class="pricing-header sta-premium">
                                    <h3 style="color: #fff;">Premium</h3>
                                    <h3>
                                        <span class="currency">₩</span>
                                        <span class="amount" style="color: #fff;">1,500,000</span>
                                        <!-- <span class="period">/mo</span> -->
                                        </h3>
                                        </div>
                                    <div class="pricing-body">
                                        <ul class="list-unstyled">
                                            <li>월간 생산 수량</li>
                                            <li><i class="material-icons">done</i><b>150,000+ EA</b></li>
                                        </ul>
                                    </div>
                                <div class="pricing-footer">
                                    <a href="#" class="btn btn-blue">Select</a>
                                </div>
                            </div>
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

#price {
  text-align: center; }
  #price .plan {
    background: #fff;
    box-shadow: 0px 0px 60px 0px rgba(213, 216, 224, 0.7); }
  #price .active {
    -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
            transform: scale(1.05);
    background-color: #fff;
    box-shadow: 0px 0px 60px 0px rgba(68, 197, 238, 0.6); }
  #price .pricing-container {
    margin-top: 80px; 
    }
    #price .pricing-container h2 {
      color: #496174;
      margin-bottom: 40px; }
    #price .pricing-container h3 {
      font-size: 24px;
      color: #f23c7e;
      margin-bottom: 0; }
    #price .pricing-container h2,
    #price .pricing-container h3 {
      text-transform: none; }
    #price .pricing-container .pricing-header {
      padding: 30px 0; 
      }
      #price .pricing-container .pricing-header .currency {
        position: relative;
        font-weight: 700;
        font-size: 3rem;
        color: #fff;
        /* color: #496174; */
        }
      #price .pricing-container .pricing-header .amount {
        /* color: #496174; */
        color: #fff;
        font-size: 3.5rem;
        font-weight: 700; }
      #price .pricing-container .pricing-header .period {
        font-size: 22px;
        font-weight: 300;
        color: #496174;
        position: relative;
        top: 12px; }
    #price .pricing-container ul {
      padding: 20px 0; }
      #price .pricing-container ul li {
        font-size: 2.5rem;
        letter-spacing: .1em;
        margin: 15px 0; }
        #price .pricing-container ul li i {
          color: #f23c7e;
          margin-right: 10px; }
    #price .pricing-container .pricing-footer {
      padding: 25px 0; }

.basic-pricing {
    background-color: #00b0f0;
}

.sta-premium {
    background-color: #4e467e;
}

.plan-text {
    color: #fff;
}

.kr-currency {
    font-size: 3.5rem;
    color: #fff;
}
</style>
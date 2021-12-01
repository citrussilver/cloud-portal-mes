<template>
  <nav class="navbar navbar-default navbar-fixed bootsnav navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">
            <div class="container">
                <!-- Start Header Navigation -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i class="fa fa-bars"></i>
                    </button>
                    <a class="navbar-brand" href="#brand">
                        <img src="assets/img/logo.png" class="logo" alt="MES">
                    </a>
                </div>
                <!-- End Header Navigation -->
                
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="navbar-menu">
                    <ul class="nav navbar-nav navbar-right">
                        <!-- <li><router-link to="/home">Home</router-link></li> -->
                        <li class="scroll"><a href="#home">Home</a></li>
                        <li class="scroll"><a href="#about">제품소개</a></li>
                        <li class="scroll"><router-link to="/price">서비스</router-link></li>
                        <li>
                            <div class="dropdown" style="position: relative; bottom: -3.25rem; margin: 0 1rem;">
                                <li class="scroll">마이페이지</li>
                                <div class="dropdown-content">
                                    <!-- Fee / Expense details (user) -->
                                    <router-link to="/userexpense">요금내역(사용자)</router-link>
                                    <!-- Modify Member Information (User) -->
                                    <router-link to="/userinfoedit">회원정보수정(사용자)</router-link>
                                    <!-- Exit Service (user) -->
                                    <router-link to="/exitsvc">서비스탈퇴(사용자)</router-link>
                                    <!-- Expense details (administrator) -->
                                    <router-link to="/adminexpense">요금내역(관리자)</router-link>
                                    <!-- Enterprise status (Manager) -->
                                    <router-link to="/enterprisestats">업체현황(관리자)</router-link>
                                </div>
                            </div>
                        </li>
                        <!-- <li class="scroll"><a href="#team">Team</a></li>
                        <li class="scroll"><a href="#clients">Clients</a></li>
                        <li class="scroll"><a href="#contact">Contact</a></li> -->
                        <li class="scroll">
                            <div class="dropdown custom-dropdown">
                                <li class="scroll">About us</li>
                                <div class="dropdown-content">
                                    <!-- About Us - Overview -->
                                    <router-link to="/about-us">회사소개</router-link>
                                    <!-- About Us - Contact Us -->
                                    <router-link to="/contact">오시는길</router-link>
                                </div>
                            </div>
                        </li>
                        <li class="scroll"><router-link to="/addmember">회원가입</router-link></li>
                        <li class="scroll"><router-link to="/login">로그인</router-link></li>
                        <!-- <li class="button-holder">
                            <button type="button" class="btn btn-blue navbar-btn" data-toggle="modal" data-target="#SignIn">Sign in</button>
                        </li> -->
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
        </nav>
</template>

<script>
export default {

}
</script>

<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
    background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
    display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}

#my-page-style-link {
    color: #6f6f6f;
    font-weight: 600;
}
</style>
<template>
  <div class="home">
    <!-- Navigation -->
    <nav class="navbar fixed-top navbar-toggleable-md navbar-inverse" id="mainNav">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu <i class="fa fa-bars"></i>
        </button>
        <a class="navbar-brand page-scroll" href="#app"><img src="../assets/logo.svg"></a>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#services">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#portfolio">Screenshots</a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#about">Getting started</a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#team">Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Header -->
    <header>
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in">{{ appName }}</div>
          <div class="intro-heading">A new way to share your videos</div>
          <a href="#services" class="page-scroll btn btn-xl">Tell Me More</a>
          <a href="https://github.com/mmorainville/netsix/releases/latest" target="_blank" class="page-scroll btn btn-xl"><i class="fa fa-download fa-fw" aria-hidden="true"></i> Download</a>
        </div>
      </div>
    </header>

    <!-- Services -->
    <services></services>

    <!-- Portfolio Grid -->
    <portfolio-grid></portfolio-grid>

    <!-- About -->
    <about></about>

    <!-- Team -->
    <team></team>

    <!-- Contact -->
    <contact></contact>

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <span class="copyright">Copyright &copy; {{ appName }} 2017</span>
          </div>
          <div class="col-md-4">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item"><a @click="trackClick" :href="paypalLink" target="_blank" title="Donate"><i class="fa fa-paypal"></i></a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <!--<ul class="list-inline quicklinks">
              <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
              <li class="list-inline-item"><a href="#">Terms of Use</a></li>
            </ul>-->
            <span class="copyright">We will not be responsible for any devious usage of the app.</span>
          </div>
        </div>
      </div>
    </footer>

    <!-- Portfolio Modals -->

    <portfolio-modals></portfolio-modals>
  </div>
</template>

<script>
  import Services from './Home/Services'
  import PortfolioGrid from './Home/PortfolioGrid'
  import About from './Home/About'
  import Team from './Home/Team'
  import Contact from './Home/Contact'
  import PortfolioModals from './Home/PortfolioModals'

  export default {
    name: 'home',
    components: {
      PortfolioModals, Contact, Team, About, PortfolioGrid, Services
    },
    data () {
      return {
        appName: 'Netsix',
        paypalLink: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MRDR2837QXHK8'
      }
    },
    methods: {
      trackClick () {
        window.ga('send', 'event', 'outbound', 'click', this.paypalLink)
      }
    }
  }
</script>

<style scoped>
  .navbar-brand {
    font-size: initial;
  }

  .navbar-brand img {
    width: 32px;
  }
</style>

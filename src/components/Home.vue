<template>
  <div class="home">
    <!-- Navigation -->
    <nav class="navbar fixed-top navbar-toggleable-md navbar-inverse" id="mainNav">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu <i class="fa fa-bars"></i>
        </button>
        <a class="navbar-brand page-scroll" href="#page-top">Start Bootstrap</a>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#portfolio">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#about">About</a>
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
          <div class="intro-lead-in">Welcome To Our Studio!</div>
          <div class="intro-heading">It's Nice To Meet You</div>
          <a href="#services" class="page-scroll btn btn-xl">Tell Me More</a>
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
            <span class="copyright">Copyright &copy; Your Website 2017</span>
          </div>
          <div class="col-md-4">
            <ul class="list-inline social-buttons">
              <li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a>
              </li>
              <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a>
              </li>
              <li class="list-inline-item"><a href="#"><i class="fa fa-linkedin"></i></a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <ul class="list-inline quicklinks">
              <li class="list-inline-item"><a href="#">Privacy Policy</a>
              </li>
              <li class="list-inline-item"><a href="#">Terms of Use</a>
              </li>
            </ul>
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
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

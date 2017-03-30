<template>
  <section id="portfolio" class="bg-faded">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Screenshots</h2>
          <h3 class="section-subheading text-muted">See what it looks like!</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img src="../../assets/img/screenshot-connected-01.png" class="img-fluid" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>Collections</h4>
            <p class="text-muted">Lists of videos you want to share or that are available for you to watch.</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img src="../../assets/img/screenshot-connected-03.png" class="img-fluid" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>Streaming</h4>
            <p class="text-muted">Choose a video and watch it in streaming in a real peer-to-peer manner.</p>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img src="../../assets/img/screenshot-connected-02.png" class="img-fluid" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>Chat</h4>
            <p class="text-muted">You can also chat with four friends in a peer-to-peer encrypted way.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'portfolio-grid'
  }
</script>

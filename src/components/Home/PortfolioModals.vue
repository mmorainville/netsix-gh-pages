<template>
  <div>
    <!-- Modal 1 -->
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl">
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2>Netsix</h2>
                  <p class="item-intro text-muted">Main view of the app.</p>
                  <img class="img-fluid d-block mx-auto" src="../../assets/img/screenshot-connected.png" alt="">
                  <p>Here you can watch videos from your friends' collections.</p>
                  <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'portfolio-modals'
  }
</script>

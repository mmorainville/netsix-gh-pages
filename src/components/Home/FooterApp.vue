<template>
<footer>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <span class="copyright">Copyright &copy; Netsix.io 2017</span>
            </div>
            <div class="col-md-4">
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick">
                <input type="hidden" name="hosted_button_id" value="MRDR2837QXHK8">
                <input type="image" src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal, le réflexe sécurité pour payer en ligne">
                <img alt="" border="0" src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif" width="1" height="1">
              </form>
            </div>
            <div class="col-md-4">
                <span class="copyright">We could not be considered responsible of the devious usage of the App.</span>
            </div>
        </div>
    </div>
</footer>
</template>
<script>
export default {
  name: 'footer-app'
}
</script>

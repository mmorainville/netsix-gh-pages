<template>
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Contact Us</h2>
          <h3 class="section-subheading text-muted">Please use the contact form for any questions or remarks.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <form action="https://formspree.io/netsix.io@gmail.com" method="POST" name="sentMessage" id="contactForm" novalidate>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input v-model="name" type="text" name="name" class="form-control" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name.">
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input v-model="email" type="email" name="_replyto" class="form-control" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address.">
                  <p v-if="email && !isValidEmail" class="help-block text-danger">Please enter a valid email address.</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea v-model="message" name="message" class="form-control" placeholder="Your Message *" id="message" required data-validation-required-message="Please enter a message."></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="col-lg-12 text-center">
                <div id="success"></div>
                <button type="submit" class="btn btn-xl" :disabled="!canSubmit()">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'contact',
    data () {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    computed: {
      isValidEmail: function () {
        let regex = new RegExp('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}')
        return regex.test(this.email)
      }
    },
    methods: {
      canSubmit () {
        return this.name && this.isValidEmail && this.message
      }
    }
  }
</script>

<style scoped>
  .section-subheading.text-muted {
    color: #eceeef !important;
  }
</style>

<template>
  <section id="team" class="bg-faded">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">The Team</h2>
          <h3 class="section-subheading text-muted">"If it works, refactor it !"</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="team-member">
            <img src="../../assets/img/team/mathieu.jpg" class="mx-auto rounded-circle" alt="">
            <h4>Mathieu Morainville</h4>
            <p class="text-muted">Web Developer | JavaScript-Man</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item"><a @click="trackClick(githubMathieu)" :href="githubMathieu" target="_blank"><i class="fa fa-github"></i></a></li>
              <li class="list-inline-item"><a @click="trackClick(linkedinMathieu)" :href="linkedinMathieu" target="_blank"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="team-member">
            <img src="../../assets/img/team/sylver.png" class="mx-auto rounded-circle" alt="">
            <h4>Sylver-John Imhoff</h4>
            <p class="text-muted">Web Developer | Golang Lover</p>
            <ul class="list-inline social-buttons">
              <li class="list-inline-item"><a @click="trackClick(githubSylver)" :href="githubSylver" target="_blank"><i class="fa fa-github"></i></a></li>
              <li class="list-inline-item"><a @click="trackClick(linkedinSylver)" :href="linkedinSylver" target="_blank"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 offset-lg-2 text-center">
          <p class="large text-muted">We are two young web developers who want to make a better world.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'team',
    data () {
      return {
        githubMathieu: 'https://github.com/mmorainville',
        linkedinMathieu: 'https://www.linkedin.com/in/mathieu-morainville-4b72757a',
        githubSylver: 'https://github.com/sylver-john',
        linkedinSylver: 'https://fr.linkedin.com/in/sylver-john-imhoff-975ba595'
      }
    },
    methods: {
      trackClick (url) {
        window.ga('send', 'event', 'outbound', 'click', url)
      }
    }
  }
</script>

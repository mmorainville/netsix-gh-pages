<template>
  <div id="app">
    <nav-app></nav-app>
    <headers-app></headers-app>
    <service></service>
    <images-app></images-app>
    <about></about>
    <team></team>
    <contact></contact>
    <footer-app></footer-app>
  </div>
</template>

<script>
import HeadersApp from './components/HeadersApp'
import NavApp from './components/NavApp'
import Service from './components/Service'
import ImagesApp from './components/Images'
import About from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'
import FooterApp from './components/FooterApp'
export default {
  name: 'app',
  components: {
    HeadersApp,
    NavApp,
    Service,
    ImagesApp,
    About,
    Team,
    Contact,
    FooterApp
  }
}
</script>

<style>
#app {

}
</style>

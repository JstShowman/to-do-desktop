<template>
  <div id="app">
    <div class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">Probb</a>
        </div>

        <div class="nav-right nav menu">

          <router-link to="/" class="nav-item r-item">Теория</router-link>
          <router-link to="Practice" class="nav-item r-item">Практика</router-link>
          <router-link to="Tests" class="nav-item r-item">Тесты</router-link>
          <router-link to="Tests" class="nav-item r-item">Экстра</router-link>
          <router-link to="Tests" class="nav-item r-item">Информация</router-link>
        
        <div class="nav-item">
          <p class="control">
            <a class="button is-primary is-outlined">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <span>Join Now</span>
            </a>
          </p>
        </div>


          
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="sass">

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

</style>

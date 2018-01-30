<template>
  <div class="universe">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="card" style="width: 450px;">
          <div class="card-header" style="text-align: left">
            Insert your name.
          </div>
          <div class="card-body">
            <div class="input-group mb-3" style="margin-top: 15px">
              <div class="input-group-prepend" >
                <span class="input-group-text" id="basic-addon1">Name</span>
              </div>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Submit</button>
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
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.universe {
  min-height: 10%;
  min-height: 70vh;
  display: flex;
  align-items: center;
}
</style>

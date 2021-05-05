<template>
  <div id="pass-generator">
    <h1>Password Generator Tool</h1>
    <div class="password">
      <span class="copied">Copied</span>
      <p id="password"> {{ getPass }} </p>
      <button class="btn-gen" @click="passGenerate">Generate</button>
    </div>
    <div class="controls">
      <h3> Password Length </h3>
      <input @input="range" type="range" id="range" min="1" max="10" step="1" :value="getRangeVal">
      <div class="info">
        <span>4</span>
        <span>8</span>
        <span>12</span>
        <span>16</span>
        <span>20</span>
        <span>24</span>
        <span>28</span>
        <span>32</span>
        <span>36</span>
        <span>40</span>
      </div>
    </div>
    <div class="options">
      <button class="btn-copy-pass" @click="copyPassword">Copy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "passGenerator",
  computed: {
    getPass() {
      return this.$store.getters.getPass;
    },
    getRangeVal() {
      return this.$store.getters.getRangeVal
    }
  },
  methods: {
    passGenerate() {
      return this.$store.commit("passGenerate");
    },
    range(e) {
      return this.$store.commit("range", e.target.value)
    },
    copyPassword() {
      let password = document.querySelector("#password");
      let copied = document.querySelector(".copied");
      copied.style.cssText = 'top: -40px; opacity: 1;'
      setTimeout(function() {
        copied.style.cssText = 'top: 0; opacity: 0;'
      }, 1000)
      return this.$store.commit("copyPassword", password);
    }
  }
}
</script>

<style scoped lang="scss">
$main-margin: 40px;

  #pass-generator {
    width: 830px;
    margin: 50px auto;
    text-align: center;
    color: #333;
    h1 {
      font-size: 2.5rem;
    }
    .password {
      margin: $main-margin 0;
      position: relative;
      .copied {
        position: absolute;
        top: 0;
        left: 20px;
        display: inline-block;
        background-color: #333;
        color: #FFF;
        padding: 3px 15px;
        border-radius: 6px;
        font-weight: bold;
        letter-spacing: 2px;
        opacity: 0;
        transition: all .5s cubic-bezier(0.19, 1, 0.22, 1);
        z-index: -1;
      }
      #password {
        padding: 20px;
        font-size: 30px;
        background-color: #FFF;
        box-shadow: 0 5px 10px rgba(0,0,0, .1);
        font-family: sans-serif;
        border-left: 3px solid #1771f1;
      }
      .btn-gen {
        @extend %btnStyle;
        margin-top: $main-margin;
      }
    }
    .controls {
      padding: 20px;
      box-shadow: 0 5px 10px rgba(0,0,0, .1);
      border-left: 3px solid #1771f1;
      background-color: #FFF;
      h3 {
        text-transform: uppercase;
      }
      #range {
        margin: 30px 0;
        appearance: none;
        background-color: #EEE;
        text-align: center;
        width: 92%;
        height: 5px;
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid rgba(0,0,0, .1);
        &::-webkit-slider-thumb {
          padding: 15px;
          border-radius: 50%;
          box-shadow: 0 4px 7px rgba(0,0,0, .1);
        }
      }
      .info {
        display: flex;
        margin: 0 auto;
        justify-content: space-around;
        position: relative;
        z-index: 1;
        span {
          border-radius: 50%;
          width: 27px;
          height: 27px;
          line-height: 27px;
          font-size: 15px;
          display: inline-block;
          color: #333;
          &::before {
            position: absolute;
            content: "";
            height: 2.5px;
            top: 30px;
            z-index: -1;
            opacity: .6;
          }
          &:nth-child(2):before {
            width: 100px;
            left: 30px;
            background-color: red;
          }
          &:nth-child(4):before {
            width: 180px;
            left: 130px;
            background-color: blue;
          }
          &:nth-child(8):before {
            width: 450px;
            left: 310px;
            background-color: green;
          }
        }
      }
    }
    .options {
      display: flex;
      justify-content: space-around;
      margin-top: $main-margin;
      .btn-copy-pass {
        @extend %btnStyle;
      }
      .btn-save-pass {
        @extend %btnStyle;
      }
    }

%btnStyle {
  position: relative;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 30px;
  font-size: 18px;
  background-color: #1771f1;
  border-radius: 5px;
  color: #FFF;
  transition: all .2s ease;
  &::before {
    position: absolute;
    top: 3px;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: #0e4086;
    z-index: -1;
  }
  &:active {
    transform: translate(0, 0);
  }
}

  }
</style>
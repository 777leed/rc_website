<template>
    <transition name="fade">
      <div id="preloader" v-if="!isLoaded">
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    data: () => {
      return {
        isLoaded: false
      };
    },
    mounted() {
      // Simulate a 3-second delay before hiding the loader
      setTimeout(() => {
        this.isLoaded = true;
      }, 1000); // 3000 milliseconds = 3 seconds
    }
  };
  </script>
  
  <style>
  #preloader {
    background: #fff url("../assets/logo-01.svg") no-repeat center center;
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 100;
    background-size: 10%;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  
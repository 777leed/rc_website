<template>
    <footer>
        <div class="line"></div>
        <span class="fancy">Partner With Us!</span>
        <div class="partners">
           <img src="../assets/Partners/AEFDS.png" alt="">         
           <img src="../assets/Partners/AJSFD.png" alt="">         
           <img src="../assets/Partners/AMEDC.png" alt="">         
           <img src="../assets/Partners/BTC.png" alt="">         
           <img src="../assets/Partners/CFF.png" alt="">         
           <img src="../assets/Partners/ISDRAM.png" alt="">         
           <img src="../assets/Partners/UOEL.png" alt="">         
        </div>
        <span class="small">©2023 by Resilient Communities</span>
        <div class="line"></div>

      </footer>
</template>

<style>
footer {
    font-family: 'Quicksand', sans-serif;
    width: 100%;
    background-color: #c8af99;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 30vh;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: white;
  }

  span.fancy {
    font-weight: 500;
    font-size: x-large;
    margin-top: 15px;
  }

  span.small {
    font-size: smaller;
    margin-bottom: 15px;
  }


  .partners {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3%;
    padding: 1% 0;
  }
  
  footer .partners img {
    width: 80px;
  }
  
</style>
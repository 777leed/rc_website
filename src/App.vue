<template>
  <PageLoader></PageLoader>
  <div id="app">
    <HeaderComp></HeaderComp>
    <router-view/>
    <FooterComp></FooterComp>

  </div>
</template>

<script>
// window.onload = function() {
//   const greenContainer = document.querySelector('.green-container');

//   window.addEventListener('scroll', () => {
//     const scrollPosition = window.pageYOffset;
//     const zoomFactor = 1 + scrollPosition / 1000;

//     greenContainer.style.backgroundSize = `${zoomFactor * 100}% auto`;
//   });
// };
import PageLoader from '../src/components/PageLoader.vue';
import FooterComp from './components/FooterComp.vue';
import HeaderComp from './components/HeaderComp.vue';
  export default {
    components: {
      PageLoader,
      FooterComp,
      HeaderComp
    }, 
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&family=Roboto+Serif:opsz,wght@8..144,300;8..144,400;8..144,500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');

body, html {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}



/* Scroll bar stylings */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--lightestgrey); 
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #1F5A2D; 
}

* {
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  color: black;
}

header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15%;
  min-height: 15vh;

}

.logo img {
  width: 80px;
  height: 80px;
  max-width: 90%;
  max-height: 90%;
}



.logo {
  display: flex;
  align-items: center;
  gap: 1%;
  margin-left: 3%;
  width: 20%;
  height: 100%;
}

.logo div {
  display: flex;
  flex-direction: column;
}


nav {
  margin-right: 3%;
  width: 70%;
}

nav ul.nav {
  display: flex;
  justify-content: flex-end;
  gap: 5px;
}

nav ul li.navelem {
  display: inline-block;
  margin: 0 8px;
  position: relative;
}



nav ul li.navelem a {
font-weight: 400;  

}




a.active {
  font-size: large;
  color: black;
}

body > header > nav > ul > li > a.inactive {
  color: grey;
  transition: color 0.3s ease-in-out; /* Add transition */


}

body > header > nav > ul > li > a.inactive:hover {
  color: black;
  animation: colorChange 0.8s ease forwards;

}
a.active::after {
  content: "";
  display: block;
  width: 50%;
  border-bottom: 2px solid #1F5A2D;
}
/* a.active:hover,
nav ul li a:hover {
border-bottom: 2px solid #1F5A2D;
} */

nav ::selection {
  background-color: transparent;
  color: black; /* or any other color you want for the selected text */
}


.dropdown {
  position: relative
}


/* Dropdown styles */
.dropdown-content {
  border-top: 2px solid #1F5A2D;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  z-index: 1;
  top: calc(100% + 2px);
  left: 0;
  min-width: 250px;
  /* background-color: #1F5A2D; */
}

.dropdown-content li {
  line-height: 40px;
  font-size: small;
  text-align: left;
}

nav ul li.navelem:hover .dropdown-content {
  display: block;
  animation: fadeIn 0.3s ease-in-out forwards;

}
@keyframes colorChange {
  from {
      color: grey;
  }
  to {
      color: black;
  }
}

@keyframes fadeIn {
from {
  opacity: 0;
  transform: translateY(-10px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
}

.sm-links {
  width: 10%;
  display: flex;
  gap: 15%;
  align-items: center;
  justify-content: flex-end;
  margin-right: 3%;
}

.sm-links img {
  width: 25px;
}


.header-text {
  color: white;
  text-shadow: -1px 2px 2px silver;
  text-align:center;
}

h1.header-text {
  font-weight: 400;
  font-size: 3em;
  padding-top: 20vh;
}
p.header-text {
  font-size: 1em;
}


.content {
  display: flex;
  flex: 1;
  background-color: #667f62;
  text-align: center;
  padding-top: 50px;
  justify-content: baseline;
  align-items: center;
  flex-direction: column;
  gap: 2%;
  min-height: 70vh;
}

.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.parallax {
    background-image: url("./assets/bg.jpg");
    flex: 1;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}


.normalflex {
  display: flex;
  column-gap: 20%;
}
.normalflex a img {
  width: 25px;
}

.content h1, .content span, span a {
  color: white;
  text-align: center;

}

input[type=button] {
  background-color: #394737;
  padding: 2%;
  color: white;
  border: 1px solid burlywood;
  cursor: pointer;
  font-size: large;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-right: 3%;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #1F5A2D;
  margin: 3px 0;
}

/* Media query for small screens */
@media screen and (max-width: 987px) {       
.container {
  line-height: 25px;
}
  .nav-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #f9f9f9;
      border-top: 2px solid #1F5A2D;
      min-width: 250px;
      z-index: 1;
  }
  .sm-links {
      display: none;
  }

  .hamburger {
      display: flex;
  }

  .nav-menu.active {
      display: block;
  }
}


h1,h2,h3 {
  padding: 0;
}


/* About us page */

.green-container {
  width: 100%; /* Adjust to your preferred width */
  height: 55vh;
  min-height: 55VH;
  position: relative;
  border-bottom: 5px solid #1F5A2D;
  border-top: 5px solid #1F5A2D;
  background: linear-gradient(rgba(240, 237, 238, 0.801), rgba(245, 242, 243, 0.596)), url('./assets/bg22.jpg');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: 100% auto;
  background-position: center center;
  transition: background-size 0.5s ease-in-out;
}


.green-container-b {
  height: 70vh;
  min-height: 70VH;
  width: 100%; /* Adjust to your preferred width */
  position: relative;
  border-bottom: 5px solid #1F5A2D;
  border-top: 5px solid #1F5A2D;
  display: flex;
  justify-content: center;
  align-items: center;
}

.green-container-b img {
  max-height: inherit;
  scale: 0.8;
  object-fit: cover;
}



.green-container h1 {
 text-align: center;
 color: #1F5A2D;
}


.green-container p {
  padding: 0 3%;
  font-size: larger;
  text-align: center;
  font-weight: 300;
  max-width: 1000px;
  line-height: 2.5vw;

}


.s-container {
  border-bottom: 5px solid #1F5A2D;
  border-top: 5px solid #1F5A2D;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 70VH;
}


.info {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding: 3% 3%;
  gap: 2%;
}

.info span {
  color: #1F5A2D;
  font-size: 4vh;
}
.info p {
  max-width: 60%;
  text-align: justify;
  padding: 0;
  margin: 0;
  line-height: 25px;
  color: gray;
}



/* Style the slider container */
.slider-container {
display: flex;
justify-content: flex-start;  
width: 50%;
position: relative;
/* max-width: 600px; */
margin: 0 auto;
overflow: hidden;
height: 100%; /* Adjust the height as needed */
border-right: 4px solid #1f5a2d98;
}

/* Style the slider */
.slider {
display: flex;
transition: transform 0.5s ease-in-out;
height: 100%;
}

/* Style the slider images */
.slider img {
flex: 0 0 100%; /* Each image takes the full width of the slider */
height: 100%;
object-fit: cover;
}

/* Style the navigation buttons */
.prev-button,
.next-button {
position: absolute;
top: 50%;
transform: translateY(-50%);
font-size: 24px;
background: none;
border: none;
cursor: pointer;
}

.prev-button {
left: 10px;
}

.next-button {
right: 10px;
}


.wrapper {
width: 100%;
height: 100%;
}


.wrapper2 {
width: 100%;
height: 100%;
}
</style>

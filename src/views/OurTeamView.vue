<template>
    <div class="wrapper2">
      <div class="green-container">
        <h1>Meet Our Team!</h1>
        <p>
          Resilient Communities is made up of an interdisciplinary team that share a passion for bridging community development and innovative practices to help educate and strengthen communities for the 21st century.
        </p>
      </div>
      <div class="team-wrapper">
        <div class="member">
          <img class="roundit" src="../assets/profilepic.webp" alt="">
          <div class="member-info">
            <span class="name">Eastman Johnson</span>
            <div class="position">
              <img src="../assets/rounded_linkedin.svg" alt="">
              <span>President | Community Planning & Design</span>
            </div>
            <p>
              Eastman is a native of Georgetown, Kentucky and first discovered his passion for community planning while studying at the University of Cincinnati. He developed a strong connection with Morocco after serving as a Peace Corps volunteer from 2014 to 2016 and then returning as a Fulbright researcher from 2018 to 2019. Eastman founded  Resilient Communities in 2017 and has continued to build a strong network throughout Morocco to support the organization's projects and programs.
            </p>
          </div>
        </div>
        <div class="member member-reverse">
          <img class="roundit" src="../assets/profilepic.webp" alt="">
          <div class="member-info info-reverse">
            <span class="name name-reverse">John Doe</span>
            <div class="position position-reverse">
              <img src="../assets/rounded_linkedin.svg" alt="">
              <span>Marketing Manager</span>
            </div>
            <p class="paragraph-reverse">
              John is a marketing enthusiast with a strong background in digital marketing and branding. He has worked with various international brands to enhance their online presence and drive engagement. With a passion for creative storytelling, John joined Resilient Communities to contribute his expertise in reaching a wider audience and creating impactful campaigns.
            </p>
          </div>
        </div>
        <div class="member">
            <img class="roundit" src="../assets/profilepic.webp" alt="">
            <div class="member-info">
              <span class="name">Eastman Johnson</span>
              <div class="position">
                <img src="../assets/rounded_linkedin.svg" alt="">
                <span>President | Community Planning & Design</span>
              </div>
              <p>
                Eastman is a native of Georgetown, Kentucky and first discovered his passion for community planning while studying at the University of Cincinnati. He developed a strong connection with Morocco after serving as a Peace Corps volunteer from 2014 to 2016 and then returning as a Fulbright researcher from 2018 to 2019. Eastman founded  Resilient Communities in 2017 and has continued to build a strong network throughout Morocco to support the organization's projects and programs.
              </p>
            </div>
          </div>
      </div>
    </div>
  </template>
  
  <style>
  .team-wrapper {
    width: 100%;
  }
  
  .roundit {
    border-radius: 50%;
    width: 50%;
    height: 50%;
    max-width: 300px;
  }
  
  .name {
    font-size: xx-large;
    margin-bottom: 2%;
    color: #1F5A2D;
    font-family: 'Roboto Serif', serif;
  }
  
  .name-reverse {
    text-align: right;
  }
  
  .member {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3%;
    min-height: 40vh;
    background: #1F5;
  }
  
  .member-reverse {
    flex-direction: row-reverse;
  }
  
  .member-info {
    display: flex;
    flex-direction: column;
    max-width: 50%;
  }
  
  .member-info p {
    max-width: 600px;
    text-align: justify;
    font-weight: 300;
    line-height: 25px;
  }
  
  .info-reverse {
    text-align: right;
  }
  
  .paragraph-reverse {
    text-align: right;
  }
  
  .position {
    display: flex;
    align-items: center;
    gap: 1%;
  }
  
  .position-reverse {
    justify-content: flex-start;
    flex-direction: row-reverse;
  }
  
  .position span {
    white-space: nowrap;
    font-weight: 300;
  }
  
  .position img {
    width: 30px;
  }
  </style>
  
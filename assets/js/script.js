var defaultBG = $(":root").css("--darkOpa");

$(document).ready(function() {

  // Carousel Slider Settings
  $("#profileCarousel").on('slide.bs.carousel', function (e) {

    if($(e.relatedTarget).hasClass("carousel-media")) {

      $(".profile-right").css({"background-color":"var(--lightOpa)"});
      $(".profile-left").css({"box-shadow":"15px 0px 15px -15px #aaaaaa"});
      $(this).find(".carousel-indicators button").css({"background-color":"rgb(0,0,0)"});
      $(e.relatedTarget).css({"overflow-y":"hidden"});
    }
    else {

      $(".profile-right").css({"background-color":defaultBG});
      $(".profile-left").css({"box-shadow":"none"});
      $(this).find(".carousel-indicators button").css({"background-color":"rgb(255,255,255)"});
      $(e.relatedTarget).css({"overflow-y":"scroll"});
    }
    
  });

  // Carousel Mobile Swipe
  $(".profile-right").on("touchstart", function(event){
    const xClick = event.originalEvent.touches[0].pageX;
    $("#profileCarousel").one("touchmove", function(event){
        const xMove = event.originalEvent.touches[0].pageX;
        const sensitivityInPx = 5;

        if(Math.floor(xClick - xMove) > sensitivityInPx ){
            $("#profileCarousel").carousel("next");
        }
        else if(Math.floor(xClick - xMove) < -sensitivityInPx ){
            $("#profileCarousel").carousel("prev");
        }
    });
    $("#profileCarousel").on("touchend", function(){
        $("#profileCarousel").off("touchmove");
    });
  });

  // Particles JS Installation
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 5,
        "density": {
          "enable": true,
          "value_area": 100
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "../../files/401665125/assets/img/gamepad.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0.1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 15,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 50,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);

});
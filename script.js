
function page1Animation(){
  gsap.from("#page1 h1",{
    y:-100,
     opacity:0,
     rotateX:90,
  
     transformOrigin:"0  0",
     duration:1,
     stagger:0.09
     
  })
  gsap.from("#page1 h2",{
    y:-100,
     opacity:0,
     rotateX:90,
  
     transformOrigin:"0  0",
     duration:1,
     stagger:0.09
     
  })

  gsap.from("#page1 h3",{
    y:-100,
     opacity:0,
     rotateX:90,
  
     transformOrigin:"0  0",
     duration:1,
     stagger:0.09
     
  })
}


page1Animation();


function canvas(){
    const canvas = document.querySelector("#page2 > canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./0001.webp
   ./0002.webp
   ./0003.webp
   ./0004.webp
   ./0005.webp
   ./0006.webp
   ./0007.webp
   ./0008.webp
   ./0009.webp
   ./0010.webp
   ./0011.webp
   ./0012.webp
   ./0013.webp
   ./0014.webp
   ./0015.webp
   ./0016.webp
   ./0017.webp
   ./0018.webp
   ./0019.webp
   ./0020.webp
   ./0021.webp
   ./0022.webp
   ./0023.webp
   ./0024.webp
   ./0025.webp
   ./0026.webp
   ./0027.webp
   ./0028.webp
   ./0030.webp
   ./0032.webp
   ./0034.webp
   ./0036.webp
   ./0038.webp
   ./0040.webp
   ./0042.webp
   ./0044.webp
   ./0046.webp
   ./0048.webp
   ./0050.webp
   ./0052.webp
   ./0054.webp
   ./0056.webp
   ./0058.webp
   ./0060.webp
   ./0062.webp
   ./0064.webp
   ./0066.webp
   ./0068.webp
   ./0070.webp
   ./0072.webp
   ./0074.webp
   ./0076.webp
   ./0078.webp
   ./0080.webp
   ./0082.webp
   ./0084.webp
   ./0086.webp
   ./0088.webp
   ./0090.webp
   ./0092.webp
   ./0094.webp
   ./0096.webp
   ./0098.webp
   ./0100.webp
   ./0102.webp
   ./0104.webp
   ./0106.webp
   ./0108.webp
   ./0110.webp
   ./0112.webp
   ./0114.webp
   ./0116.webp
   ./0118.webp
   ./0120.webp
   ./0122.webp
   ./0124.webp
   ./0126.webp
   ./0128.webp
   ./0130.webp
   ./0132.webp
   ./0134.webp
   ./0136.webp
   ./0138.webp
   ./0140.webp
   ./0142.webp
   ./0144.webp
   ./0146.webp
   ./0148.webp
   ./0150.webp
   ./0152.webp
   ./0154.webp
   ./0156.webp
   ./0158.webp
   ./0160.webp
   ./0162.webp
   ./0164.webp
   ./0166.webp
   ./0168.webp
   ./0170.webp
   ./0172.webp
   ./0174.webp
   ./0176.webp
   ./0178.webp
   ./0180.webp
   ./0182.webp
   ./0184.webp
   ./0186.webp
   ./0188.webp
   ./0190.webp
   ./0192.webp
   ./0194.webp
   ./0196.webp
   ./0198.webp
   ./0200.webp
   ./0202.webp
   ./0204.webp
   ./0206.webp
   ./0208.webp
   ./0210.webp
   ./0212.webp
   ./0214.webp
   ./0216.webp
   ./0218.webp
   ./0220.webp
   ./0222.webp
   ./0224.webp
   ./0226.webp
   ./0228.webp
   ./0230.webp
   ./0232.webp
   ./0234.webp
   ./0236.webp
   ./0238.webp
   ./0240.webp
   ./0242.webp
   ./0244.webp
   ./0246.webp
   ./0248.webp
   ./0250.webp
   ./0252.webp
   ./0254.webp
   ./0256.webp
   ./0258.webp
   ./0260.webp
   ./0262.webp
   ./0264.webp
   ./0266.webp
   ./0268.webp
   ./0270.webp
   ./0272.webp
   ./0274.webp
   ./0276.webp
   ./0278.webp
   ./0280.webp
   ./0282.webp
   ./0284.webp
   ./0286.webp
   ./0288.webp
   ./0290.webp
   ./0292.webp
   ./0294.webp
   ./0296.webp
   ./0298.webp
   ./0300.webp
   ./0302.webp
   ./0304.webp
   ./0306.webp
   ./0308.webp
   ./0310.webp
   ./0312.webp
   ./0314.webp
   ./0316.webp
   ./0318.webp
   ./0320.webp
   ./0322.webp
   ./0324.webp
   ./0326.webp
   ./0328.webp
   ./0330.webp
   ./0332.webp
   ./0334.webp
   ./0336.webp
   ./0338.webp
   ./0340.webp
   ./0342.webp
   ./0344.webp
   ./0346.webp
   ./0348.webp
   ./0350.webp
   ./0352.webp
   ./0354.webp
   ./0356.webp
   ./0358.webp
   ./0360.webp
   ./0362.webp
   ./0364.webp
   ./0366.webp
   ./0368.webp
   ./0370.webp
   ./0372.webp
   ./0374.webp
   ./0376.webp
   ./0378.webp
   ./0380.webp
   ./0382.webp
   ./0384.webp
   ./0386.webp
   ./0388.webp
   ./0390.webp
   ./0392.webp
   ./0394.webp
   ./0396.webp
   ./0398.webp
   ./0400.webp
   ./0402.webp
   ./0404.webp
   ./0406.webp
   ./0408.webp
   ./0410.webp
   ./0412.webp
   ./0414.webp
   ./0416.webp
   ./0418.webp
   ./0420.webp
   ./0422.webp
   ./0424.webp
   ./0426.webp
   ./0428.webp
   ./0430.webp
   ./0432.webp
   ./0434.webp
   ./0436.webp
   ./0438.webp
   ./0440.webp
   ./0442.webp
   ./0444.webp
   ./0446.webp

./  `;
  return data.split("\n")[index];
}

const frameCount = 237;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}



gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub:3,
    trigger:`#page2`,
    start: `top top`,
    end: `1000% top`,
    scroller:`body`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width/2 / img.width;
  var vRatio = canvas.height/2 / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

ScrollTrigger.create({
  trigger:"#page2",
  pin: true,
  scroller: `body`,
  start: `top top`,
  end: `1000% top`,
});
}
canvas()

function page3animation(){
  gsap.from("#page3 h1", {
    opacity: 0,
    rotateX: 90,
    transformOrigin: "0 0", // Updated to pixel values (0 pixel from the left and 0 pixel from the top)
    stagger:0.1,
    scrollTrigger:{
      scrub: 0.5,
      trigger: "#page3",
      start: "top 50%",
      end: "top 0",
      scroller:"body",
      // markers: true,
    },
  });
}
page3animation()

function page4animation(){
  gsap.from("#page4head", {
    opacity: 0,
    rotateX: 90,
    transformOrigin: "0 0", // Updated to pixel values (0 pixel from the left and 0 pixel from the top)
    scrollTrigger:{
      scrub: 0.5,
      trigger: "#page4",
      start: "top 50%",
      end: "top 0",
      scroller:"body",
      // markers: true,
    },
  });
  
  gsap.from("#midh1 > h1", {
    opacity: 0,
    rotateX: 90,
    transformOrigin: "0 0", // Updated to pixel values (0 pixel from the left and 0 pixel from the top)
    scrollTrigger:{
      scrub: 0.5,
      trigger: "#midh1",
      start: "top 50%",
      end: "top 0",
      scroller:"body",
      // markers: true,
    },
  });
  
  gsap.from("#page4h1 > h1", {
    opacity: 0,
    rotateX: 90,
    transformOrigin: "0 0", // Updated to pixel values (0 pixel from the left and 0 pixel from the top)
    scrollTrigger:{
      scrub: 0.5,
      trigger: "#page4h1",
      start: "top 50%",
      end: "top 0",
      scroller:"body",
      // markers: true,
    },
  });
  
}
page4animation()

gsap.from("#videoh1",{
  opacity:0,
  scale:0,
  // transformOrigin: "0 0", // Updated to pixel values (0 pixel from the left and 0 pixel from the top)
  scrollTrigger:{
    scrub: true,
    trigger: "#page5",
    start: "top 5%",
    end: "top -10%",
    scroller:"body",
    // markers: true,
  },
})

gsap.from("#page6 h1", {
  opacity: 0,
  rotateX: 90,
  transformOrigin: "0 0", // Updated to pixel values (0 pixel from the left and 0 pixel from the top)
  scrollTrigger:{
    scrub: 0.5,
    trigger: "#page6",
    start: "top 50%",
    end: "top 0",
    scroller:"body",
    // markers: true,
  },
});

gsap.from("#head7 h1", {
  opacity: 0,
  rotateX: 90,
  transformOrigin: "0 0", // Updated to pixel values (0 pixel from the left and 0 pixel from the top)
  scrollTrigger:{
    scrub: 0.5,
    trigger: "#head7 h1",
    start: "top 50%",
    end: "top 0",
    scroller:"body",
    // markers: true,
  },
});



gsap.to("#rollimage img",{
  rotation:360,
  duration: 8,
  repeat:-1,
  ease:"linear",
})



var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiper.on('slideChange', function () {
  gsap.from(swiper.slides,{
     opacity:0,
     scale:0,
     duration:1,
  }
  )
});
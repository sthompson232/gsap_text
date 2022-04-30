tl = new TimelineMax({paused: true})

tl
.to('.btn', 0.3, {opacity:0})
.to('.intro-text h2', 0.3, {opacity:0})
.staggerFrom('.hidetext', 1.5, {y:"100%", ease:Power4.easeout}, 0.15)

document.querySelector('.btn').addEventListener('click', animate)
function animate() {
    tl.play()
}
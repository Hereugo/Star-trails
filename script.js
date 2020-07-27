var origin
var stars
var clicked = true;

var colors = ['36827F','EFF0E8',
			  '56638A','BFD5CD',
			  '7EB1A9','F5A04C',
			  'F7EE7F','5E965B',
			  '73947E','FEAE6E',
			  '2A628F','3DA5D9',
			  'D7EAEC','0B132B',
			  '1C2541','5BC0DE',
			  '7BDFF2','FDF0D5',
			  'F08700']
var deepblue = '#04042B'
var deeppurple = '#4F1271'
function setup() {
	createCanvas(window.innerWidth , window.innerHeight)
	console.log(width , height)
	stars = new population(150) //How much stars?
	origin = createVector(window.innerWidth *26/50, window.innerHeight * 3/4)
}


function draw() {
	clear()
	if (mouseIsPressed) {
		origin.x = mouseX
		origin.y = mouseY
		console.log("ADS")
	}
	if (clicked) stars.run()
}

function Star(l) {
	this.CONST = 10000

	this.next = l / 10 * PI

	this.speed = l / this.CONST // Masuered in angle
	this.ang = random(360)
	this.clr = random(colors)
	this.lenFromOrigin = l

	this.draw = function() {

		noFill()
		stroke('#'+this.clr)

		arc(origin.x, origin.y, 
			this.lenFromOrigin + 100, this.lenFromOrigin,
			this.ang , this.ang + this.next)
	}

	this.update = function() {
		this.ang += this.speed
	}

	this.run = function() {
		this.draw()
		this.update()
	}
}

function population(cnt) {
	this.p = []
	this.len = cnt
	for (let i=0; i<this.len; i++) {
		let r = random(width + 300)
		this.p[i] = new Star(r)
	}

	this.run = function() {
		for (let i=0; i<this.len; i++) {
			this.p[i].run()
		}
	}
}
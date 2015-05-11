/*********************************

 * VP Carousel
 * Code by Viktoriia Pshenychko
 * http://www.vizhually.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2015

*********************************/

function VPCarousel(hash) {

    this.id             = hash.id;
    this.data           = hash.data;

    this.keys           = Object.keys(this.data)
    this.currentIndex   = 0;

    this.slides         = []

    setupCarousel.apply(this);
    bindEvents.apply(this);
    
}

function setupCarousel() {
    this.container = $('#' + this.id);

    var html = " \
        <img id='"+ this.id +"-vp-carousel-img-load' class='vp-carousel-img-load' /> \
        <div id='"+ this.id +"-vp-carousel-inner' class='vp-carousel-inner'> \
        <div id='"+ this.id +"-vp-carousel-back' class='vp-carousel-back'></div> \
        <div id='"+ this.id +"-vp-carousel-front' class='vp-carousel-front'></div> \
        </div>"

    this.container.html(html);

    this.imgLoad    = $('#' + this.id + '-vp-carousel-img-load' );
    this.back       = $('#' + this.id + '-vp-carousel-back'     );
    this.front      = $('#' + this.id + '-vp-carousel-front'    );


    this.front.css({opacity: 0});
}

function loadImage(src, callback) {

    console.log(this.imgLoad);

    this.imgLoad.unbind('load'); 
    this.imgLoad.load(function(){

        var src = this.imgLoad[0].src;

        callback(src);
    }.bind(this));

    this.imgLoad[0].src = src;

}

function bindEvents() {

    $(window).bind('click', function(){
        this.toggle();
    }.bind(this));

}

VPCarousel.prototype.fadeNext = function(){
    this.currentIndex    = this.currentIndex == this.keys.length - 1 ?  0 : this.currentIndex + 1; 
    var currentKey       = this.keys[this.currentIndex];
    var imageData        = this.data[currentKey];
    var image            = imageData['image'];
   
    loadImage.apply(this, [image, function(src){

        this.back.css("background-image", "url("+ src +")");

        this.front.stop();
        this.front.animate({opacity: 0}, 1000, function(){
            this.front.css({"background-image":"url("+ src +")", opacity: 1});
        }.bind(this));

    }.bind(this)]);
}

VPCarousel.prototype.start = function(){
    
    var currentKey       = this.keys[this.currentIndex];
    var imageData        = this.data[currentKey];
    var image            = imageData['image'];

    loadImage.apply(this, [image, function(src){
       
        this.front.css({"background-image":"url("+ src +")"});
        this.front.animate({opacity: 1}, 1000);

    }.bind(this)]);

    this.interval = setInterval(this.fadeNext.bind(this), 5000);
}

VPCarousel.prototype.stop = function(){
    clearInterval(this.interval);
    this.interval = null;
}

VPCarousel.prototype.toggle = function(){
    if (this.interval) {
        this.stop();
    } else {
        this.start();
    }
}

window.VPCarousel = VPCarousel





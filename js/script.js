$(document).ready(function(){

    var carouselData = {
        'image-1' : {
            id          : 'image-1',
            classname   : 'image-1-class',
            content     : 'My cat 1',
            image       : 'images/1.jpg'
        },

        'image-2' : {
            id          : 'image-2',
            classname   : 'image-2-class',
            content     : 'My cat 2',
            image       : 'images/2.jpg'
        },

        'image-3' : {
            id          : 'image-3',
            classname   : 'image-3-class',
            content     : 'My cat 3',
            image       : 'images/3.jpg'
        },

        'image-4' : {
            id          : 'image-4',
            classname   : 'image-4-class',
            content     : 'My cat 4',
            image       : 'images/4.jpg'
        },

        'image-5' : {
            id          : 'image-5',
            classname   : 'image-5-class',
            content     : 'My cat 5',
            image       : 'images/5.jpg'
        },

        'image-6' : {
            id          : 'image-6',
            classname   : 'image-6-class',
            content     : 'My cat 6',
            image       : 'images/6.jpg'
        }

    }

    var carousel = new VPCarousel({
        id              : 'carousel-container',
        data            : carouselData
    });
    
    carousel.start();
});
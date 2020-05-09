/* Author:  */
window.onload = function () {

    //hamburger function
    var burger = this.document.querySelector('.burger');
    var nav_links = this.document.querySelector('.nav-links');

    burger.addEventListener('click', function () {
        nav_links.classList.toggle('nav--active');
        burger.classList.toggle('burger-active');
        document.querySelector('html').classList.toggle('no-scroll')
    });

    //function for scroll effect on contact image
    var contact_img = document.querySelector('.contact');
    contact_img.addEventListener('scroll', function () {
        if (window.scrollY > window.innerHeight / 2) {
            contact_img.classList.remove('hide');
        } else {
            if (window.scrollY < window.innerHeight / 2) {
                contact_img.classList.add('hide');
            }
        }
    });

    //tab functionality 

    var tabItems = document.querySelectorAll('.tab-item');
    var tabImageItem = document.querySelectorAll('.tab-img-item');

    function getImage(e){
        removeColor();
        removeImage();
        this.classList.add('item-color');
        // console.log(this.id);
        var tabImage = document.querySelector(`#${this.id}-img`);
        // console.log(tabImage.id);
        tabImage.classList.add('active');
    }

    function removeColor(){
        tabItems.forEach(function (item){
            item.classList.remove('item-color');
        });
    }

    function removeImage(){
        tabImageItem.forEach(function(item){
            item.classList.remove('active');
            console.log(item.id);
        })
    }

    tabItems.forEach(function(item){
        item.addEventListener('click', getImage);
    });


    //function for videomodal
    var videoPlay = document.querySelector('#video-play');
    var videoModal = document.querySelector('#video-modal');
    var mainVideo = document.querySelector('.main-video');
    var cancleBtn = document.querySelector('.cancle');

    videoModal.addEventListener('click', function (e) {
        if (e.target === video) {
            return false;
        }
        else {
            videoModal.classList.add('hideivideo');
        }
    });

    //for opan a video modal
    videoPlay.addEventListener('click', function () {
        var videohide = videoModal.classList.contains('hideivideo');
        if (videohide == true) {
            videoModal.classList.remove('hideivideo');
        }
        mainVideo.autoplay = true;
        mainVideo.play();
    })

    //for cancle video
    cancleBtn.addEventListener('click', function () {
        mainVideo.pause();
        mainVideo.currentTime = 0;
        videoModal.classList.add('hideivideo');
    });
}

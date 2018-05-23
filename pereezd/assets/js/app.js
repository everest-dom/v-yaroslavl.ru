window.addEventListener('DOMContentLoaded', (e) => {
    /* Подключаем плагин маски для телефонов */
    $('input[type="tel"]').mask("+7(999)999-99-99");

    $('.slick-slider-js').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ".slider__arrow-prev",
        nextArrow: ".slider__arrow-next",
        responsive: [{
                breakpoint: 1040,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '30px',
                }
            }
        ]
    });

    (function() {
        let popupClose = document.querySelector('.popup-close');
        let popupCont = document.querySelector('.popup-home__wrap');
    
        let popupHome = document.querySelector('.popup-home');
        let popupTitle = popupHome.querySelector('.popup-home__title');
        let popupSquare = popupHome.querySelector('.popup-home__square span');
        let imageGallery = popupHome.querySelector('#imageGallery');
        let homeCoast = popupHome.querySelector('.popup-home__coat-val');
        let homeIpoteca = popupHome.querySelector('.popup-home__ipoteca');
        let homeDescr = popupHome.querySelector('.popup-home__descr');
        let slider;
    
        // slider create
        slider = $('#imageGallery').lightSlider({
            gallery: true,
            item: 1,
            loop: true,
            thumbItem: 3,
            slideMargin: 0,
            enableDrag: false,
            enableTouch: false,
            freeMove: true,
            currentPagerPosition: 'left',
            onSliderLoad: function (el) {
                el.lightGallery({
                    selector: '#imageGallery .lslide'
                });
            }
        });
    
        slider.destroy();
    
        function fillPopupHome(target) {
            let dataHome = target.getAttribute('data-home');
            let objHome = homes[dataHome];
    
            popupTitle.innerHTML = objHome.title;
            popupSquare.innerHTML = objHome.square + 'м';
            homeIpoteca.innerHTML = 'Ипотека от ' + objHome.ipoteca + ' руб/мес.';
            homeCoast.innerHTML = objHome.coast + ' млн.р.';
            homeDescr.innerHTML = objHome.descr;
    
            imageGallery.innerHTML = '';
            // create gallery and fill it
            for (let i = 0; i < objHome.img.length; i++) {
    
                var li = document.createElement('LI');
                var img = document.createElement('IMG');
                var a = document.createElement('A');
    
                a.setAttribute('href', objHome.img[i].big);
                li.setAttribute('data-thumb', objHome.img[i].small);
                li.setAttribute('data-src', objHome.img[i].big);
                img.setAttribute('src', objHome.img[i].big);
    
                a.appendChild(img);
                li.appendChild(a);
                imageGallery.appendChild(li);
            }
        }
    
        document.body.addEventListener('click', function (e) {
            if (e.target.classList.contains('project-home__btn') || e.target.classList.contains('project-home__item')) {
                e.preventDefault();
    
                fillPopupHome(e.target);
    
                // popupCont.classList.add('active');
    
    
                setTimeout(function () {
                    // slider create
                    slider = $('#imageGallery').lightSlider({
                        gallery: true,
                        item: 1,
                        loop: true,
                        thumbItem: 3,
                        slideMargin: 0,
                        enableDrag: false,
                        enableTouch: false,
                        freeMove: true,
                        currentPagerPosition: 'left',
                        onSliderLoad: function (el) {
                            el.lightGallery({
                                selector: '#imageGallery .lslide'
                            });
                        }

                    });
                    setTimeout(function() {
                        popupCont.classList.add('active');
                        
                    }, 300);
                    
                }, 300);
    
            }
        });
    
        // Popup close and slider destroy
        popupCont.addEventListener('click', function (e) {
            if (e.target.classList.contains('popup-home__wrap') || e.target.classList.contains('popup-close')) {
                popupCont.classList.remove('active');
    
                slider.destroy();
            }
        });
        popupCont.addEventListener('keyup', function (e) {
            if (e.keyCode === 27) {
                popupCont.classList.remove('active');
    
                slider.destroy();
            }
        });
    })();

    (function() {
        let heroBg = $('.hero__bg');
        let srcPhone = heroBg.attr('data-src-phone');
        let srcDesktop = heroBg.attr('data-src-desktop');
        let src = heroBg.attr('src');

        if (window.innerWidth <= 480 && srcPhone !== src) {  
            heroBg.attr('src', srcPhone);
        } else if (window.innerWidth > 480 && srcDesktop !== src) {
            heroBg.attr('src', srcDesktop);
        }

        window.addEventListener('resize', e => {
            src = heroBg.attr('src');
            
            if (window.innerWidth <= 480 && srcPhone !== src) {                
                heroBg.attr('src', srcPhone);
            } else if (window.innerWidth > 480 && srcDesktop !== src) {
                heroBg.attr('src', srcDesktop);
            }
        });
    })();

    //scroll nav links
    (function() {
        var linkNav = document.querySelectorAll('[href^="#scroll"]'), //выбираем все ссылки к якорю на странице
        V = 0.3; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)

        for (var i = 0; i < linkNav.length; i++) {
            linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
                e.preventDefault(); //отменяем стандартное поведение

                var w = window.pageYOffset, // производим прокрутка прокрутка
                    hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
                t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
                    start = null;
                requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]

                function step(time) {
                    if (start === null) start = time;
                    var progress = time - start,
                        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
                    window.scrollTo(0, r);
                    if (r != w + t) {
                        requestAnimationFrame(step)
                    } else {
                        location.hash = hash // URL с хэшем
                    }
                }
            }, false);
        }
    })();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGUpID0+IHtcclxuICAgIC8qINCf0L7QtNC60LvRjtGH0LDQtdC8INC/0LvQsNCz0LjQvSDQvNCw0YHQutC4INC00LvRjyDRgtC10LvQtdGE0L7QvdC+0LIgKi9cclxuICAgICQoJ2lucHV0W3R5cGU9XCJ0ZWxcIl0nKS5tYXNrKFwiKzcoOTk5KTk5OS05OS05OVwiKTtcclxuXHJcbiAgICAkKCcuc2xpY2stc2xpZGVyLWpzJykuc2xpY2soe1xyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBwcmV2QXJyb3c6IFwiLnNsaWRlcl9fYXJyb3ctcHJldlwiLFxyXG4gICAgICAgIG5leHRBcnJvdzogXCIuc2xpZGVyX19hcnJvdy1uZXh0XCIsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwNDAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzUwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMzBweCcsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IHBvcHVwQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY2xvc2UnKTtcclxuICAgICAgICBsZXQgcG9wdXBDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWhvbWVfX3dyYXAnKTtcclxuICAgIFxyXG4gICAgICAgIGxldCBwb3B1cEhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtaG9tZScpO1xyXG4gICAgICAgIGxldCBwb3B1cFRpdGxlID0gcG9wdXBIb21lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1ob21lX190aXRsZScpO1xyXG4gICAgICAgIGxldCBwb3B1cFNxdWFyZSA9IHBvcHVwSG9tZS5xdWVyeVNlbGVjdG9yKCcucG9wdXAtaG9tZV9fc3F1YXJlIHNwYW4nKTtcclxuICAgICAgICBsZXQgaW1hZ2VHYWxsZXJ5ID0gcG9wdXBIb21lLnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZUdhbGxlcnknKTtcclxuICAgICAgICBsZXQgaG9tZUNvYXN0ID0gcG9wdXBIb21lLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1ob21lX19jb2F0LXZhbCcpO1xyXG4gICAgICAgIGxldCBob21lSXBvdGVjYSA9IHBvcHVwSG9tZS5xdWVyeVNlbGVjdG9yKCcucG9wdXAtaG9tZV9faXBvdGVjYScpO1xyXG4gICAgICAgIGxldCBob21lRGVzY3IgPSBwb3B1cEhvbWUucXVlcnlTZWxlY3RvcignLnBvcHVwLWhvbWVfX2Rlc2NyJyk7XHJcbiAgICAgICAgbGV0IHNsaWRlcjtcclxuICAgIFxyXG4gICAgICAgIC8vIHNsaWRlciBjcmVhdGVcclxuICAgICAgICBzbGlkZXIgPSAkKCcjaW1hZ2VHYWxsZXJ5JykubGlnaHRTbGlkZXIoe1xyXG4gICAgICAgICAgICBnYWxsZXJ5OiB0cnVlLFxyXG4gICAgICAgICAgICBpdGVtOiAxLFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICB0aHVtYkl0ZW06IDMsXHJcbiAgICAgICAgICAgIHNsaWRlTWFyZ2luOiAwLFxyXG4gICAgICAgICAgICBlbmFibGVEcmFnOiBmYWxzZSxcclxuICAgICAgICAgICAgZW5hYmxlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgICAgICBmcmVlTW92ZTogdHJ1ZSxcclxuICAgICAgICAgICAgY3VycmVudFBhZ2VyUG9zaXRpb246ICdsZWZ0JyxcclxuICAgICAgICAgICAgb25TbGlkZXJMb2FkOiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgICAgIGVsLmxpZ2h0R2FsbGVyeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjaW1hZ2VHYWxsZXJ5IC5sc2xpZGUnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgc2xpZGVyLmRlc3Ryb3koKTtcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGZpbGxQb3B1cEhvbWUodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhSG9tZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaG9tZScpO1xyXG4gICAgICAgICAgICBsZXQgb2JqSG9tZSA9IGhvbWVzW2RhdGFIb21lXTtcclxuICAgIFxyXG4gICAgICAgICAgICBwb3B1cFRpdGxlLmlubmVySFRNTCA9IG9iakhvbWUudGl0bGU7XHJcbiAgICAgICAgICAgIHBvcHVwU3F1YXJlLmlubmVySFRNTCA9IG9iakhvbWUuc3F1YXJlICsgJ9C8JztcclxuICAgICAgICAgICAgaG9tZUlwb3RlY2EuaW5uZXJIVE1MID0gJ9CY0L/QvtGC0LXQutCwINC+0YIgJyArIG9iakhvbWUuaXBvdGVjYSArICcg0YDRg9CxL9C80LXRgS4nO1xyXG4gICAgICAgICAgICBob21lQ29hc3QuaW5uZXJIVE1MID0gb2JqSG9tZS5jb2FzdCArICcg0LzQu9C9LtGALic7XHJcbiAgICAgICAgICAgIGhvbWVEZXNjci5pbm5lckhUTUwgPSBvYmpIb21lLmRlc2NyO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGltYWdlR2FsbGVyeS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgLy8gY3JlYXRlIGdhbGxlcnkgYW5kIGZpbGwgaXRcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmpIb21lLmltZy5sZW5ndGg7IGkrKykge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMSScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lNRycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdBJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGEuc2V0QXR0cmlidXRlKCdocmVmJywgb2JqSG9tZS5pbWdbaV0uYmlnKTtcclxuICAgICAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnZGF0YS10aHVtYicsIG9iakhvbWUuaW1nW2ldLnNtYWxsKTtcclxuICAgICAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmMnLCBvYmpIb21lLmltZ1tpXS5iaWcpO1xyXG4gICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgb2JqSG9tZS5pbWdbaV0uYmlnKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgYS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZUdhbGxlcnkuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QtaG9tZV9fYnRuJykgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0LWhvbWVfX2l0ZW0nKSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBmaWxsUG9wdXBIb21lKGUudGFyZ2V0KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gcG9wdXBDb250LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNsaWRlciBjcmVhdGVcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXIgPSAkKCcjaW1hZ2VHYWxsZXJ5JykubGlnaHRTbGlkZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYkl0ZW06IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlTWFyZ2luOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVEcmFnOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlVG91Y2g6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmVlTW92ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2VyUG9zaXRpb246ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TbGlkZXJMb2FkOiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLmxpZ2h0R2FsbGVyeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjaW1hZ2VHYWxsZXJ5IC5sc2xpZGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1cENvbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIC8vIFBvcHVwIGNsb3NlIGFuZCBzbGlkZXIgZGVzdHJveVxyXG4gICAgICAgIHBvcHVwQ29udC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwLWhvbWVfX3dyYXAnKSB8fCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwLWNsb3NlJykpIHtcclxuICAgICAgICAgICAgICAgIHBvcHVwQ29udC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgc2xpZGVyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBvcHVwQ29udC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XHJcbiAgICAgICAgICAgICAgICBwb3B1cENvbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHNsaWRlci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pKCk7XHJcblxyXG4gICAgKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBoZXJvQmcgPSAkKCcuaGVyb19fYmcnKTtcclxuICAgICAgICBsZXQgc3JjUGhvbmUgPSBoZXJvQmcuYXR0cignZGF0YS1zcmMtcGhvbmUnKTtcclxuICAgICAgICBsZXQgc3JjRGVza3RvcCA9IGhlcm9CZy5hdHRyKCdkYXRhLXNyYy1kZXNrdG9wJyk7XHJcbiAgICAgICAgbGV0IHNyYyA9IGhlcm9CZy5hdHRyKCdzcmMnKTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDQ4MCAmJiBzcmNQaG9uZSAhPT0gc3JjKSB7ICBcclxuICAgICAgICAgICAgaGVyb0JnLmF0dHIoJ3NyYycsIHNyY1Bob25lKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNDgwICYmIHNyY0Rlc2t0b3AgIT09IHNyYykge1xyXG4gICAgICAgICAgICBoZXJvQmcuYXR0cignc3JjJywgc3JjRGVza3RvcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZSA9PiB7XHJcbiAgICAgICAgICAgIHNyYyA9IGhlcm9CZy5hdHRyKCdzcmMnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA0ODAgJiYgc3JjUGhvbmUgIT09IHNyYykgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhlcm9CZy5hdHRyKCdzcmMnLCBzcmNQaG9uZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPiA0ODAgJiYgc3JjRGVza3RvcCAhPT0gc3JjKSB7XHJcbiAgICAgICAgICAgICAgICBoZXJvQmcuYXR0cignc3JjJywgc3JjRGVza3RvcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy9zY3JvbGwgbmF2IGxpbmtzXHJcbiAgICAoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGxpbmtOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaHJlZl49XCIjc2Nyb2xsXCJdJyksIC8v0LLRi9Cx0LjRgNCw0LXQvCDQstGB0LUg0YHRgdGL0LvQutC4INC6INGP0LrQvtGA0Y4g0L3QsCDRgdGC0YDQsNC90LjRhtC1XHJcbiAgICAgICAgViA9IDAuMzsgLy8g0YHQutC+0YDQvtGB0YLRjCwg0LzQvtC20LXRgiDQuNC80LXRgtGMINC00YDQvtCx0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0YfQtdGA0LXQtyDRgtC+0YfQutGDICjRh9C10Lwg0LzQtdC90YzRiNC1INC30L3QsNGH0LXQvdC40LUgLSDRgtC10Lwg0LHQvtC70YzRiNC1INGB0LrQvtGA0L7RgdGC0YwpXHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua05hdi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsaW5rTmF2W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHsgLy/Qv9C+INC60LvQuNC60YMg0L3QsCDRgdGB0YvQu9C60YNcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy/QvtGC0LzQtdC90Y/QtdC8INGB0YLQsNC90LTQsNGA0YLQvdC+0LUg0L/QvtCy0LXQtNC10L3QuNC1XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHcgPSB3aW5kb3cucGFnZVlPZmZzZXQsIC8vINC/0YDQvtC40LfQstC+0LTQuNC8INC/0YDQvtC60YDRg9GC0LrQsCDQv9GA0L7QutGA0YPRgtC60LBcclxuICAgICAgICAgICAgICAgICAgICBoYXNoID0gdGhpcy5ocmVmLnJlcGxhY2UoL1teI10qKC4qKS8sICckMScpOyAvLyDQuiBpZCDRjdC70LXQvNC10L3RgtCwLCDQuiDQutC+0YLQvtGA0L7QvNGDINC90YPQttC90L4g0L/QtdGA0LXQudGC0LhcclxuICAgICAgICAgICAgICAgIHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhhc2gpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCwgLy8g0L7RgtGB0YLRg9C/INC+0YIg0L7QutC90LAg0LHRgNCw0YPQt9C10YDQsCDQtNC+IGlkXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApOyAvLyDQv9C+0LTRgNC+0LHQvdC10LUg0L/RgNC+INGE0YPQvdC60YbQuNGOINCw0L3QuNC80LDRhtC40LggW2RldmVsb3Blci5tb3ppbGxhLm9yZ11cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdGVwKHRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQgPT09IG51bGwpIHN0YXJ0ID0gdGltZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSB0aW1lIC0gc3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIgPSAodCA8IDAgPyBNYXRoLm1heCh3IC0gcHJvZ3Jlc3MgLyBWLCB3ICsgdCkgOiBNYXRoLm1pbih3ICsgcHJvZ3Jlc3MgLyBWLCB3ICsgdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCByKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAociAhPSB3ICsgdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcClcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gaGFzaCAvLyBVUkwg0YEg0YXRjdGI0LXQvFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pKCk7XHJcbn0pOyJdfQ==

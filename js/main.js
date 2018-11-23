$(document).ready(function() {
        /**************************************/
        /* MARGINES GÓRNY TREŚCI MAIN OD MENU */
        /**************************************/
        var header_height = $(".page-header").height();
        $(".page-main").css("margin-top", header_height);      

        /**********************/
        /* DOMYŚLNY STYL MENU */
        /**********************/
        $('.page-header .page-navbar').addClass("navbar-dark").addClass("bg-dark");
        $('.page-header').addClass("bg-dark");

        /**************************************************************/
        /* DODANIE DO ZDJĘĆ EFEKTU PRZYBLIŻENIA PO NAJECHANIU KURSORA */
        /**************************************************************/
        $('.carousel-caption .caption-button').hover(function() {
            $('.carousel-inner .carousel-item img').toggleClass('img-scale-hover');
        });

        $('.container-skill-image').hover(function() {
            $(this).find("img").toggleClass('img-scale-hover');
        });

        /*********************************************/
        /* ANIMACJA PRZEWIJANIA STRONY PO KLIKNIĘCIU */
        /*********************************************/
        $('a[href^="#"]').on('click', function(event) {
            var target = $( $(this).attr('href') );
            var height_element_header = Math.round($(".page-header").height(), 2);
            if( target.length ) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - height_element_header
                }, 1000);
            }
        });

        $(".caption-button").click(function(e) {
            var target = $("#learn-more");
            var height_element_header = Math.round($(".page-header").height(), 2);
            if(target.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - height_element_header
                }, 1000);
            }
        });

        /**********************************************************/
        /* OTWORZENIE W NOWYM OKNIE LINKÓW O KLASIE "link-target" */
        /**********************************************************/
        $('a.link-target[href]').attr('target', '_blank');
        /******************************************************************************************/
        /* ZMIENIANIE KOLORU NAWIGACJI W ZALEŻNOŚCI OD SCROLLINGU I UMIEJSCOWANIA PODANYCH SEKCJI */
        /******************************************************************************************/
        function changeNavToLight() {
            $('.page-header, .page-header .page-navbar').removeClass("bg-dark", 1000, "easeInOutQuad").addClass("bg-light", 1000, "easeInOutQuad");
            $('.page-header .page-navbar').removeClass("navbar-dark").addClass("navbar-light");
            $('.navbar .navbar-brand').removeClass("nav-light").addClass("nav-dark");
        }

        function changeNavToDark() {
            $('.page-header, .page-header .page-navbar').removeClass("bg-light").addClass("bg-dark");
            $('.page-header .page-navbar').removeClass("navbar-light").addClass("navbar-dark");
            $('.navbar .navbar-brand').removeClass("nav-dark").addClass("nav-light");
        }

        $(window).scroll(function() {
            var space_top = Math.round($(this).scrollTop(), 2); // położenie scrollingu
            var height_element_project_from_top = Math.round($(".page-section-portfolio").offset().top, 2); // odległość w px sekcji projekt od góry strony
            var height_element_contact_from_top = Math.round($(".page-section-contact").offset().top, 2); // odległość w px sekcji projekt od góry strony
            var height_element_header = Math.round($(".page-header").height(), 2); // wysokość w px sekcji header
            var height_element_section_project = Math.round($(".page-section-portfolio").height(), 2);
            var height_element_section_contact = Math.round($(".page-section-contact").height(), 2); // wysokość w px sekcji projekt
            if((space_top >= (height_element_project_from_top - height_element_header) && (space_top < height_element_project_from_top + height_element_section_project))) {
                changeNavToLight();
            } else if((space_top >= (height_element_contact_from_top - height_element_header) && (space_top < height_element_contact_from_top + height_element_section_contact))) {
                changeNavToLight();
            } else {
                changeNavToDark();
            }
        });

        $("#contactForm").on('submit', function(event) {
            sending = false;
            var $contactForm = $(this);
            $submit = $('button[type="submit"]', $contactForm);
            event.preventDefault();
            if(sending) {
                $submit.val('Wysyłam...');
                return false;
            }
            $submit.val('Wysyłam...');
            sending = true;
        });
});
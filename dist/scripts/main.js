"use strict";$(".slider-for").slick({speed:800,slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-nav"}),$(".slider-nav").slick({slidesToShow:3,slidesToScroll:1,arrows:!1,asNavFor:".slider-for",focusOnSelect:!0,centerMode:!0}),$(".custom-checkbox").click(function(){$(".custom-checkbox").removeClass("selected"),$(this).toggleClass("selected"),$(".color-name").removeClass("visible-cl"),$(this).children().toggleClass("visible-cl")}),$(".mob-footer-slider").slick({slidesToShow:1,infinite:!0,dots:!0,customPaging:function(s,e){return'<div class="disabled-slick-item"></div><div class="active-slick-item"></div>'},slidesToScroll:1,arrows:!1});
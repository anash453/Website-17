// https://preview.themeforest.net/item/etrostore-multipurpose-responsive-magento-2-1-theme/full_screen_preview/14783535?_ga=2.157838010.1067615878.1737182149-993370187.1728848196
let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px";

        function toggleMenu(){
            if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "300px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
        }
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('nav');
            if (window.scrollY > 0) { // Adjust the scroll threshold as needed
                navbar.classList.add('fixed');
            } else {
                    navbar.classList.remove('fixed');
            }
            });
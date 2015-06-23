
       var header, logo, yPos;
    function yScroll() {
        header = document.getElementById('header');
        logo = document.getElementById('logo');
        nav = document.getElementById('nav');
        svg = document.getElementById('svg');

        yPos = window.pageYOffset;

       if(yPos > 150) {
            header.style.height = "40px";
            header.style.paddingTop = "0px";
            nav.style.marginTop = "-70px"
            nav.style.marginLeft = "80px"
            logo.style.marginLeft = "-60%";
 			logo.style.marginTop = "-10px";
            svg.style.width = "6em";

        }

        else{
            header.style.height="9em";
            logo.style.marginLeft = "0%"
            logo.style.marginTop = "0";
            svg.style.width = "8em";
        }
    }
    window.addEventListener("scroll", yScroll);

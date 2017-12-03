    $(function(){
        
        var h2 = $('.img-wrapper'),
            v = $('.text-wrapper'),
            g = $('.letter .inner'),
            f = $('.img-wrapper img');
            // m = 
        window.addEventListener("mousemove", this.onmove),

        $(window).on('mousemove',function(e){
            var w = $(window).width(), //window width
            h = $(window).height(), //window height
            offsetX = 0.5 - e.pageX / w, //cursor position X
            offsetY = 0.5 - e.pageY / h, //cursor position Y
            s = "rotateX(" + (-offsetY * 5) + "deg) rotateY(" + (offsetX*10) + "deg) translateZ(0)";
            h2.css('webkitTransform',s);
            h2.css('transform',s);
        })

        setTimeout(function(){
            $('.welcome header .menu a').css('transform','matrix(1, 0, 0, 1, 0, 0)');
            var n = $('.welcome .home .title .letter .inner'),t=200;
            // $('.welcome .home .title .letter .inner').css({'opacity': '1', 'transform': 'translate(0%, -5%) matrix(1, 0, 0, 1, 0, 0)'});
            for (var i = 0; i <= 2; i++) {
                if (i==0) {
                   n.eq(0).css({'opacity': '1', 'transform': 'translate(0%, -5%) matrix(1, 0, 0, 1, 0, 0)'});
               }else if(i==1){
                    setTimeout(function(){
                        n.eq(1).css({'opacity': '1', 'transform': 'translate(0%, -5%) matrix(1, 0, 0, 1, 0, 0)'});
                    },100);
                    
               }else {
                    setTimeout(function(){
                        n.eq(2).css({'opacity': '1', 'transform': 'translate(0%, -5%) matrix(1, 0, 0, 1, 0, 0)'});
                    },300);
               }
                
            }

        },200);

    });

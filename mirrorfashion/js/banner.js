    var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];

    var bannerAtual = 0;

    function trocaBanner(){

        bannerAtual = (bannerAtual + 1) % 2;
        document.querySelector('.banner-destaque img').src = banners[bannerAtual];

    }

    var time = setInterval(trocaBanner, 4000);
    /*var controle = document.querySelector('.pause');

    controle.onchange = function(){
        if(controle.className=='pause'){
            clearInterval(time);
            controle.className='pause';
        }else{

            time= setInterval(trocaBanner, 400);
            controle.className = 'pause'
        }

        return false;

    };*/

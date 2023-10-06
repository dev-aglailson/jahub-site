
window.addEventListener('load', function(){

var btnsExpandeInfos = document.querySelectorAll('.btn-expandir');

//Animações que acontce com base no scroll

(function(){

    
    var offset = window.innerHeight * 3 / 3.2
    
    var ItemsRightToLeft = document.querySelectorAll('.animation-right-to-left');
    var ItemsLeftToRight = document.querySelectorAll('.animation-left-to-right');
    var ItemsBottomToTop = document.querySelectorAll('.animation-bottom-to-top');
    
    //ANIMAÇÕES DA DIREITA PARA ESQUERDA
    function animationRigthToLeft(){

        var posScrollAtual = window.scrollY
        
        ItemsRightToLeft.forEach(item=>{
            //Distacia do item ao topo
            var posItemTop = item.offsetTop

            if((posScrollAtual > posItemTop - offset * 1)){
                let animationTime = item.getAttribute("animationTime")
                item.style.transition= "transform "+animationTime
                item.classList.add('animation-right-to-left-active')
            }else{
                item.classList.remove('animation-right-to-left-active')
            }

        })

    }

    //ANIMAÇÕES DA ESQUERDA PARA DIREITA
    function animationLeftToRigth(){

        var posScrollAtual = window.scrollY
        
        ItemsLeftToRight.forEach(item=>{
            //Distacia do item ao topo
            var posItemTop = item.offsetTop

            if((posScrollAtual > posItemTop - offset * 1)){
                let animationTime = item.getAttribute("animationTime")
                item.style.transition= "transform "+animationTime
                item.classList.add('animation-left-to-right-active')
            }else{
                item.classList.remove('animation-left-to-right-active')
            }

        })

    }

    //ANIMAÇÕES DE BAIXO PARA CIMA
    function animationBottomToTop(){

        var posScrollAtual = window.scrollY
        
        ItemsBottomToTop.forEach(item=>{
            //Distacia do item ao topo
            var posItemTop = item.offsetTop

            if((posScrollAtual > posItemTop - offset * 1)){
                let animationTime = item.getAttribute("animationTime")
                item.style.transition= "transform "+animationTime
                item.classList.add('animation-bottom-to-top-active')
            }else{
                item.classList.remove('animation-bottom-to-top-active')
            }

        })

    }


    //ANIMAÇÃO TITULO DAS SECTIONS
    var headersSections = document.querySelectorAll('.header-section')
    //var offset = window.innerHeight * 3 / 4

    function animaTituloSection(){
        var docTop = window.scrollY

        headersSections.forEach(function(header, indice){
            var separador = header.querySelector('.divisor-title')
            var subtitulo = header.querySelector('.subtitle')
            var headerTop = header.offsetTop

            if(docTop > headerTop - offset * 1.2){
                header.classList.add('header-active')
            }else{
                header.classList.remove('header-active')
            }
        })
    }

    animationRigthToLeft()
    animationLeftToRigth()
    animationBottomToTop()
    animaTituloSection()
    window.addEventListener('scroll', function(){
        animationRigthToLeft()
        animationLeftToRigth()
        animationBottomToTop()
        animaTituloSection()
    })

}())

btnsExpandeInfos.forEach(btn=>{

    btn.addEventListener('click', function(){
        ExpandeInfos(btn)
    })

})

})

function ExpandeInfos(btn){
    let infosProjeto = btn.nextElementSibling ? btn.nextElementSibling : false
    let footerProjeto = infosProjeto.parentNode
    let alturaInfosProjeto = 0
    if(infosProjeto){
        alturaInfosProjeto = !!infosProjeto.style.maxHeight
    }
    if(alturaInfosProjeto){
        infosProjeto.style.maxHeight = null
        footerProjeto.classList.remove('content-infos-open')
    }else{
        let infosProjetos = document.querySelectorAll('.infos') //Todos os box infos 
        infosProjetos.forEach(info =>{
            let alturaInfo = info.style.maxHeight
            let footer = info.parentNode
            if(alturaInfo){
                info.style.maxHeight = null
                footer.classList.remove('content-infos-open')
            }
        })
        infosProjeto.style.maxHeight = infosProjeto.scrollHeight+'px'
        footerProjeto.classList.add('content-infos-open')
    }
}
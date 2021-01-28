document.querySelectorAll('.control-tabs__tab').forEach((item) =>
    item.addEventListener('click', function(e){
        e.preventDefault();

        const id = e.target.getAttribute('href').replace('#', '');

        document.querySelectorAll('.control-tabs__tab').forEach(
            (child) => child.classList.remove('control-tabs__tab--active')
        );

        document.querySelectorAll('.section-hero-tabs__block-slide').forEach(
            (child) => child.classList.remove('section-hero-tabs__block-slide--active')
            
        );

        item.classList.add('control-tabs__tab--active');
        document.getElementById(id).classList.add('section-hero-tabs__block-slide--active')
    })
);

document.querySelector('.control-tabs__tab').click();

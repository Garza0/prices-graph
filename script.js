onload = () => {

    const percentages = [35, 25, 15, 8, 7, 5, 3, 2]
    const names = ['Себестоимость',
        'Зарплаты',
        'Маркетинг',
        'Прибыль бренда',
        'Админ.расходы',
        'Налоги',
        'Прочие издержки',
        'Логистика']

    const bars = document.querySelectorAll('.bar');
    
    function rnd() {
       return Math.floor(Math.random() * 35)
    }

    const percentagesStart = [rnd(), rnd(), rnd(), rnd(), rnd(), rnd(), rnd(), rnd()]

    bars.forEach((bar, i) => {
        bar.children[0].innerText = percentages[i] + '%'
        bar.children[1].innerText = names[i]
    })
    
    

    setBars(percentagesStart)


   
    onscroll = function() {
        if (document.querySelector('.bars').getBoundingClientRect().top < innerHeight || 
        document.querySelector('.bars').getBoundingClientRect().top > -300) {
            document.querySelector('.bars').classList.add('opaque') 
            setBars(percentages)
            
        }
        else {
            setBars([rnd(), rnd(), rnd(), rnd(), rnd(), rnd(), rnd(), rnd()])
            document.querySelector('.bars').classList.remove('opaque') 
        } 
    }
    
    function setBars(percentages) {
        bars.forEach((bar, i) => {
          
            bar.style.height = percentages[i] * 2.6 + '%'
            bar.style.background = `hsl(213, 39%, ${80 - percentages[i]}%)`
        })
    }
     
    
        
}


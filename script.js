onload = () => {

percentages = [35, 25, 15, 8, 7, 5, 3, 2]
names = ['Себестоимость',
         'Зарплаты',
         'Маркетинг',
         'Прибыль бренда',
         'Админ.расходы',
         'Налоги',
         'Прочие издержки',
         'Логистика']

document.querySelectorAll('.bar').forEach((bar, i) => {
     bar.style.height = bar.children[0].innerText = percentages[i] + '%'
     bar.style.background = `hsl(70, 50%, ${100 - percentages[i]}%)`
    bar.children[1].innerText = names[i]
})

}
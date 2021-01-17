;(function(){
    const heroContent = document.querySelector('.hero-content')
    const paragrafo = document.createElement('p')
    const p = document.createElement('p')
    const dateEventDOM = document.querySelector('.hero-content h1 span').innerText
    const dateEvent = getDate(dateEventDOM)
    heroContent.append(paragrafo)
    heroContent.appendChild(p)
    paragrafo.textContent = 'Contagem regressiva para o aniversário do Lucas: '
    
      const oneMinute = 60 * 1000     //timestamp converter
      const oneHour = 60 * oneMinute  //timestamp converter
      const oneDay = 24 * oneHour     //timestamp converter

        function calc(){
          const currentData = new Date()
          let timestamp = dateEvent.getTime() - currentData.getTime()

              const daysLeft = parseInt(timestamp / oneDay)//DIAS
              timestamp = timestamp - daysLeft * oneDay
              const hoursLeft = parseInt(timestamp / oneHour)//HORAS
              timestamp = timestamp - hoursLeft * oneHour
              const minutesLeft = parseInt(timestamp / oneMinute)//MINUTOS
              timestamp = timestamp - minutesLeft * oneMinute
              const secondsLeft = parseInt(timestamp / 1000)//SEGUNDOS  

              addLeftTime(daysLeft, hoursLeft, minutesLeft, secondsLeft)
        };

        calc()

        function addLeftTime(d, h, m, s){
            p.textContent = `${d} dias, ${h} horas, ${m} minutos e ${s} segundos.`

        };

        setInterval(calc, 1000)

        function getDate(str){
            const [date, time] = str.split(' ')
            const [day, month, year] = date.split('/')
            const [hour, minute] = time.split('H')  
            return new Date(year, month - 1, day, hour, minute)
        };
   
})();

/*
OBS
24 HORAS = 1 DIA
60 MINUTOS = 1 HORA
60 SEGUNDOS = 1 MINUTO
1000 MILISEGUNDO = 1 SEGUNDO
*/


        function countdown(){
            const startingDate = new Date('December, 25 2022').getTime()
            const dateNow = new Date().getTime()
             let gap = startingDate - dateNow

            const second = 1000
            const min = second * 60
            const hours = min * 60
            const day = hours * 24

            const d = Math.floor(gap / day)
            const h = Math.floor((gap % day) / hours)
            const m = Math.floor((gap % hours) / min)
            const s = Math.floor((gap % min) / second )

            document.querySelector('.day').innerHTML = d
            document.querySelector('.hour').innerHTML = h
            document.querySelector('.min').innerHTML = m
            document.querySelector('.sec').innerHTML = s
        }
       setInterval(countdown, 1000)

        
  
                  
  




           

               
 
            




document.addEventListener('DOMContentLoaded',()=>{
    const equation = document.querySelector('#equation')
    const solution = document.querySelector('#solution')
    
    
    
    // The issue might be related to the timing of when the JavaScript runs. If the script is executed before the DOM is fully loaded, it won't find the element with id="time".
    
    
    const time = document.querySelector('#time');
    const timeString = ()=>{
        let d = new Date();
        let hour = d.getHours();
        if (hour > 12) {
            hour -= 12;
        } else if (hour === 0) {
            hour = 12;
        }
        
        const minutes = d.getMinutes();
        const formatMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const ampm = d.getHours() >= 12 ? 'PM' : 'AM';
        
        const timeText = `${hour}:${formatMinutes} ${ampm}`;
        time.textContent = timeText;
    }
    timeString();
    setInterval(timeString,1000)
    
    
    //equation
    let textEquation =[];

    function stringChange(){
        if(equation.textContent==""){
            equation.textContent = "           "
            solution.textContent = "           "
        }
    }
    const updateEquation = (value)=>{
        textEquation.push(value)
        equation.textContent = textEquation.join('')
    }
    document.querySelectorAll('#numbers').forEach(button=>{
        button.addEventListener('click',()=>{
            updateEquation(button.textContent);

        })
    })
    document.querySelectorAll('#operand').forEach(button=>{
        button.addEventListener('click',()=>{
            if(button.textContent == "x"){
                updateEquation('*')
            }else if(button.textContent == '/'){
                updateEquation('/')
            }else{
                updateEquation(button.textContent);
            }

        })
    })
    document.querySelectorAll('#special').forEach(button=>{
        button.addEventListener('click',()=>{
            if(button.textContent=="C"){
                solution.textContent = "           "
                stringChange()
                textEquation.pop()
                equation.textContent =textEquation.join('')
            }else{
                try{
                    solution.textContent=parseFloat(eval(equation.textContent)).toFixed(2)
                }catch(error){
                    solution.textContent = "error"
                }
            }
        })
    })


})

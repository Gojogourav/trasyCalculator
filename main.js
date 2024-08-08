
document.addEventListener('DOMContentLoaded',()=>{
    const c = document.querySelector('#\\C')
    const bleft = document.querySelector('#\\(')
    const bright = document.querySelector('#\\)')
    const slash = document.querySelector('#\\/')
    const seven = document.querySelector('#\\7')
    const eight = document.querySelector('#\\8')
    const nine = document.querySelector('#\\9')
    const prod = document.querySelector('#\\x')
    const four = document.querySelector('#\\4')
    const five = document.querySelector('#\\5')
    const six = document.querySelector('#\\6')
    const minus = document.querySelector('#\\-')
    const one = document.querySelector('#\\1')
    const two = document.querySelector('#\\2')
    const three = document.querySelector('#\\3')
    const divide = document.querySelector('#\\+')
    const zero = document.querySelector('#\\0')
    const dot = document.querySelector('#\\.')
    const equal = document.querySelector('#\\=')
    
    const equation = document.querySelector('#equation')
    const solution = document.querySelector('#solution')
    
    
    
    // The issue might be related to the timing of when the JavaScript runs. If the script is executed before the DOM is fully loaded, it won't find the element with id="time".
    
    
    const time = document.querySelector('#time');
    const d = new Date();
    
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
    console.log("dom fully loaded");


    //equation
    let textEquation ='';
    const updateEquation = (value)=>{
        textEquation+=value
        equation.textContent = textEquation
    }
    document.querySelectorAll('button').forEach(button=>{
        button.addEventListener('click',()=>{
            let value = button.textContent
            if(value == 'x'){
                value = '*'
            }

            if(value=='C'){
                if(textEquation.length==1){
                    textEquation = ""
                }else{
                    textEquation = textEquation.slice(0,-1);
                }
                equation.textContent = textEquation
                solution.textContent = ""
            }
            else if(value=='='){
                try{
                    equation.textContent = textEquation
                    const result = eval(textEquation)
                    solution.textContent = result
                } catch(error){
                    solution.textContent = "Error"
                    equation.textContent = result
                }
            }else{
                updateEquation(value)
            }
        })
    })
})
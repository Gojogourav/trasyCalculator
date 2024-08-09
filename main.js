
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
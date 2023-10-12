
const yaxis = [50,100,150,200,250,300]
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
            {
            label: 'Educational',
            data: [12, 8, 3, 5, 2, 3,6,8,9,4,5,2],
            backgroundColor: '#5bb9ef',
            borderColor:'#5bb9ef',
            borderRadius:{
                topLeft:5,
                topRight:5,
               
            },
            barPercentage:0.8,
            
           },
           {
            label: 'Family',
            data: [10, 8, 6, 2, 9, 3,7,5,3,7,6,9],
            backgroundColor: '#105ae6',
            borderColor:'#105ae6',
            borderRadius:{
                topLeft:5,
                topRight:5,
               
            },
            barPercentage:0.8,
            
           }
        ]
    },
    options: {
        
        plugins: {
            legend:{
                display:false,
            },
    },
    scales: {
        y: {
            
          beginAtZero: true,
          border: {
            dash: [5,5],
            
        },  
        ticks:{
            callback:function(value,index,values){
                if(index < 6){
                    console.log(value);
                    value=yaxis[index];
                    console.log(value);
                    console.log(values)
                return value;
                
                
              }
            }
        }
       
        },
        x: {
           
            grid: {
               display: false
            }
         }
      }
    }
   
});



function changetheme(evt,get_themevalue){
    var a = document.getElementById('body').getAttribute("data-theme");
    console.log(a)
    document.getElementById("body").setAttribute("data-theme", get_themevalue)

    var b = document.getElementsByClassName('theme-btn');
    
    for(let i=0;i<b.length;i++){
         b[i].className = b[i].className.replace(' active','')
    }
    evt.currentTarget.className += ' active';
    
}

function Navdropdown(evt,getdropdownid){
   
    var d = document.getElementsByClassName('ezy-nav-link');
    for(let i=0;i<d.length;i++){
        d[i].className = d[i].className.replace(' active','')
   }
   evt.currentTarget.className += ' active';
   
   var tot_dropdown = document.getElementsByClassName('ezy-child-nav-bar');
   for(let i=0;i<tot_dropdown.length;i++){
    tot_dropdown[i].className=tot_dropdown[i].className.replace(' active','')
   }
   const c=document.getElementById(getdropdownid);
   c.classList.add('active');

}
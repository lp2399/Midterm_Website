
var lineChart = document.getElementById('line-chart').getContext('2d');
var chart = new Chart(lineChart,{
    type:'line',
    data:{
        labels:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
        datasets:[{
          label:'Kilowatts / day',
          data:[
            28.5,
            29.4,
            26.3,
            27.6,
            30.1,
            32.1,
            29.9
                    ]
        }]
    },
    options:{
        layout:{
            padding:{
              left:100,
              right:0,
              bottom:0,
              top:0
            }}
    }
});
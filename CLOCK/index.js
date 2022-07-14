function Clock(){
     let date= new Date();
     let hours=date.getHours();
     let minutes=date.getMinutes();
     let second=date.getSeconds();

     hours=(hours<10) ? "0" +hours :hours;
     minutes=(minutes<10) ? "0" +minutes :minutes;
     second=(second<10) ? "0" +second :second;



   let clk= document.getElementById("Clock") ;
    clk.innerHTML=hours + ":" + minutes + ":"+ second ;
//     console.log(clk)
    setTimeout(Clock,1000)

}

Clock();

let year = new Date().getFullYear()

function calcul (firstDate,secondDate ){
    return (Math.ceil((secondDate - firstDate) / (1000*3600*24)));
}

let log ={
    noel : function day_before_christmas(){
        let date1 = new Date();
        let date2 = new Date(year,11,25);

        if(date1 > date2){
            date2 = new Date(year+1,11,25);
            console.log(`il reste ${calcul(date1,date2)} jours avant noël.`) ;
        }
        else{
        console.log(`il reste ${calcul(date1,date2)} jours avant noël.`); 
        }
        
    },
    anniversaire : function day_before_birthday(){
        let date1 = new Date()
        let date2 = new Date(year,11,13)

        if(date1 > date2){
            date2 = new Date(year+1,11,13)
            console.log(`Mon anniversaire sera dans ${calcul(date1,date2)} jours.`)  
        }
        else{
            console.log(`Mon anniversaire sera dans ${calcul(date1,date2)} jours.`) 
        
        }
    },
    vacance : function day_before_vacation(){
        let date1 = new Date()
        let date2 = new Date(year,06,21)

        if(date1 > date2){
            date2 = new Date(year+1,06,21)
            console.log(`les vacances seront dans ${calcul(date1,date2)} jours.`)  
        }
        else{
            console.log(`les vacances seront dans ${calcul(date1,date2)} jours.`) 
        
        }        
        
    },
    solstice: function day_before_vacation(){
        let date1 = new Date()
        let date2 = new Date(year,11,21)

        if(date1 > date2){
            date2 = new Date(year+1,11,21)
            console.log(`Dans ${calcul(date1,date2)} jours, le prochain solstice aura lieu.`) 
        }
        else{
            console.log(`Dans ${calcul(date1,date2)} jours, le prochain solstice aura lieu.`)
        
        }    
    }
}
module.exports = log
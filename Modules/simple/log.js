
let year = new Date().getFullYear()
let month = new Date().getMonth()+1
let day = new Date().getDate()



    function day_before_christmas(){
        let date1 = new Date()
        let date2 = new Date(2022,11,25)
        return (Math.floor((date2 - date1) / (1000*3600*24)))
        
    }
    function day_before_birthday(){
        let date1 = new Date()
        let date2 = new Date(2022,11,13)
        return (Math.floor((date2 - date1) / (1000*3600*24)))
    }
    function day_before_vacation(){
        let date1 = new Date()
        let date4 = new Date(2022,06,21)
        return (Math.floor((date4 - date1) / (1000*3600*24)))
    }
    function day_before_vacation(){
        let date1 = new Date()
        let date5 = new Date(2022,11,21)
        return (Math.floor((date5 - date1) / (1000*3600*24)))
    }
    

    // function(){
    //     console.log(`Il reste ${birthday} avant mon anniversaire !`)
    // }

    // function(){
    //     console.log(`Il reste ${vacation} avant Noêl !`)
    // }

let log ={
    noel : function day_before_christmas(){
        let date1 = new Date()
        let date2 = new Date(2022,11,25)
        console.log(`il reste ${(Math.ceil((date2 - date1) / (1000*3600*24)))} jours avant noël.`) 
        
    },
    anniversaire : function day_before_birthday(){
        let date1 = new Date()
        let date2 = new Date(2022,11,13)
        console.log(`Mon anniversaire sera dans ${(Math.ceil((date2 - date1) / (1000*3600*24)))} jours.`) 
    },
    vacance : function day_before_vacation(){
        let date1 = new Date()
        let date2 = new Date(2022,06,21)
        console.log(`les vacances seront dans ${(Math.ceil((date2 - date1) / (1000*3600*24)))} jours.`) 
    },
    solstice: function day_before_vacation(){
        let date1 = new Date()
        let date2 = new Date(2022,11,21)
        console.log(`Dans ${(Math.ceil((date2 - date1) / (1000*3600*24)))} jours, le prochain solstice aura lieu.`)
    }
}
module.exports = log
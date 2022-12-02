//js element
let dateObject
let time
let weather = {}
let key = '364201d93ffdeeb2e358a03c7d109475'
let theme =  [{clearSkyDay:'clear-sky-day.jpg',clearSkyNight:'clear-sky-night.jpg',fewCloudsDay:'few-clouds-day.jpg',fewCloudsNight:'few-clouds-night.jpg',mistDay:'mist-day.jpg',mistNight:'mist-night.jpg',rainDay:'rain-day.jpg',rainNight:'rain-night.jpg',scatterdCloudsDay:'scattered-clouds-day.jpg',scatterdCloudsNight:'scattered-clouds-night.jpg',showerRainDay:'shower-rain-day.jpg',showerRainNight:"shower-rain-night.jpg",snowDay:'snow-day.jpg',snowNight:"snow-night.jpg",thunderstormDay:'thunderstorm-day.jpg',thunderstormNight:'thunderstrom-night.jpg'},{tentytwototwmtytree:'22to25.jpg'}]
let imperial = false

let clickables = [{googlefrog:null,googleCalendar:null,landscape:true,ambiant1:null,ambiant2:null,ambiant3:null},{font1:true,font2:null,font3:null},{clockMode:false},{fsToggle:null,stt:false}]
if (localStorage.length>0) {
    clickables = JSON.parse(localStorage.getItem('locals'))
}else{
 welcome()
}





//DOM elements
let timeEl = document.getElementById('time-el');
let weatherIcon = document.getElementById('weather-icon')
let notification = document.getElementById('notification')
let tempEl = document.getElementById('temp')



//runs
listeners()
weatherComp()
setInterval(setTime,1000)
setInterval(weatherComp,350000)
// console.log(weather);

function weatherComp(){
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition,showEr)


}else{
   showEr("couldn't get the weather ☹️"); 
}
}


document.getElementById('xBtn').addEventListener("click",()=>{
    notification.style.display = "none"
})




//clicksListners








//time functions

function getTime() {
    dateObject = new Date()

 
    let innerTime;



    
    if (dateObject.getMinutes()<10 ) {
        // console.log('empty 0 place');

        innerTime = dateObject.getHours() + ':' + '0'+
        
        dateObject.getMinutes() 



       }else if(dateObject.getHours()<10){

        innerTime = '0'+

        dateObject.getHours() + ':' + dateObject.getMinutes() 
       }
       
       else if(dateObject.getHours()<10 && dateObject.getMinutes()<10){
        innerTime = '0'+

        dateObject.getHours() + ':' + '0'+ dateObject.getSeconds() 
       }
       
       else{

        innerTime = dateObject.getHours() + ':' + dateObject.getMinutes()
        
    
    }
    
       
    
    return innerTime
}




function setTime() {
    time = getTime()
    
   

    timeEl.innerHTML = time
   
    //fade animation

//    timeEl.style.animationName = "timefade"
//    timeEl.style.animationDuration = '1s'
//    timeEl.style.animationIterationCount = 'infinite'
   
}


//weather functions

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude,longitude)
}


function showEr(error) {
    notification.style.display='block'

    document.getElementById('inner-noti').textContent =  `error:  ${error.message} ☹️`
    


}

function getWeather(latitude,longitude) {
    
    let api =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric` 
    
    if (imperial === true) {
      api =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial` //make an imperial units option

    }else{
        api =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric` 
    }

    fetch(api)
        .then(function(response){
            let data = response.json();
           
            return data;
        })
        .then(function(data){
            // console.log(data);
            weather.tempreture = Math.floor(data.main.temp);
           
            weather.description = data.weather[0].description

            weather.icon = data.weather[0].icon
        }).then(function () {
            // console.log(weather);
            displayWeather()
            setIcon()
            changeTheme()
            changeFont()
            
        })
        

}


function displayWeather(){
tempEl.innerHTML = weather.tempreture + '<span>°</span>'

// console.log(weather.icon);

}




function setIcon(){
    weatherIcon.src = `icons/${weather.icon}.png`
}





function changeTheme(){   
    
  let temptheme = document.getElementById('temptheme')
  
  let mainWindow = document.getElementById('main-window')

  let iframeCnt = document.getElementById('youtube-ambiant')
  //swich to check what theme is anabled

  switch (true) {

  

    case clickables[0].googlefrog === true:
          
          
      switch (true) {
            case weather.icon ==="01d":
                            //clear sky day
                            setTmpImg('google-frog',theme[0].clearSkyDay)
                            setTimeout(tempThemeDis, 4000,'google-frog',theme[0].clearSkyDay)
                break;
                case weather.icon ==="01n":
                            //clear sky
                            setTmpImg('google-frog',theme[0].clearSkyNight)
                                setTimeout(tempThemeDis, 4000,'google-frog',theme[0].clearSkyNight)
                            
                    break;
                     case (weather.icon ==="02d"):
                                //few clouds day
                                setTmpImg('google-frog',theme[0].fewCloudsDay)
                                setTimeout(tempThemeDis, 4000,'google-frog',theme[0].fewCloudsDay)

                                
        
        
                        break;
                        case weather.icon ==="02n":
                                 //few clouds
                                
                                 
                                 setTmpImg('google-frog',theme[0].fewCloudsNight)
                                 setTimeout(tempThemeDis, 4000,'google-frog',theme[0].fewCloudsNight)
                                    
                            break;
                            case weather.icon ==="03d":
                                  //scattered clouds day
                                  setTmpImg('google-frog',theme[0].scatterdCloudsDay)
                                    setTimeout(tempThemeDis, 4000,'google-frog',theme[0].scatterdCloudsDay)
                                                          
                                break;
                                case weather.icon ==="03n":
                                      //scattered clouds
                                      setTmpImg('google-frog',theme[0].scatterdCloudsNight) 
                                                setTimeout(tempThemeDis, 4000,'google-frog',theme[0].scatterdCloudsNight)
                                                            
                                    break;
                                    case weather.icon ==="04d":
                                          //broken clouds day
                                          setTmpImg('google-frog',theme[0].scatterdCloudsDay)
                                         setTimeout(tempThemeDis, 4000,'google-frog',theme[0].scatterdCloudsNight)
        
                                        break;
                                        case weather.icon==="04n":
                                            //broken clouds
                                            setTmpImg('google-frog',theme[0].scatterdCloudsNight)
                                          setTimeout(tempThemeDis, 4000,'google-frog',theme[0].scatterdCloudsNight) 
                                            break;
                                            case weather.icon ==="09d":
                                                //shower-rain day
                                                setTmpImg('google-frog',theme[0].showerRainDay)
                                                            setTimeout(tempThemeDis, 4000,'google-frog',theme[0].showerRainDay)
                                                break;
                                                case weather.icon ==="09n":
                                                    //shower-rain
                                                    setTmpImg('google-frog',theme[0].showerRainNight)
                                                            setTimeout(tempThemeDis, 4000,'google-frog',theme[0].showerRainNight)
                                                    break;
                                                    case weather.icon ==="10d":
                                                        //rain day
                                                        setTmpImg(google-frog,theme[0].rainDay)
                                                            setTimeout(tempThemeDis, 4000,'google-frog',theme[0].rainDay)
                                                        break;
                                                        case weather.icon ==="10n":
                                                            //rain
                                                            setTmpImg('google-frog',theme[0].rainNight)
                                                            setTimeout(tempThemeDis, 4000,'google-frog',theme[0].rainNight)
                                                            break;
                                                            case weather.icon ==="11d":
                                                                 //thunderstorms day
                                                                 setTmpImg(google-frog,theme[0].thunderstormDay)
                                                            setTimeout(tempThemeDis, 4000,google-frog,theme[0].thunderstormDay)
                                                                break;
                                                                case weather.icon ==="11n":
                                                                    //thunderstorms
                                                                    setTmpImg('google-frog',theme[0].thunderstormNight)
                                                                    setTimeout(tempThemeDis, 4000,google-frog,theme[0].thunderstormNight)
                                                                    
                                                                    break;
                                                                    case weather.icon ==="13d":
                                                                        //snow day
                                                                        setTmpImg('google-frog',theme[0].snowDay)
                                                            setTimeout(tempThemeDis, 4000,'google-frog',theme[0].snowDay)
                                                                        
                                                                        break;                                                                     
                                                                        case weather.icon ==="13n":
                                                                            //snow
                                                                            setTmpImg('google-frog',theme[0].snowNight)
                                                            setTimeout(tempThemeDis, 4000,'google-frog',theme[0].snowNight)
                                                                            
                                                                            break;
                                                                            case weather.icon ==="50d":
                                                                                //mist day
                                                                                setTmpImg('google-frog',theme[0].mistDay)
                                                                                setTimeout(tempThemeDis, 4000,'google-frog',theme[0].mistDay)
                                                                                break;
                                                                                case weather.icon ==="50n":
                                                                                                //mist
                                                                               setTmpImg('google-frog',theme[0].mistNight)
                                                            setTimeout(tempThemeDis, 4000,'google-frog',theme[0].mistNight)
                                
                                                                                                break;
                                                                                                                      
            default:
                setTmpImg('google-frog',theme[0].clearSkyDay)
                setTimeout(tempThemeDis, 4000,'google-frog',theme[0].clearSkyDay)
               
        }

       break;    

       case clickables[0].googleCalendar === true:
   
        switch (true) {
            
            case parseInt(weather.tempreture)>=-20 && Number( weather.tempreture)<-5:
                   setTmpImg('google-calendar','-20to-5.jpg')
                 setTimeout(tempThemeDis,4000,'google-calendar','-20to-5.jpg')
                break;
            case Number( weather.tempreture)>=-5 && Number( weather.tempreture)<10:
                setTmpImg('google-calendar','-5to5.jpg')
                setTimeout(tempThemeDis,4000,'google-calendar','-5to5.jpg')
                break;
            case Number( weather.tempreture)>=10 && Number( weather.tempreture)<15:
                setTmpImg('google-calendar','10to15.jpg')
                setTimeout(tempThemeDis,4000,'google-calendar','10to15.jpg')
                break;
            case Number( weather.tempreture)>=15 && Number( weather.tempreture)<18:
                setTmpImg('google-calendar','15to18.jpg')
                setTimeout(tempThemeDis,4000,'google-calendar','15to18.jpg')
                break;
            case Number( weather.tempreture)>=18 && Number( weather.tempreture)<22:
                 setTmpImg('google-calendar','18to22.jpg')
                 setTimeout(tempThemeDis,4000,'google-calendar','18to22.jpg')
                break;
            case Number( weather.tempreture)>=22 && Number( weather.tempreture)<25:
               setTmpImg('google-calendar','22to25.jpg')
               setTimeout(tempThemeDis,4000,'google-calendar','22to25.jpg')
                break;
            case Number( weather.tempreture)>=25 && Number( weather.tempreture)<30:
                
                 setTmpImg('google-calendar','25to30.jpg')
                    setTimeout( tempThemeDis,4000,'google-calendar','25to30.jpg')
                break;
            case Number( weather.tempreture)>=30 && Number( weather.tempreture)<32:
                setTmpImg('google-calendar','30to32.jpg')
                setTimeout(tempThemeDis,4000,'google-calendar','30to32.jpg')
                break;
            case Number( weather.tempreture)>=32 && Number( weather.tempreture)<35:
                 setTmpImg('google-calendar','32to35.jpg')
                 setTimeout(tempThemeDis,4000,'google-calendar','32to35.jpg')
                break;
            case Number( weather.tempreture)>=35 && Number( weather.tempreture)<60:
                setTmpImg('google-calendar','35to60.jpg')
                setTimeout(tempThemeDis,4000,'google-calendar','35to60.jpg')
                break;
            default:
                setTmpImg('google-calendar','22to25.jpg')
                setTimeout(tempThemeDis,4000,'google-calendar','22to25.jpg')
                break;
        }
        break;

    case clickables[0].landscape === true:

        switch (true) {
            case weather.icon ==="01d":
                            //clear sky day
                            setTmpImg('dynamic-landscape',theme[0].clearSkyDay)
                            setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].clearSkyDay)
                break;
                case weather.icon ==="01n":
                            //clear sky
                            setTmpImg('dynamic-landscape',theme[0].clearSkyNight)
                                setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].clearSkyNight)
                            
                    break;
                     case (weather.icon ==="02d"):
                                //few clouds day
    
                                setTmpImg('dynamic-landscape',theme[0].fewCloudsDay)
                                setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].fewCloudsDay)
        
        
                        break;
                        case weather.icon ==="02n":
                                 //few clouds
                                 setTmpImg('dynamic-landscape',theme[0].fewCloudsNight)
                                setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].fewCloudsNight)
                            break;
                            case weather.icon ==="03d":
                                  //scattered clouds day
                                  setTmpImg('dynamic-landscape',theme[0].scatterdCloudsDay)
                                setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].scatterdCloudsDay)
                                                          
                                break;
                                case weather.icon ==="03n":
                                      //scattered clouds
                                      setTmpImg('dynamic-landscape',theme[0].scatterdCloudsNight) 
                                     setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].scatterdCloudsNight)
                                    break;
                                    case weather.icon ==="04d":
                                          //broken clouds day
                                          setTmpImg('dynamic-landscape',theme[0].scatterdCloudsDay)
                                                            setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].scatterdCloudsDay)
        
                                        break;
                                        case weather.icon==="04n":
                                            //broken clouds
                                            setTmpImg('dynamic-landscape',theme[0].scatterdCloudsNight)
                                         setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].scatterdCloudsNight) 
                                            break;
                                            case weather.icon ==="09d":
                                                //shower-rain day
                                                setTmpImg('dynamic-landscape',theme[0].showerRainDay)
                                                            setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].showerRainDay)
                                                break;
                                                case weather.icon ==="09n":
                                                    //shower-rain
                                                    setTmpImg('dynamic-landscape',theme[0].showerRainNight)
                                                            setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].showerRainNight)
                                                    break;
                                                    case weather.icon ==="10d":
                                                        //rain day
                                                        setTmpImg('dynamic-landscape',theme[0].rainDay)
                                                            setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].rainDay)
                                                        break;
                                                        case weather.icon ==="10n":
                                                            //rain
                                                            setTmpImg('dynamic-landscape',theme[0].rainNight)
                                                            setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].rainNight)
                                                            break;
                                                            case weather.icon ==="11d":
                                                                 //thunderstorms day
                                                                 setTmpImg('dynamic-landscape',theme[0].thunderstormDay)
                                                            setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].thunderstormDay)
                                                                break;
                                                                case weather.icon ==="11n":
                                                                    //thunderstorms
                                                                    setTmpImg('dynamic-landscape',theme[0].thunderstormNight)
                                                                    setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].thunderstormNight)
                                                                    
                                                                    break;
                                                                    case weather.icon ==="13d":
                                                                        //snow day
                                                                        setTmpImg('dynamic-landscape',theme[0].snowDay)
                                                            setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].snowDay)
                                                                        
                                                                        break; 
                                                                        
                                                                        case weather.icon ==="13n":
                                                                            //snow
                                                                            setTmpImg('dynamic-landscape',theme[0].snowNight)
                                                            setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].snowNight)
                                                                            
                                                                            break;
                                                                            case weather.icon ==="50d":
                                                                                //mist day
                                                                                setTmpImg('dynamic-landscape',theme[0].mistDay)
                                                            setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].mistDay)
                                                                                break;
                                                                                case weather.icon ==="50n":
                                                                                                //mist
                                                                               setTmpImg('dynamic-landscape',theme[0].mistNight)
                                                            setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].mistNight)
                                
                                                                                                break;
                                                                        
                                                                                                         
            default:
                setTmpImg('dynamic-landscape',theme[0].clearSkyDay)
                setTimeout(tempThemeDis, 4000,'dynamic-landscape',theme[0].clearSkyDay)
                break;
        }

        
        break;
    
   case clickables[0].ambiant1 === true:
             iframeCnt.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/WUbpXWW1qN4?autoplay=1&mute=0&controls=0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; 
             picture-in-picture; allowfullscreen;" ></iframe>`
             iframeCnt.style.cssText = 'transform:translateX(-80px);'
        break;

   case clickables[0].ambiant2 === true:
             iframeCnt.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/4KlE5wN4n3E?autoplay=1&mute=0&controls=0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; 
             picture-in-picture; allowfullscreen;" ></iframe>`
           
        break;

   case clickables[0].ambiant3 === true:
        iframeCnt.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/6VB4bgiB0yA?autoplay=1&mute=0&controls=0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; 
        picture-in-picture; allowfullscreen;" ></iframe>`
        break;
    default:
         
    break;
    }

  
    // console.log('frog:' + clickables[0].googlefrog +' '+ 'calender:' + clickables[0].googleCalendar +' '+ 'landscape:'+clickables[0].landscape);
    
   
      






  //setting the temporery image





  function setTmpImg(themeDir,tmpimg) {
      
      temptheme.style.background=`url(images/${themeDir}/${tmpimg})`
      temptheme.style.animation = 'fadein 3.5s ease-in-out'
      
  }

    //setting the main window image

function tempThemeDis(mainThemeDir,mainThemeImage) {
    
    temptheme.style.display = 'none'
    mainWindow.style.background = `url(images/${mainThemeDir}/${mainThemeImage})`
    mainWindow.style.backgroundSize= 'cover'
    mainWindow.style.backgroundRepeat= 'no-repeat'
    
}


}


function changeFont() { 
    // console.log('font1:' +clickables[1].font1 +  ' font2:' + clickables[1].font2 +' font3:' +clickables[1].font3);

    
    let infoBar = document.getElementById('info-bar')
    switch (true) {
        case clickables[1].font1 === true:
                    infoBar.style.fontFamily = 'google sans'
                    document.getElementById('weather-icon').style.paddingBottom  = ' 15px'
                    document.getElementById('temp').style.paddingBottom  = ' 15px'
            break;
        case clickables[1].font2 === true:
            infoBar.style.fontFamily = 'Abril Fatface'
            document.getElementById('weather-icon').style.paddingBottom  = ' 10px'
            document.getElementById('temp').style.paddingBottom  = ' 10px'
            break;
        case clickables[1].font3 === true:
            infoBar.style.fontFamily = 'sacramento'
            document.getElementById('weather-icon').style.paddingBottom  = ' 23px'
            document.getElementById('temp').style.paddingBottom  = ' 23px'
                break;
        default:
            infoBar.style.fontFamily = 'google sans'
            break;
    }
}







function listeners(){
    let wlpOption1 = document.getElementById('wlp-option1');
    let wlpOption2 = document.getElementById('wlp-option2')
    let wlpOption3 = document.getElementById('wlp-option3')
//fonts listeners 
    let fontOption1 = document.getElementById('font-option1')
    let fontOption2 = document.getElementById('font-option2')
    let fontOption3 = document.getElementById('font-option3')
//youtbe ambiants
    let ytAmbiant1 = document.getElementById('ambiant-option1')
    let ytAmbiant2 = document.getElementById('ambiant-option2')
    let ytAmbiant3 = document.getElementById('ambiant-option3')
    //ui 
    let settings = document.getElementById('settings-panel')
    let clockBtn = document.getElementById('clock-mode')
    let infoBar  = document.getElementById('info-bar')
    let mainWindwo = document.getElementById('main-window')
    let touchBox = document.getElementById('touch-box')

    
    


function clockMode() {

    clockBtn.addEventListener('click',()=>{

        if (clickables[2].clockMode === false) {
            clickables[2].clockMode = true
            infoBar.style.cssText = ` align-items:flex-end;
            display: flex;
            position: static;
            justify-self: center;
            left: 0;
            font-size:300px;
            color: aliceblue;
            margin:0 0 3% 3%;
            gap: 0px;
            text-shadow:2px 2px 5px black;
            z-index: 2;
            
            `
            mainWindwo.style.cssText = `display: flex;
            justify-content: center;
            align-items: center;
            background: black;
            `
            
           disableAll(wlpOption1,wlpOption2,wlpOption3)
           disableAll(ytAmbiant1,ytAmbiant2,ytAmbiant3)
             
           clockBtn.style.backgroundColor = 'royalblue'
           clockBtn.style.color = 'white'
           clockBtn.style.border = 'none'
           return;
        }else if (clickables[2].clockMode = true) {
            
            
            infoBar.style.cssText = `  align-items:flex-end;
            display: flex;
            position: fixed;
            bottom:0;
            left: 0;
            font-size: 130px;
            color: aliceblue;
            margin:0 0 3% 3%;
            gap: 5px;
            z-index: 2;
            
            
            `
            mainWindwo.style.cssText = `width: 100%;
            min-height:100vh;
            position: relative;
            z-index: 100;
            overflow: hidden;
            /* background-image:url(/images/dynamic-landscape/clear-sky-day.jpg); */
            background: rgb(18, 23, 27);
            background-size: cover !important;
            transition: all .3s;
            
            `

            clockBtn.style.backgroundColor = 'aliceblue'
           clockBtn.style.color = 'royalblue'
           clockBtn.style.border = 'royalblue 2px solid'

           
            clickables[2].clockMode = false
            
        }
        
    })
}

   function toImperial () {
   temp.addEventListener('click',()=>{
    if (imperial === false) {
        imperial = true
        weatherComp()
        
        return;
    }else if(imperial ===true){
       imperial = false
       weatherComp()

       return;
    }
   
})





   } 
    
   
   function toImperialTouch () {
    temp.addEventListener('touchstart',()=>{
     if (imperial === false) {
         imperial = true
         weatherComp()
         
         return;
     }else if(imperial ===true){
        imperial = false
        weatherComp()
 
        return;
     }
    
 })
 
 
 
 
 
    } 
    
 function toggleFullScreen() {
    document.addEventListener('keypress',e=>{

        if (e.key.toLowerCase() == 'f' && clickables[3].fsToggle == false) {
            document.documentElement.requestFullscreen().catch(e=>{
                showEr(e)
               })
               clickables[3].fsToggle = true
               
               return;
   
   
        }else if(clickables[3].fsToggle = true && e.key.toLowerCase() == 'f'){
             document.exitFullscreen()
             clickables[3].fsToggle=false
        }
        localStorage.setItem('locals',JSON.stringify(clickables))

                
       })
     }

   
function settingsTouch(){
    console.log(clickables[3].fsToggle);
    touchBox.addEventListener('touchstart',e=>{

        if (clickables[3].fsToggle == false) {
             settings.style.right =  '0px'
               clickables[3].fsToggle = true
               
               return;
   
   
        }else if(clickables[3].fsToggle = true){
            settings.style.right =  '-400px'

             clickables[3].fsToggle=false
        }

                
       })

       localStorage.setItem('locals',JSON.stringify(clickables))

       
}

  
function toggleSettings() {
    
    document.addEventListener('keypress',e=>{
        if (e.key.toLowerCase() == 'o' && clickables[3].stt === false) {
              settings.style.right =  '0px'
              clickables[3].stt = true
              return;
        }else if(e.key.toLowerCase() == 'o' && clickables[3].stt == true){
            settings.style.right =  '-400px'
            clickables[3].stt = false
            return;
        }

        localStorage.setItem('locals',JSON.stringify(clickables))



    })
   
}


   

       //ui events
        toggleSettings()
        toggleFullScreen()
        settingsTouch()
        clockMode()
        toImperial()
        toImperialTouch()
 
//event listenmers for the themes and ambiants
    wlpOption1.addEventListener('click',()=>{wlpOption1.style.cssText = `outline: 2px royalblue solid;
    outline-offset: 3px;
    opacity: 1;`
    document.getElementById('youtube-ambiant').innerHTML = "";
    clickables[0].googlefrog = true
    clickables[0].ambiant1 = false
    clickables[0].ambiant2 = false
    clickables[0].ambiant3 = false
    disable(wlpOption2,wlpOption3,clickables[0].googleCalendar = false,clickables[0].landscape = false)
    disableAll(ytAmbiant1,ytAmbiant2,ytAmbiant3)
    changeTheme()
    localStorage.setItem('locals',JSON.stringify(clickables))
    })

    
    wlpOption2.addEventListener('click',()=>{wlpOption2.style.cssText = `outline: 2px royalblue solid;
    outline-offset: 3px;
    opacity: 1;`
    document.getElementById('youtube-ambiant').innerHTML = "";
    clickables[0].googleCalendar = true
    clickables[0].ambiant1 = false
    clickables[0].ambiant2 = false
    clickables[0].ambiant3 = false
        disable(wlpOption1,wlpOption3,clickables[0].googlefrog = false,clickables[0].landscape = false)
        disableAll(ytAmbiant1,ytAmbiant2,ytAmbiant3)

        changeTheme()
        localStorage.setItem('locals',JSON.stringify(clickables))
    })


    wlpOption3.addEventListener('click',()=>{wlpOption3.style.cssText = `outline: 2px royalblue solid;
    outline-offset: 3px;
    opacity: 1;`
    document.getElementById('youtube-ambiant').innerHTML = "";
    clickables[0].landscape = true
    clickables[0].ambiant1 = false
    clickables[0].ambiant2 = false
    clickables[0].ambiant3 = false
    disableAll(ytAmbiant1,ytAmbiant2,ytAmbiant3)
    disable(wlpOption1,wlpOption2,clickables[0].googlefrog = false,clickables[0].googleCalendar = false)
    
        changeTheme()
        localStorage.setItem('locals',JSON.stringify(clickables))

    })
//ambiants
    ytAmbiant1.addEventListener('click',()=>{
        ytAmbiant1.style.cssText = `outline: 2px royalblue solid;
        outline-offset: 3px;
        opacity: 1;`  
        clickables[0].ambiant1 = true
        clickables[0].ambiant2 = false
        clickables[0].ambiant3 = false
        clickables[0].googlefrog = false
        clickables[0].googleCalendar = false
        clickables[0].landscape = false
        disable(ytAmbiant2,ytAmbiant3)
        disableAll(wlpOption1,wlpOption2,wlpOption3)
        changeTheme()
        localStorage.setItem('locals',JSON.stringify(clickables))
    })


      ytAmbiant2.addEventListener('click',()=>{
        ytAmbiant2.style.cssText = `outline: 2px royalblue solid;
        outline-offset: 3px;
        opacity: 1;`
        clickables[0].ambiant2 = true
        clickables[0].ambiant1 = false
        clickables[0].ambiant3 = false
        clickables[0].googlefrog = false
        clickables[0].googleCalendar = false
        clickables[0].landscape = false
        disable(ytAmbiant1,ytAmbiant3)  
        disableAll(wlpOption1,wlpOption2,wlpOption3)
        changeTheme()
        localStorage.setItem('locals',JSON.stringify(clickables))

        
    })



    ytAmbiant3.addEventListener('click',()=>{
        ytAmbiant3.style.cssText = `outline: 2px royalblue solid;
        outline-offset: 3px;
        opacity: 1;`  
        clickables[0].ambiant3 = true
        clickables[0].ambiant1 = false
        clickables[0].ambiant2 = false
        clickables[0].googlefrog = false
        clickables[0].googleCalendar = false
        clickables[0].landscape = false
     
        disable(ytAmbiant1,ytAmbiant2)
        disableAll(wlpOption1,wlpOption2,wlpOption3)
        changeTheme()
        localStorage.setItem('locals',JSON.stringify(clickables))

    })



//event listenrs for the fonts


     fontOption1.addEventListener('click',()=>{
      
       fontOption1.style.cssText = `outline: 2px royalblue solid;
        outline-offset: 3px;
        opacity: 1;`

        clickables[1].font1 = true

        clickables[1].font2 = false
        clickables[1].font3 = false
     disable(fontOption2,fontOption3)
     changeFont()
     localStorage.setItem('locals',JSON.stringify(clickables))


    

     })

        


     
     fontOption2.addEventListener('click',()=>{
        fontOption2.style.cssText = `outline: 2px royalblue solid;
        outline-offset: 3px;
        opacity: 1;`
       
        clickables[1].font2 = true
        clickables[1].font1 = false
        clickables[1].font3 = false
       
        

     disable(fontOption1,fontOption3)
     changeFont()
     localStorage.setItem('locals',JSON.stringify(clickables))


     })


     fontOption3.addEventListener('click',()=>{
        fontOption3.style.cssText = `outline: 2px royalblue solid;
        outline-offset: 3px;
        opacity: 1;`

     
        clickables[1].font3 = true
        clickables[1].font1 = false
        clickables[1].font2 = false
        disable(fontOption1,fontOption2)
        changeFont()
        localStorage.setItem('locals',JSON.stringify(clickables))
     })

    


     


    
}



//function to make it easy to disable unclicked
function disable(firstOption,secondOption,firstState,seconedState) {
    firstOption.style.cssText = `outline:none;
outline-offset:none;
opacity: .6;`

secondOption.style.cssText = `outline:none;
outline-offset:none;
opacity: .6;`

firstState = false
seconedState = false


}
  
function disableAll(firstOption,secondOption,thirdOption) {
    firstOption.style.cssText = `outline:none;
outline-offset:none;
opacity: .6;`

secondOption.style.cssText = `outline:none;
outline-offset:none;
opacity: .6;`

thirdOption.style.cssText = `outline:none;
outline-offset:none;
opacity: .6;`



}





    function welcome() {
        setTimeout(()=>{
             setTimeout(()=>{document.getElementById('welcome-card').style.cssText = 'display:block'},500)
            document.getElementById('welcome-card').style.cssText = 'opacity:1;margin-top:100px'
            },1000)
            



            setTimeout(()=>{
                document.getElementById('welcome-card').style.cssText = 'opacity:0;margin-top:90px;'
                setTimeout(()=>{
                    document.getElementById('welcome-card').style.cssText = 'display:none;'
                    },500)
                },8500)
            
    }
    



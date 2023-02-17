let arrMin=[] 
document.querySelectorAll('#playlist #items #text  ').forEach(e=>arrMin.push(e.getAttribute('aria-label').replace(/[^0-9]/g,'').slice(0,2)))

let arrSec=[] 
document.querySelectorAll('#playlist #items #text  ').forEach(e=>arrSec.push(e.getAttribute('aria-label').replace(/[^0-9]/g,'').slice(2)))

let totalMinute=arrMin.reduce((a,v)=>{
    a=a+Number(v);
    return a;
    },0)

let totalSec=arrSec.reduce((a,v)=>{
    a=a+Number(v);
    return a;
    },0)
    
    let totalTimeInSec=(totalMinute*60)+totalSec;
/** 
 * Convert seconds to hh-mm-ss format.
 * @param {number} totalSeconds - the total seconds to convert to hh- mm-ss
**/
var SecondsTohhmmss = function(totalSeconds) {
    var hours   = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
  
    // round seconds
    seconds = Math.round(seconds * 100) / 100
  
    var result = (hours < 10 ? "0" + hours : hours);
        result += ":" + (minutes < 10 ? "0" + minutes : minutes);
        result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
    return result;
  }
   

    alert(SecondsTohhmmss(totalTimeInSec));
var player = require('play-sound')(opts = {})

// maybe https://www.npmjs.com/package/wait-until
// also simple native stuff https://flaviocopes.com/javascript-sleep/
 
function getit()
{
	quarter = Math.floor((new Date()).getMinutes() / 15)
	if (quarter != 0) {
		return "audio/Toll- " + (quarter) + "Quarter.mp3"
	}
	hour = Math.floor((new Date()).getHours() % 12) || 12
	//if (noHourBells) return "audio/Toll- 4Quarter.mp3"
	//if (hourBells)
	return "audio/" + hour.toString().padStart(2, '0') + " hour.mp3"
	
}

// crude, it ignores seconds
function nextalarm()
{
	d = new Date()
	waitfor = (((14-Math.floor(d.getMinutes() % 15)) *60) + (60-d.getSeconds()) + 1 ) * 1000 
	console.log("wait for " + waitfor)
	setTimeout(() => {
		sampleBasedOnCurrentTime = getit()
		console.log(sampleBasedOnCurrentTime)


		player.play(sampleBasedOnCurrentTime, function(err){
		  if (err) throw err

		  nextalarm()
		})


		return
	}, waitfor)
}
nextalarm()
return



// $ mplayer foo.mp3 
player.play('sample.mp3', function(err){
  if (err) throw err
})

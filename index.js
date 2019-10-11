var player = require('play-sound')(opts = {})
 
function getit()
{
	quarter = Math.floor((new Date()).getMinutes() / 15)
	if (quarter != 0) {
		return "audio/Toll- " + (quarter) + "Quarter.mp3"
	}
	hour = Math.floor((new Date()).getHours() % 12) || 12
	//if (noHourBells) return "audio/Toll- 4Quarter.mp3"
	//if (hourBells)
	return "audio/" + hour.padStart(2, '0') + " hour.mp3"
	
}

// crude, it ignores seconds
function nextalarm()
{
	waitfor = (15-Math.floor((new Date()).getMinutes() % 15)) *60 * 1000 +1
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

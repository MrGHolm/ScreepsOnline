let MSpawning = {
    run:function () {
        if (Memory.spawnCreepsQue.length > 0){
            if (Memory.spawnCreepsQue[0] === 'harvester'){
                spawnHarvester();
            }
        }
    }
}
module.exports = MSpawning

function spawnHarvester() {
    console.log('Spawning a harvester.')
}
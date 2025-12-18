let MSpawning = {
    run:function () {
        if (Memory.spawnCreepsQue.length > 0){
            spawnHarvester();
        }
    }
}
module.exports = MSpawning

function spawnHarvester() {
    console.log('Spawning a harvester.')
}
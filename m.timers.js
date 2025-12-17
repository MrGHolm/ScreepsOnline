let MTimers = {
    run:function () {
        if (Memory.sTimer < 10){
            Memory.sTimer++
        }
        else {
            Memory.sTimer = 0;
        }
    }
}
module.exports = MTimers;
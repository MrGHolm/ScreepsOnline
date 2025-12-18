let timers = require('m.timers')
let mRooms = require('m.rooms')

module.exports.loop = function () {
    console.log('')
    timers.run();
    for (let room in Game.rooms) {
        let myRoom = Game.rooms[room];
        mRooms.run(myRoom);
    }
}
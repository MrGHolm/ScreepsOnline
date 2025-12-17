let MRooms = {
    run: function (myRoom) {
        if (Memory.sTimer === 1) {
            let mSources = myRoom.find(FIND_SOURCES);
            let mSourceArray = []
            for (let mS in mSources) {
                let mSourceData = {
                    index: mS,
                    id: mSources[mS].id,
                    pos: mSources[mS].pos.findPathTo(myRoom.spawn.pos)[0]
                };
                mSourceArray.push(mSourceData);
            }
            myRoom.memory.mySources = mSourceArray;
            let mHarvesters = myRoom.find(FIND_MY_CREEPS, {filter: (mc) => mc.memory.role === 'harvester'})
        }
    }
}
module.exports = MRooms;
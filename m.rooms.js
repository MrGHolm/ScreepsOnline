let MRooms = {
    run: function (myRoom) {
        if (Memory.sTimer === 1) {
            let mSources = myRoom.find(FIND_SOURCES);
            let mSourceArray = []
            for (let mS in mSources) {
                let mSourceData = {
                    index: mS,
                    id: mSources[mS].id,
                    pos: mSources[mS].pos.findPathTo(myRoom.spawn.pos,)[0]
                };
                mSourceArray.push(mSourceData);
            }
            myRoom.memory.mySources = mSourceArray;
            for (let memS in myRoom.memory.mySources) {
                let lMemS = myRoom.memory.mySources[memS];
                if (myRoom.pos.lookForAt(LOOK_STRUCTURES, lMemS.pos).structureType !== STRUCTURE_CONTAINER ||
                    myRoom.pos.lookForAt(LOOK_CONSTRUCTION_SITES, lMemS.pos).structureType !== STRUCTURE_CONTAINER) {
                    myRoom.pos.createConstructionSite(lMemS.pos, STRUCTURE_CONTAINER)
                }
            }
            let mHarvesters = myRoom.find(FIND_MY_CREEPS, {filter: (mc) => mc.memory.role === 'harvester'})
            if (mHarvesters.length < mSourceArray.length) {
                
            }
        }
    }
}
module.exports = MRooms;
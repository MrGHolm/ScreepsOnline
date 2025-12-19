let MRooms = {
    run: function (myRoom) {
        if (Memory.sTimer === 1) {
            let mSources = myRoom.find(FIND_SOURCES);
            let mSourceArray = []
            let mSpawnArray = myRoom.find(FIND_MY_SPAWNS)
            for (let mS in mSources) {
                console.log('pos1 : ' + mSources[mS]);
                console.log('myRoom position : ' + myRoom[mS].find(FIND_MY_SPAWNS));
                let mSourceData = {
                    index: mS,
                    id: mSources[mS].id,
                    pos: mSources[mS].findPathTo(mSources[mS].pos.findClosestByRange(mSpawnArray).pos)[0]

                };
                console.log('mSourceData pos '+ mS + 1 +': '+mSourceData.pos)
                mSourceArray.push(mSourceData);
            }
            myRoom.memory.mySources = mSourceArray;
            console.log('mSourceArray : '+mSourceArray);
            for (let memS in myRoom.memory.mySources) {
                let lMemS = myRoom.memory.mySources[memS];
                console.log('pos2')
                if (myRoom.pos.lookForAt(LOOK_STRUCTURES, lMemS.pos).structureType !== STRUCTURE_CONTAINER ||
                    myRoom.pos.lookForAt(LOOK_CONSTRUCTION_SITES, lMemS.pos).structureType !== STRUCTURE_CONTAINER) {
                    myRoom.pos.createConstructionSite( lMemS.pos, STRUCTURE_CONTAINER);
                }
            }
            console.log('pos3')
            let mHarvesters = myRoom.find(FIND_MY_CREEPS, {filter: (mc) => mc.memory.role === 'harvester'})
            if (mHarvesters.length < mSourceArray.length) {
                let que = Memory.spawnCreepsQue;
                if (!que.includes('harvester')) {
                    que.append('harvester');
                    Memory.spawnCreepsQue = que;
                }
            }
        }
    }
}
module.exports = MRooms;
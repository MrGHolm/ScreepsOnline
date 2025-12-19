let MRooms = {
    run: function (myRoom) {
        if (Memory.sTimer === 1) {
            let mSources = myRoom.find(FIND_SOURCES);
            let mSourceArray = []
            for (let mS in mSources) {
                console.log('pos1 : ' + mSources[mS]);
                console.log('myRoom position : ' + myRoom[mS].find(FIND_MY_SPAWNS));
                let mSourceData = {
                    index: mS,
                    id: mSources[mS].id,
                    xPos: mSources[mS].findPathTo(myRoom.find(FIND_MY_SPAWNS)[0]).x,
                    yPos: mSources[mS].findPathTo(myRoom.find(FIND_MY_SPAWNS)[0]).y
                };
                mSourceArray.push(mSourceData);
            }
            myRoom.memory.mySources = mSourceArray;
            console.log('mSourceArray : '+mSourceArray);
            for (let memS in myRoom.memory.mySources) {
                let lMemS = myRoom.memory.mySources[memS];
                console.log('pos2')
                if (myRoom.pos.lookForAt(LOOK_STRUCTURES, lMemS.xPos, lMemS.yPos).structureType !== STRUCTURE_CONTAINER ||
                    myRoom.pos.lookForAt(LOOK_CONSTRUCTION_SITES, lMemS.xPos, lMemS.yPos).structureType !== STRUCTURE_CONTAINER) {
                    myRoom.pos.createConstructionSite(lMemS.xPos, lMemS.yPos, STRUCTURE_CONTAINER);
                }
            }
            console.log('pos3')
            let mHarvesters = myRoom.find(FIND_MY_CREEPS, {filter: (mc) => mc.memory.role === 'harvester'})
            if (mHarvesters.length < mSourceArray.length) {
                let que = Memory.spawnCreepsQue;
                que.append('harvester');
                Memory.spawnCreepsQue = que;
            }
        }
    }
}
module.exports = MRooms;
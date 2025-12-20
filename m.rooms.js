let MRooms = {
    run: function (myRoom) {
        if (Memory.sTimer === 1) {
            let mSources = myRoom.find(FIND_SOURCES);
            let mSourceArray = []
            let mSpawnArray = myRoom.find(FIND_MY_SPAWNS)
            for (let mS in mSources) {
                //console.log('pos1 : ' + mSources[mS]);
                //console.log('myRoom position : ' + myRoom);
                let mSourceData = {
                    index: mS,
                    id: mSources[mS].id,
                    pos: mSources[mS].pos.findPathTo(mSources[mS].pos.findClosestByRange(mSpawnArray).pos)[0]

                };
                //console.log('mSourceData pos '+ mS + 1 +': '+mSourceData.pos)
                mSourceArray.push(mSourceData);
            }
            myRoom.memory.mySources = mSourceArray;
            //console.log('mSourceArray : '+mSourceArray);
            for (let memS in myRoom.memory.mySources) {
                let lMemS = myRoom.memory.mySources[memS];
                //console.log('pos2')
                if (myRoom.lookForAt(LOOK_STRUCTURES, lMemS.pos.x, lMemS.pos.y).structureType !== STRUCTURE_CONTAINER ||
                    myRoom.lookForAt(LOOK_CONSTRUCTION_SITES, lMemS.pos.x, lMemS.pos.y).structureType !== STRUCTURE_CONTAINER) {
                    myRoom.createConstructionSite(lMemS.pos.x, lMemS.pos.y, STRUCTURE_CONTAINER);
                }
            }
            //console.log('pos3')
            let mHarvesters = myRoom.find(FIND_MY_CREEPS, {filter: (mc) => mc.memory.role === 'harvester'})
            let que = Memory.spawnCreepsQue;
            let queCreep = {
                creepRoom: '',
                creepRole: '',
                creepTarget: '',
                creepTargetPos: '',
                creepIndex: ''
            }
            if (mHarvesters.length < mSourceArray.length) {
                if (que === undefined) {
                    que = []
                }
                //console.log(que)
                queCreep.creepRoom = myRoom.name
                queCreep.creepRole = 'harvester'
            }
        }
    }
}
module.exports = MRooms;
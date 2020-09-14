import idb from './idb'

var dbPromise = idb.open("football",1,upgradeDb => {
    if(!upgradeDb.objectStoreNames.contains("favorite")){
        upgradeDb.createObjectStore("favorite",{keyPath:'id'})
    }
})

export const get = () => {
    return dbPromise.then( db => {
        var tx = db.transaction("favorite","readonly")
        var store = tx.objectStore("favorite")
        return store.getAll()
    })
}

export const check = id => {
    return dbPromise.then( db => {
        var tx = db.transaction("favorite","readonly")
        var store = tx.objectStore("favorite")
        return store.get(id)
    }).then( item => {
        return item ? true : false
    })
}

export const add = (id,name) => {
    dbPromise.then( db => {
        var tx = db.transaction("favorite","readwrite")
        var store = tx.objectStore("favorite")
        var data = {
            id:id,
            name:name
        }
        store.add(data)
        return tx.complete
    }).then(()=>{
        M.toast({html: 'added to favorite!'})
        location.reload()
    }).catch(()=>{
        M.toast({html: 'failed add to favorite!'})
    })
}

export const del = id =>{
    dbPromise.then((db)=>{
        var tx = db.transaction("favorite","readwrite")
        var store = tx.objectStore("favorite")
        store.delete(id)
        return tx.complete
    }).then(()=>{
        M.toast({html: 'deleted from favorite!'})
        location.reload()
    }).catch(()=>{
        M.toast({html: 'failed delete from favorite!'})
    })
}
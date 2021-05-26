export const addNote = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('notes')
        .add({
            ...note,
            favorite: false,
            createdAt: new Date()
        })
        .then(() => {
            console.log('new note added')
        })
        .catch((e) => {
            console.log(e)
        })
    }
}

export const deleteNote = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).delete()
        .then(() => {
            console.log('delelet note')
        })
        .catch((e) => {
            console.log(e)
        })
    }
}

export const toggleFav = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        const favStatus = !note.favorite
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
            favorite: favStatus
        })
        .then(() => {
            console.log('toggle fav note')
        })
        .catch((e) => {
            console.log(e)
        })
    }
}

export const updateNote = (note) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('notes').doc(note.id).update({
            title: note.title,
            content: note.content
        })
        .then(() => {
            console.log('Update Note')
        })
        .catch((e) => {
            console.log(e)
        })
    }
}
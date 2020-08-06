import firebase from '../../plugins/firebase'

const state = () => ({
    all:[]
})

const actions = {
    getPosts ({ commit }){
        firebase.firestore().collection("posts").get().then(res => {
            commit('setPosts',res.docs.map(doc => doc.data()))
        })
    }
}

const getters = {

}

const mutations = {
    setPosts(state, posts) {
        state.all = posts
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations
}
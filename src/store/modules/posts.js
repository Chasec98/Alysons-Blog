import firebase from '../../plugins/firebase'
const db = firebase.firestore()

const state = () => ({
    all:[],
    page: 1,
    count: 10,
    total: 0
})

const actions = {
    getPosts ({ commit }){
        db.collection("posts").orderBy("datetime").limit(10).get().then(res => {
            commit('setPosts',res.docs.map(doc => doc.data()))
        })
        db.collection('posts').get().then(res => {
            commit('setPostCount', res.size)
        });
    }
}

const getters = {
}

const mutations = {
    setPosts(state, posts) {
        state.all = posts
    },
    setPostCount(state, postCount) {
        state.total = postCount
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions, 
    mutations
}
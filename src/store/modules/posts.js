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
        db.collection("posts").where("visible","==", true).orderBy("datetime", "desc").limit(10).get().then(res => {
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
        state.all = posts.map(v => ({
            ...v,
            showMore: false
        }))
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
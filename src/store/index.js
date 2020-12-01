import { createStore } from 'vuex'

export default createStore({
    state: {
        records: [],
        manucipalities: []
    },

    mutations: {
        SET_RECORDS(state, dbRecords) {
            state.records = dbRecords
        },
        SET_MANUCIPALITIES(state) {
            let manucipalities = []

            state.records.filter(record => {
                if (record.Municipality_name !== null) {
                    manucipalities.push({
                        "Municipality_code": record.Municipality_code,
                        "Municipality_name": record.Municipality_name
                    })
                }
            })

            manucipalities = manucipalities
                .map(JSON.stringify).reverse()
                .filter((item, index, arr) => {
                    return arr.indexOf(item, index + 1) === -1
                })
                .reverse().map(JSON.parse)
                .sort((a, b) => a.Municipality_name.localeCompare(b.Municipality_name))


            state.manucipalities = manucipalities
        }
    },

    actions: {
        setRecords({ commit }, dbRecords) {
            commit('SET_RECORDS', dbRecords)
        },
        setManucipalities({ commit }) {
            commit('SET_MANUCIPALITIES')
        }
    },

    modules: {}
})

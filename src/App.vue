<template>
    <div class="mx-auto p-6 bg-gray-200 min-h-screen">
        <router-view/>
    </div>
</template>

<script>
import store from '@/store'

export default {
    name: 'App',
    setup() {
        const records = store.state.records

        if (records.length === 0) {
            fetch("http://localhost:3000/covid")
                .then(response => {
                    return response.json()
                })
                .then(dbRecords => {
                    store.dispatch('setRecords', dbRecords)
                    store.dispatch('setManucipalities')
                })
        }
    }
}
</script>

<template>
    <div class="flex justify-center items-center mt-6 mb-4 mx-5">
        <div class="flex items-center">
            <label for="municipality"
                    class="font-semibold">
                Gemeente:
            </label>
            <select v-model="state.selectedMunicipality"
                    name="municipality"
                    id="municipality"
                    @change="onSelect(state.selectedMunicipality)"
                    class="mx-2 py-1 text-md font-semibold border-none rounded-md shadow focus:ring-2 focus:ring-indigo-300">
                <option :value="municipality.Municipality_code"
                        v-for="(municipality, index) in manucipalities" :key="index">
                    {{ municipality.Municipality_name }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'selectMunicipality',
    emits: ['select'],
    setup(props, context) {
        const store = useStore()
        const manucipalities = computed(() => store.state.manucipalities)

        const state = reactive({
            selectedMunicipality: 'GM0003'
        })

        function onSelect(selected) {
            context.emit('select', selected)
        }

        return { context, manucipalities, state, onSelect }
    }
}
</script>

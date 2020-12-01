<template>

    <SelectMunicipality @select="select" />

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4">
        <DataCard :selectedMunicipality="state.selectedMunicipality"/>
    </div>

</template>

<script>
import { reactive } from 'vue';
import DataCard from '@/components/DataCard.vue';
import SelectMunicipality from '@/components/SelectMunicipality.vue';

export default {
    name: "Home",
    components: { DataCard, SelectMunicipality },
    setup() {
        const state = reactive({
            selectedMunicipality: 'GM0003'
        })

        function select(selected) {
            state.selectedMunicipality = selected
        }

        return { state, select }
    }
};
</script>

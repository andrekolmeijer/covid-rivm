<template>
    <div v-for="(record, index) in records.slice().reverse()" :key="index"
            class="bg-white rounded-lg p-6 shadow">
        <div class="flex flex-col justify-between h-full text-center text-gray-800">
            <div class="font-light text-sm">
                {{ dayjs(record.Date_of_report).format('DD-MM-YYYY') }}
            </div>
            <div class="pt-3">
                <div class="text-lg font-bold">
                    {{ record.Municipality_name }}
                </div>
                <div class="text-lg text-gray-400">
                    {{ record.Province }}
                </div>
            </div>
            <div class="flex justify-around items-center pt-3">
                <div>
                    <div class="text-sm font-light">Totaal</div>
                    <div class="font-semibold text-indigo-500">{{ record.Total_reported }}</div>
                </div>
                <div>
                    <div class="text-sm font-light">Opnames</div>
                    <div class="font-semibold text-indigo-500">{{ record.Hospital_admission }}</div>
                </div>
                <div>
                    <div class="text-sm font-light">Overleden</div>
                    <div class="font-semibold text-indigo-500">{{ record.Deceased }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: "DataCard",
    props: {
        selectedMunicipality: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const store = useStore()
        const dayjs = require('dayjs')

        const records = computed(() => store.state.records.filter(record => {
            // console.log(record.Municipality_code);
            // console.log(props.selectedMunicipality);
            if (record.Municipality_code === props.selectedMunicipality) return record
        }))

        return { records, dayjs }
    }
};
</script>

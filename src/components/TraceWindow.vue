<template>
    <div>
        <div>
            <trend
            :data="getBufferAsArray"
            :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
            :padding="12"
            :radius="1"
            :stroke-width="1"
            auto-draw
            smooth>
            >
            </trend>
        </div>
    </div>
</template>

<script>
import { store } from "../store.js";
import FusionCharts from 'fusioncharts'

export default {
    name: 'TraceWindow',
    props:['state'],
    computed:{
        getBufferAsArray(){
             store.ActualizationBufferAsArray();
             var res = store.getBufferAsArray();
             return res;
        },
        getDataFetch(){
            var res = store.getDataFetch();
            return res;
        },
        getschemaFetch(){
            var res = store.getschemaFetch();
            return res;
        }
    },
    data: function() {
        return {   
                width: '700',
                height: '400',
                type: 'timeseries',
                dataFormat: 'json',
                dataSource: {data: null},
                subcaption: {text: 'Grocery'},
                yAxis: [{plot: {value: 'Grocery Sales Value',type: 'line'},format: {prefix: '$'},title: 'Sale Value'}]
        };
    },
    mounted: function() {
        // In this Promise we will create our DataStore and using that we will create a custom DataTable which takes two
        // parameters, one is data another is schema.
        Promise.all([store.getDataFetch(), store.getschemaFetch()]).then(res => {
        const data = res[0];
        const schema = res[1];
        // First we are creating a DataStore
        const fusionDataStore = new FusionCharts.DataStore();
        // After that we are creating a DataTable by passing our data and schema as arguments
        const fusionTable = fusionDataStore.createDataTable(data, schema);
        // After that we simply mutated our timeseries datasource by attaching the above
        // DataTable into its data property.
        this.dataSource.data = fusionTable;
        });
    }
};
</script>
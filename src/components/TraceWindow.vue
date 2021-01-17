<template>
    <div>
        {{state.plcTraceData}}
        <trend
        :data="getBufferAsArray"
        :gradientDirection="right"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        :padding="12"
        :radius="1"
        :stroke-width="1"
        :stroke-linecap="butt"
        auto-draw
        smooth>
        >
        </trend>
    </div>
</template>

<script>
import { store } from "../store.js";
export default {
    name: 'TraceWindow',
    props:['state'],
    computed:{
        getBufferAsArray(){
             var res = store.getBufferAsArray();
             return res;
        }
    },
    //components: { ComponentName },
    //directives: { DirectiveName },
    data() {
        return {
            BufferAsArray : store.getBufferAsArray
        };
    },
    mounted() {
        
    },
    //methods: {
    //    getBufferAsArray: function(){
    //         var res = store.getBufferAsArray();
    //         return res;
    //    }
    //},
};
</script>
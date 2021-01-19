<template>
    <div>        
    </div>
</template>

<script>
import { store } from "../store.js";
export default {
    name: 'SubscribeTraceData',
    props:['state'],
    //components: { ComponentName },
    //directives: { DirectiveName },
    data() {
        return {
                buff: 'SubscribeTraceData:<br>'
            }    
    },
    mqtt:{
        'VueMqtt/publish1' (data) {
            var obj = JSON.parse(data);
            store.setAllPlcTraceData(obj);

            var buffer = store.ActualizationBufferAsArray();
            buffer;
        }
    }
};
</script>


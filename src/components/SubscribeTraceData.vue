<template>
    <div>        
    </div>
</template>

<script>
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
            obj.buf;
            this.state.plcTraceData.trace = obj;

        }
    }
};
</script>


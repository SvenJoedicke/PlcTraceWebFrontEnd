<template>
    <div class="sub" v-html="buff">        
    </div>
</template>

<script>
export default {
    name: 'SubscribeTraceData',
    //components: { ComponentName },
    //directives: { DirectiveName },
    data() {
        return {
                buff: 'SubscribeTraceData:<br>'
            }    
    },
    mqtt:{
        'VueMqtt/publish1' (data) {
            this.buff = this.buff + data + '<br>'
        }
    }
};
</script>


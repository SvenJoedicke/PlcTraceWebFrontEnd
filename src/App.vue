<template>
  <div id="app">
    <TraceFrame/>
    <SubscribeTraceData/>
   </div>
</template>

<script>
import TraceFrame from './components/TraceFrame';
import SubscribeTraceData from './components/SubscribeTraceData'

export default {
  name: 'App',
  components:{
    TraceFrame,
    SubscribeTraceData
  },
  mounted(){
    this.$mqtt.subscribe('VueMqtt/#')
  }
}
</script>
    
<style scoped>
  .bg-vue{
    background-color: rgb(52, 73,94);
    color:white;
  }
  .bg-vue2{
    background-color: rgb(65, 184,131);
    color:white;
  }
  .square{
    width: 40px;
    height: 40px;
  }
</style>>

<template>
  <div id="app">
    <CalendarWeek/>
    <CalendarEntry/>
   </div>
</template>

<script>
import CalendarWeek from './components/CalendarWeek.vue';
import CalendarEntry from './components/CalendarEntry.vue';

export default {
  name: 'App',
  components:{
    CalendarWeek,
    CalendarEntry
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

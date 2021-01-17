<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-12">
                <TraceConfigWindow v-bind:state="state"/>
                <TraceWindow v-bind:state="state"/>
                <SubscribeTraceData v-bind:state="state"/>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import TraceConfigWindow from './TraceConfigWindow';
import TraceWindow from './TraceWindow';
import SubscribeTraceData from './SubscribeTraceData';

export default {
    name: 'TraceFrame',
    components: { TraceConfigWindow, TraceWindow, SubscribeTraceData },
    data() {
        return {
            state : store.state      
        };
    }
};
</script>

<style scoped>

</style>
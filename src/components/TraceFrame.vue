<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-12">
                <TraceConfigurationWindow v-bind:state="state"/>
                <TraceWindow v-bind:state="state"/>
                <SubscribeTraceData v-bind:state="state"/>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import TraceConfigurationWindow from './TraceConfigurationWindow';
import TraceWindow from './TraceWindow';
import SubscribeTraceData from './SubscribeTraceData';

export default {
    name: 'TraceFrame',
    components: { TraceConfigurationWindow, TraceWindow, SubscribeTraceData },
    data() {
        return {
            state : store.state      
        };
    }
};
</script>

<style scoped>

</style>
<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-12">
                <TraceWindow v-bind:state="state"/>
                <SubscribeTraceData v-bind:state="state"/>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import TraceWindow from './TraceWindow';
import SubscribeTraceData from './SubscribeTraceData';

export default {
    name: 'TraceFrame',
    components: { TraceWindow, SubscribeTraceData },
    data() {
        return {
            state : store.state      
        };
    }
};
</script>

<style scoped>

</style>
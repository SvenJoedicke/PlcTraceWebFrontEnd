<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-12">
                <TraceWindow/>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import TraceWindow from './TraceWindow';

export default {
    name: 'TraceFrame',
    components: { TraceWindow },
    data() {
        return {
            state : store.state      
        };
    }
};
</script>

<style scoped>

</style>
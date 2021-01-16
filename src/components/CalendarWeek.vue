<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-12">
                <div class=card-group>
                    <CalendarDay 
                        v-for="day in state.calendarWeekData"
                        :key="day.id"
                        :day="day"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import CalendarDay from './CalendarDay.vue';

export default {
    name: 'CalendarWeek',
    components: { CalendarDay },
    data() {
        return {
            state : store.state      
        };
    }
};
</script>

<style scoped>

</style>
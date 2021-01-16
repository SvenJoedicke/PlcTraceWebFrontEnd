<template>
    <div class="card">
        <div class="card-header text-center bg-vue">
            <strong>{{day.fullName}}</strong>
        </div>
        <div class="card-body">
            <div>{{day.id}}</div>
            <CalendarEvent
                v-for="(event,index) in day.event"
                :key="index"
                :event="event"
                :day="day"
            />
        </div>
    </div>
</template>

<script>
import CalendarEvent from "./CalendarEvent";

export default {
    name: 'CalendarDay',
    components: { CalendarEvent },
    props:['day']
};
</script>

<style scoped>
    .bg-vue{
        background-color: rgb(52, 73, 94);
        color: white;
    }
</style>
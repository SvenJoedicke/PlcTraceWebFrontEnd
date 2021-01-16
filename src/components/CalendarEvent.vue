<template>
    <div class="alert text-center"
        :class="getEventColor"
    >
        <div>{{event.title}}</div>
        <div>
        <i class="fas fa-edit mr-2"></i>
        <i class="far fa-trash-alt"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CalendarEvent',
    //components: { ComponentName },
    //directives: { DirectiveName },
    computed:{
        getEventColor(){
            return 'alert-'+this.event.color;
        }
    },
    props:['event','day']
};
</script>
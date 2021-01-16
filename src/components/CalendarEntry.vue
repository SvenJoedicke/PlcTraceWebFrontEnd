<template>
    <div id="calendar-entry">
        <div class="container mt-5">
            <div class="row">
                <div class="col-6 offset-3">
                <div class="card">
                    <div class="card-header text-center bg-vue">
                    <h5>Neuer Termin für: <strong>Dienstag</strong> </h5>
                    </div>
                    <div class="card-body">
                    <input 
                        type="text"
                        class="form-control"
                        placeholder="Neuer Termin"
                        >
                        <div class="mt-3 text-center">
                            <span 
                                v-for="(color,index) in ['primary','success','info','warning','danger']"
                                :key="index"
                                class="alert mr-2 square"
                                v-bind:class="['alert-'+color]"
                                style="cursor: pointer;"
                            >
                            </span>
                        </div>

                        <hr>
                        <button class="btn bg-vue2 btn-block">Eintrag</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CalendarEntry',
    //components: { ComponentName },
    //directives: { DirectiveName },
    //data() {
    //    return {
    //        
    //    };
    //},
    //mounted() {
    //    
    //},
    //methods: {
    //    
    //},
};
</script>
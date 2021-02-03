<template>
    <div class="col-4"> 
        <div class="card">
            <div class="container-fluid ml-2 mt-2"> 
                <div class="input-group input-group-sm">
                    <span class="input-group-addon col-5" id="groessen-addon3">FunctionNumber</span>
                    <input  type="text" 
                            class="form-control" 
                            placeholder="FunctionNumber" 
                            aria-describedby="f"
                            v-model="FunctionNumber"
                    >
                </div>
                <div class="input-group input-group-sm">
                    <span class="input-group-addon col-5" id="groessen-addon3">Name</span>
                    <input  type="text" 
                            class="form-control" 
                            placeholder="Name" 
                            aria-describedby="groessen-addon3"
                            v-model="Name"
                    >
                </div>
                <div class="input-group input-group-sm">
                    <span class="input-group-addon col-5" id="groessen-addon3">Options</span>
                    <input type="text" class="form-control" placeholder="Option" aria-describedby="groessen-addon3">
                </div>
            </div>
            {{state.TraceConfigurationData.objects[0].SequenceFunctionConfigurationData.FunctionNumber.value}}     
            <button 
                class="btn bg-vue2 btn-block"
                @click="getTraceFunction(FunctionNumber)"
            >SendRequest</button>             
        </div>
    </div>    
</template>

<script>
import { store } from "../store.js";

export default {
    name: 'TraceConfigurationWindow',
    props:['state'],
    computed:{
        getTraceFunctionProp(FunctionNumber){
            var res = store.getTraceFunction(FunctionNumber);
            return res;
        }
    },
    data: function() {
        return {   
            FunctionNumber : 0,
            Name : "noFunction",
            error: false

        };
    },
        methods: {
        getTraceFunction: function(FunctionNumber){
            //if(FunctionNumber === 0) return this.error = true;
            
            var res = store.getTraceFunction(FunctionNumber);
              if (res === undefined) {
                  this.FunctionNumber = FunctionNumber;
                  this.Name = 'AwesomeFunction';  
            }else{
                this.FunctionNumber = res.SequenceFunctionConfigurationData.FunctionNumber.value;
                this.Name = res.SequenceFunctionConfigurationData.FunctionName.value;
            }
            this.error = false;
            
        }    
    }
};
</script>
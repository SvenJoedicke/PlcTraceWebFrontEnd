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
        longToByteArray: function(/*long*/long) {
            // we want to represent the input as a 8-bytes array
            var byteArray = [0, 0, 0, 0, 0, 0, 0, 0];

            for ( var index = 0; index < byteArray.length; index ++ ) {
                var byte = long & 0xff;
                byteArray [ index ] = byte;
                long = (long - byte) / 256 ;
            }

            return byteArray;
        },
        byteArrayToLong: function(/*byte[]*/byteArray) {
            var value = 0;
            for ( var i = byteArray.length - 1; i >= 0; i--) {
                value = (value * 256) + byteArray[i];
            }

            return value;
        },
        getTraceFunction: function(FunctionNumber){
            //if(FunctionNumber === 0) return this.error = true;
            
            var SequenceFunction = store.getTraceFunction(FunctionNumber);
              if (SequenceFunction === undefined) {
                  this.FunctionNumber = FunctionNumber;
                  this.Name = 'AwesomeFunction';  
            }else{
                this.FunctionNumber = SequenceFunction.object.SequenceFunctionConfigurationData.FunctionNumber.value;
                this.Name = SequenceFunction.object.SequenceFunctionConfigurationData.FunctionName.value;
            }
            var SequenceFunctionAsString = JSON.stringify(SequenceFunction);

            const buffer = [];
            const buffer2 = new ArrayBuffer(16);
            const bufferView = new DataView(buffer2);


            

            if(SequenceFunction !== undefined){
                buffer.push(1);//Subindex
                bufferView.setInt8(0, 1); // put 42 in slot 12

                buffer.push(1);//Index
                bufferView.setInt8(1, 1); // put 42 in slot 12

                buffer.push(1);//CountOfObjects
                bufferView.setInt8(2, 1); // put 42 in slot 12

                buffer.push(SequenceFunction.typeId)
                bufferView.setInt8(3, SequenceFunction.typeId); // put 42 in slot 12

                switch (SequenceFunction.object.SequenceFunctionConfigurationData.FunctionNumber.type) {
                case 'UDINT':
                    
                    bufferView.setUint32(5, SequenceFunction.object.SequenceFunctionConfigurationData.FunctionNumber.value); // put 42 in slot 12
                    //this.longToByteArray(SequenceFunction.object.SequenceFunctionConfigurationData.FunctionNumber.type.value);
                    
                                // we want to represent the input as a 8-bytes array
                    var byteArray = [0, 0, 0, 0];
                    var long = SequenceFunction.object.SequenceFunctionConfigurationData.FunctionNumber.value;
                    long = 4294967295;
                    for ( var index = 0; index < byteArray.length; index ++ ) {
                        var byte = long & 0xff;
                        byteArray [ index ] = byte;
                        buffer.push(byte);
                        long = (long - byte) / 256 ;
                    }       
                    
                    
                    break;
                case 'STRING':
                    SequenceFunctionAsString;
                    break;
                default:
                    SequenceFunctionAsString;
                    break;
                }    
            }

            var bufferAsString = buffer.toString();

            this.$mqtt.publish('RexAT/Telegram/ToolkitConfigurationAPI', SequenceFunctionAsString);
           // this.$mqtt.publish('RexAT/Telegram/ToolkitConfigurationAPI/bin', String.fromCharCode(buffer));
            this.$mqtt.publish('RexAT/Telegram/ToolkitConfigurationAPI/bin', bufferAsString);


            this.error = false;
            
        }    
    }
};
</script>
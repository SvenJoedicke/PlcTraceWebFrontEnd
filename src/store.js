import { plcTraceDataArray } from './data.js';
import { plcTraceDataTrigger } from './data.js';
import { plcTraceData } from './data.js';
import { jsonify } from './data.js';
import { dataFetch } from './data.js';
import { schemaFetch } from './data.js';
import { TraceConfigurationData } from './data.js';   

export const store = {
    state:{
        plcTraceDataArray,
        plcTraceDataTrigger,
        plcTraceData,
        jsonify,
        dataFetch,
        schemaFetch,
        TraceConfigurationData
    },
    getTraceFunction(FunctionNumber){
        const res = this.state.TraceConfigurationData.objects.find(TraceObject => TraceObject.SequenceFunctionConfigurationData.FunctionNumber.value == FunctionNumber);
        return {typeId:this.state.TraceConfigurationData.typeId, object: res};
    },
    getDataFetch(){
        var res = this.state.dataFetch;

        return res;
    },
    getschemaFetch(){
        var res = this.state.schemaFetch;

        return res;
    },
    getTriggerConfiguration(){
        return this.state.plcTraceDataTrigger.traceConfig;
    },
    getRawBuffer(){
       return this.state.plcTraceData.trace.buf;
    },
    getBufferAsArray(){
        return this.state.plcTraceDataArray.arary;
    },
    ActualizationBufferAsArray(){
        var str = this.state.plcTraceData.trace.buf;
        var res = str.split("");
        switch (this.state.plcTraceData.trace.typ){
            case "b":   
                for (let i = 0; i < res.length; i++){
                    if(res[i]=='1'){
                        res[i] = 1;
                    } else {
                        res[i] = 0;
                    }
                }
                return res;
            case "f":  
                var resFloatHexLength = res.length/8;
                for(let i = 0; i < resFloatHexLength; i++){
                    let faktor = 8*i;
                    let floatHex='0x'   +res[0 + faktor]
                                        +res[1 + faktor]
                                        +res[2 + faktor]
                                        +res[3 + faktor]
                                        +res[4 + faktor]
                                        +res[5 + faktor]
                                        +res[6 + faktor]
                                        +res[7 + faktor];
    
                    //this.state.plcTraceDataArray.arary[i + (this.state.plcTraceDataArray.indexDataSet * resFloatHexLength)] =this.parseHexStringAsFloat(floatHex);
                    this.state.plcTraceDataArray.arary[i] =this.parseHexStringAsFloat(floatHex);
                }
                //this.state.plcTraceDataArray.indexDataSet < this.state.plcTraceDataArray.MaxCountOfDataSet ? this.state.plcTraceDataArray.indexDataSet++ : this.state.plcTraceDataArray.indexDataSet = 0;
                

                
                return this.state.plcTraceDataArray.arary;

            default:
                return [];
        }
    },
    getPlcTraceData(){
        return this.state.plcTraceData;
    },
    setAllPlcTraceData(payload){
        if (payload.trace){
            this.state.plcTraceData = payload;
        }
        if (payload.traceConfig){
            this.state.plcTraceDataTrigger = payload;
        }
    },
    parseHexStringAsFloat (str) {
        var float = 0
        var sign
        var mantissa
        var exp
        var int = 0
        var multi = 1
        if (str === '0x00000000') {
          return 0.0
        } else if (/^0x/.exec(str)) {
          int = parseInt(str, 16)
        } else {
          for (var i = str.length - 1; i >= 0; i -= 1) {
            if (str.charCodeAt(i) > 255) {
              // eslint-disable-next-line no-console
              console.log('Wrong string parametr')
              return false
            }
            int += str.charCodeAt(i) * multi
            multi *= 256
          }
        }
        sign = (int >>> 31) ? -1 : 1
        exp = (int >>> 23 & 0xff) - 127
        mantissa = ((int & 0x7fffff) + 0x800000).toString(2)
        for (i = 0; i < mantissa.length; i += 1) {
          float += parseInt(mantissa[i]) ? Math.pow(2, exp) : 0
          exp--
        }
        return parseFloat((float * sign).toFixed(2));
    }
}
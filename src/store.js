import { plcTraceDataTrigger } from './data.js';
import { plcTraceData } from './data.js';
import { jsonify } from './data.js';
import { dataFetch } from './data.js';
import { schemaFetch } from './data.js';

export const store = {
    state:{
        plcTraceDataTrigger,
        plcTraceData,
        jsonify,
        dataFetch,
        schemaFetch
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
        switch (this.state.plcTraceData.trace.typ){
            case "b":   
                var str = this.state.plcTraceData.trace.buf;
                var res = str.split("");

                for (var i = 0; i < res.length; i++){
                    if(res[i]=='1'){
                        res[i] = 1;
                    } else {
                        res[i] = 0;
                    }
                }
                return res;
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
    }
}
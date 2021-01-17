import { plcTraceDataTrigger } from './data.js';
import { plcTraceData } from './data.js';

export const store = {
    state:{
        plcTraceDataTrigger,
        plcTraceData
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
                return this.state.plcTraceData.trace.buf;
            default:
                return this.state.plcTraceData.trace.buf;
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
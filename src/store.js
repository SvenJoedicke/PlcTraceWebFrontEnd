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
    getBuffer(){
        return this.state.plcTraceData.trace.buf;
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
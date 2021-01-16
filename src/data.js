export const calendarWeekData=[
    {
        id:1,
        shortName:'Mo',
        fullName:'Montag',
        event:[
            {title:'Vue JS lernen', edit:false, color:'success'},
            {title:'Schlafen', edit:false, color:'danger'},
        ],
        active:false
    },
    {
        id:2,
        shortName:'Di',
        fullName:'Dienstag',
        event:[
        ],
        active:false
    },
    {
        id:3,
        shortName:'Mi',
        fullName:'Mittwoch',
        event:[
            {title:'Vue JS lernen', edit:false, color:'success'},
            {title:'Schlafen', edit:false, color:'danger'},
            {title:'Arbeiten', edit:false, color:'warning'},
        ],
        active:true
    },
    {
        id:4,
        shortName:'Do',
        fullName:'Donnerstag',
        event:[
            {title:'Kacken', edit:false, color:'success'},
        ],
        active:false
    },
    {
        id:5,
        shortName:'Fr',
        fullName:'Freitag',
        event:[
        ],
        active:false
    },
    {
        id:6,
        shortName:'Sa',
        fullName:'Samstag',
        event:[
        ],
        active:false
    },
    {
        id:7,
        shortName:'So',
        fullName:'Sonntag',
        event:[
            {title:'Vue JS lernen', edit:false, color:'success'},
            {title:'Schlafen', edit:false, color:'danger'},
        ],
        active:false
    }
]


export const plcTraceDataTrigger={
    "traceConfig": {
      "trigObj": "DigitalInput",
      "trigName": "MyAwesomeDigitalInput",
      "trigTyp": "RiseEdge",
      "compVal": "00001111"
    }
  }

export const plcTraceData={
    "trace": {
      "obj": "DigitalInput",
      "name": "MyAwesomeDigitalInput",
      "typ": "b",
      "buf": "000000000000"
    }
  }
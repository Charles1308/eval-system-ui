import DOM_CONTENTS from "./domContents";

function mfo_percentages () {
    this["Professor"] = this["Instructor"]; // Same
    this["Instructor"] = [ 75, 10, 10, 5, 0 ];
    this["Administrative Staff"] = [ 0, 0, 0, 5, 95 ];
    this["Assistant Professor"] = [ 65, 20, 10, 5, 0 ]; 
    this["Associate Professor"] = this["Assistant Professor"];
    this["Guest Lecturer"] = this["Administrative Staff"].reverse(); // Same in reversed version
    this["Coordinator (Associate Professor/Professor)"] = [ 40, 20, 10, 5, 25 ];
    this["Coordinator  (Instructor/Assistant Professor)"] = [ 50, 10, 10, 5, 25 ];

    this.mapper = {
        'MFO1': 0,
        'MFO2': 1,
        'MFO3': 2,
        'MFO4': 3,
        'MFO5': 4,
    }

    this.getPercentage = function (userType, mfoKey) {
        return this[userType][this.mapper[mfoKey]];
    }
}



const MFO_CONTENTS = {
    "MFO1": [
        {
            title: "Acadmic and Professional Qualification",
            subtitle: "An incentive of 0.5% is added to the total score",
            fields: [
                {
                    title: "__ Active registration to Professional/Certification Bodies",
                    subtitle: null,
                    dom: DOM_CONTENTS.next(),
                },
                {
                    title: "__ Active membership to Professional Organization(s)",
                    subtitle: null,
                    dom: DOM_CONTENTS.next(),
                },
                {
                    title: "Pursue in lifelong  learning through further studies",
                    subtitle: null,
                    dom: DOM_CONTENTS.next(),
                },
            ]
        },
        {
            title: "Effectiveness of Classroom Instruction",
            subtitle: null,
            fields: [
                {
                    title: "An average rating of at least 3.00 in the Performance Evaluation for Teaching Effectiveness",
                    subtitle: null,
                    dom: DOM_CONTENTS.next(),
                },
            ]
        },
    ]
}

const MFO = [
    {
        label: "MFO 1 - HIGHER EDUCATION",
        data: {
            title: "High Education",
            percentage: new mfo_percentages(),
            contents: MFO_CONTENTS['MFO1'],
        }
    },
    {
        label: "MFO 2 - RESEARCH",
        data: {
            title: "Research",
            percentage: new mfo_percentages(),        
        }
    },
    {
        label: "MFO 3 - EXTENSION",
        data: {
            title: "Extension",
            percentage: new mfo_percentages(),        
        }
    },
    {
        label: "MFO 4 - SUPPORT FUNCTION",
        data: {
            title: "Support Function",
            percentage: new mfo_percentages(),        
        }
    },
    {
        label: "MFO 5 - ADMIN FUNCTION",
        data: {
            title: "Admin Function",
            percentage: new mfo_percentages(),        
        }
    },  
];

const OPCR = [
    {
        label: "HIGHER EDUCATION",
        data: {
            title: "High Education",
            percentage: null,        
        }
    },
    {
        label: "RESEARCH",
        data: {
            title: "Research",
            percentage: null,        
        }
    },
    {
        label: "EXTENSION SERVICES",
        data: {
            title: "Extension Services",
            percentage: null,        
        }
    },
    {
        label: "ADMINISTRATIVE/SUPPORT FUNCTIONS",
        data: {
            title: "Administrative/Support Functions",
            percentage: null,        
        }
    },
    {
        label: "OTHER ADMINISTRATIVE FUNCTIONS",
        data: {
            title: "Other Administrative Functions",
            percentage: null,        
        }
    },  
];

const EVAL_METRICS = {
    "1": 1, // 50% and below - Needs development 
    "2": 2, // 51% - 89%     - Needs mentoring
    "3": 3, // 90% - 114%    - Satisfactory
    "4": 4, // 115% - 129%   - Very Satisfactory
    "5": 5, // 130% and above - Outstanding
};

export { 
    MFO, 
    OPCR,
    EVAL_METRICS,
};

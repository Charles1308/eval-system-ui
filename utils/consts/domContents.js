const DOM_CONTENTS = [
    {
        eval_key: "Quality",
        label: "Quality measures the latest academic qualification",
        values: [
            { label: "Bachelor's Degree", value: 3.00 },   
            { label: "Master's Degree", value: 4.00 },   
            { label: "PhD Degree", value: 5.00 },   
        ],
    },
    {
        eval_key: "Quality",
        label: "Quality measures the number of Professional Certifications/Registration Ex. Professional Engineer, Chartered Engineer,ASEAN Engineer",
        values: [],
    },
    {
        eval_key: "Efficiency",
        label: "Efficiency measures the number of membership to Professional Organization.",
        values: [],
    },
    {
        eval_key: "Quality",
        label: "Quality measures pursue of lifelong learning through further studies",
        values: [
            { label: "PhD Degree", value: 5.00 },   
            { label: "PhD Units", value: 4.00 },   
            { label: "Master Graduate", value: 3.00 },   
            { label: "Academic Units", value: 2.00 },   
            { label: "None", value: 1.00 },   
        ],
    },
    {
        eval_key: "Quality",
        label: "Quality measures the average score given by the students",
        values: [],
    },
    {
        eval_key: "Quality",
        label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
        values: [
            { label: "Excellent", value: 5.00 },   
            { label: "Very Satisfactory", value: 4.00 },   
            { label: "Satisfactory", value: 3.00 },   
            { label: "Few sessions", value: 2.00 },   
            { label: "None at All", value: 1.00 },  
        ],
    },
    {
        eval_key: "Efficiency",
        label: "Efficiency measures the % number of students who failed the examinations that were given guidance and counselling.",
        values: [],
    },
    {
        eval_key: "Efficiency",
        label: "Efficiency measures the % number of students that passed all the enrolled courses",
        values: [],
    },
    {
        eval_key: "Efficiency",
        label: "Efficiency measures the % number of students that have attained the Intended Learning Outcomes (ILOs)",
        values: [],
    },
    {
        eval_key: "Timeliness",
        label: "Timeliness measures the timely submission of syllabus",
        values: [
            { label: "10 days before or earlier", value: 5.00 },   
            { label: "8-9 days before", value: 4.00 },   
            { label: "7 days before", value: 3.00 },   
            { label: "4-6 days before", value: 2.00 },   
            { label: "3 days before or later", value: 1.00 },  
        ],
    },
    {
        eval_key: "Quality",
        label: "Quality measures the assessment conducted.",
        values: [
            { label: "Approved by IMDC", value: 5.00 },
            { label: "Reviewed by IM Committee", value: 4.00 },
            { label: "No Review conducted", value: 3.00 },
        ],
    },
    // Continue to line/row 64
    // {
    //     label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
    //     values: [
    //         {
    //             "Excellent": 5.00
    //             "Very Satisfactory": 5.00
    //             "Satisfactory": 3.00
    //             "Few sessions": 2.00
    //             "None at All": 1.00
    //         }
    //     ],
    // },
    // {
    //     label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
    //     values: [
    //         {
    //             "Excellent": 5.00
    //             "Very Satisfactory": 5.00
    //             "Satisfactory": 3.00
    //             "Few sessions": 2.00
    //             "None at All": 1.00
    //         }
    //     ],
    // },
    // {
    //     label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
    //     values: [
    //         {
    //             "Excellent": 5.00
    //             "Very Satisfactory": 5.00
    //             "Satisfactory": 3.00
    //             "Few sessions": 2.00
    //             "None at All": 1.00
    //         }
    //     ],
    // },
    // {
    //     label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
    //     values: [
    //         {
    //             "Excellent": 5.00
    //             "Very Satisfactory": 5.00
    //             "Satisfactory": 3.00
    //             "Few sessions": 2.00
    //             "None at All": 1.00
    //         }
    //     ],
    // },
    // {
    //     label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
    //     values: [
    //         {
    //             "Excellent": 5.00
    //             "Very Satisfactory": 5.00
    //             "Satisfactory": 3.00
    //             "Few sessions": 2.00
    //             "None at All": 1.00
    //         }
    //     ],
    // },
    // {
    //     label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
    //     values: [
    //         {
    //             "Excellent": 5.00
    //             "Very Satisfactory": 5.00
    //             "Satisfactory": 3.00
    //             "Few sessions": 2.00
    //             "None at All": 1.00
    //         }
    //     ],
    // },
    // {
    //     label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
    //     values: [
    //         {
    //             "Excellent": 5.00
    //             "Very Satisfactory": 5.00
    //             "Satisfactory": 3.00
    //             "Few sessions": 2.00
    //             "None at All": 1.00
    //         }
    //     ],
    // },
    // {
    //     label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
    //     values: [
    //         {
    //             "Excellent": 5.00
    //             "Very Satisfactory": 5.00
    //             "Satisfactory": 3.00
    //             "Few sessions": 2.00
    //             "None at All": 1.00
    //         }
    //     ],
    // },
    // {
    //     label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
    //     values: [
    //         {
    //             "Excellent": 5.00
    //             "Very Satisfactory": 5.00
    //             "Satisfactory": 3.00
    //             "Few sessions": 2.00
    //             "None at All": 1.00
    //         }
    //     ],
    // },
    // {
    //     label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
    //     values: [
    //         {
    //             "Excellent": 5.00
    //             "Very Satisfactory": 5.00
    //             "Satisfactory": 3.00
    //             "Few sessions": 2.00
    //             "None at All": 1.00
    //         }
    //     ],
    // },
    // {
    //     label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
    //     values: [
    //         {
    //             "Excellent": 5.00
    //             "Very Satisfactory": 5.00
    //             "Satisfactory": 3.00
    //             "Few sessions": 2.00
    //             "None at All": 1.00
    //         }
    //     ],
    // },
    // {
    //     label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
    //     values: [
    //         {
    //             "Excellent": 5.00
    //             "Very Satisfactory": 5.00
    //             "Satisfactory": 3.00
    //             "Few sessions": 2.00
    //             "None at All": 1.00
    //         }
    //     ],
    // },
    // {
    //     label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
    //     values: [
    //         {
    //             "Excellent": 5.00
    //             "Very Satisfactory": 5.00
    //             "Satisfactory": 3.00
    //             "Few sessions": 2.00
    //             "None at All": 1.00
    //         }
    //     ],
    // },
    // {
    //     label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
    //     values: [
    //         {
    //             "Excellent": 5.00
    //             "Very Satisfactory": 5.00
    //             "Satisfactory": 3.00
    //             "Few sessions": 2.00
    //             "None at All": 1.00
    //         }
    //     ],
    // },
    // {
    //     label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
    //     values: [
    //         {
    //             "Excellent": 5.00
    //             "Very Satisfactory": 5.00
    //             "Satisfactory": 3.00
    //             "Few sessions": 2.00
    //             "None at All": 1.00
    //         }
    //     ],
    // },
    // {
    //     label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
    //     values: [
    //         {
    //             "Excellent": 5.00
    //             "Very Satisfactory": 5.00
    //             "Satisfactory": 3.00
    //             "Few sessions": 2.00
    //             "None at All": 1.00
    //         }
    //     ],
    // },
    // {
    //     label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
    //     values: [
    //         {
    //             "Excellent": 5.00
    //             "Very Satisfactory": 5.00
    //             "Satisfactory": 3.00
    //             "Few sessions": 2.00
    //             "None at All": 1.00
    //         }
    //     ],
    // },
    // {
    //     label: "Quality measures the quality of guidance and counseling provided using a survey of the students.",
    //     values: [
    //         {
    //             "Excellent": 5.00
    //             "Very Satisfactory": 5.00
    //             "Satisfactory": 3.00
    //             "Few sessions": 2.00
    //             "None at All": 1.00
    //         }
    //     ],
    // },
]

export default DOM_CONTENTS.values();
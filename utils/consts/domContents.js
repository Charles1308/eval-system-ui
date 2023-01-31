const DOM_CONTENTS = [
    // MFO 1
    {
        contents: {
            Quality: {
                label: "Quality measures the latest academic qualification",
                values: [
                    { label: "Bachelor's Degree", value: 3.00 },   
                    { label: "Master's Degree", value: 4.00 },   
                    { label: "PhD Degree", value: 5.00 },   
                ]
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the number of Professional Certifications/Registration Ex. Professional Engineer, Chartered Engineer,ASEAN Engineer",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the number of membership to Professional Organization.",
                values: [
                    { label: "PhD graduate", value: 5.00 },
                    { label: "PhD Units", value: 4.00 },
                    { label: "Master Graduate", value: 3.00 },
                    { label: "Academic Units", value: 2.00 },
                    { label: "None", value: 1.00 },
                ]
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the average score given by the students",
                values: []
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the quality of guidance and counseling provided using a survey of the students",
                values: [
                    { label: "Excellent", value: 5.00 },   
                    { label: "Very Satisfactory", value: 4.00 },   
                    { label: "Satisfactory", value: 3.00 },   
                    { label: "Few Sessions", value: 2.00 },   
                    { label: "None At All", value: 1.00 },   
                ]
            },
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % number of students who failed the examinations that were given guidance and counselling.",
                values: []
            },
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % number of students that passed all the enrolled courses",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % number of students that have attained the Intended Learning Outcomes (ILOs)",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficency measures the % number of courses with uploaded OBE based syllabus.",
                values: []
            },
            
        }
    },
    {
        contents: {
            Timeliness: {
                label: "Timeliness measures the timely submission of syllabus",
                values: [
                    { label: "10 days before or earlier", value: 5.00 },   
                    { label: "8-9 days before", value: 4.00 },   
                    { label: "7 days before", value: 3.00 },   
                    { label: "4-6 days before", value: 2.00 },   
                    { label: "3 days before or later", value: 1.00 }, 
                ]
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the assessment conducted.",
                values: [
                    { label: "Approved by IMDC", value: 3.00 },   
                    { label: "Reviewed by IM Committee", value: 4.00 },   
                    { label: "No Review conducted", value: 5.00 },   
                ]
            },
            
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficency measures the % number of course materials uploaded.",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % number of certified complete course portfolio.",
                values: []
            }, 
            
        }
    },
    {
        contents: {
            Timeliness: {
                label: "Timeliness measures the timely submission of course' portfolio",
                values: [
                    { label: "7 days before or earlier", value: 5.00 },   
                    { label: "1-6 days earlier", value: 4.00 },   
                    { label: "On due date", value: 3.00 },   
                    { label: "1-13 days after", value: 2.00 },
                    { label: "14 days after", value: 1.00 },
                ]
            }
        }
    },
    {
        contents: {
            Quality: {
                    label: "Quality measures the alignment, scope, breadth and depth of the question paper based on the syllabus.",
                    values: [
                        { label: "Excellent Exam Paper", value: 5.00 },   
                        { label: "Good Exam Paper", value: 4.00 },   
                        { label: "Satisfactory Exam Paper", value: 3.00 },   
                        { label: "Needs Improvement", value: 2.00 },
                        { label: "Poor Exam Paper", value: 1.00 },   
                    ]
                },
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % number of courses with moderated papers.",
                values: []
            },
        }
    },
    {
        contents: {
            Timeliness: {
                label: "Timeliness measures the timely submission of moderated exam papers.",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficency measures the % assessment results returned to the students.",
                values: []
            },
        }
    },
    {
        contents: {
            Timeliness: {
                label: "Timeliness measures the timely return of papers with feedback.",
                values: [
                    { label: "7 working days after or earlier", value: 5.00 },   
                    { label: "8-13 working days after", value: 4.00 },   
                    { label: "14 working days after", value: 3.00 },   
                    { label: "15-21 working days after", value: 2.00 },   
                    { label: "22 working days after or later", value: 1.00 },   
                ]
            }, 
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the correctness of uploaded  grades",
                values: [
                    { label: "No request for correction", value: 5.00 },   
                    { label: "One request for correction", value: 4.00 },   
                    { label: "Two requests for correction", value: 3.00 },   
                    { label: "Three or more requests", value: 2.00 },   
                    { label: "Late Upload", value: 1.00 },   
                ]
            },
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % number of grades sheets uploaded.",
                values: []
            },
        }
    },
    {
        contents: {
            Timeliness: {
                label: "Timeliness measures the timely uploading of grades",
                values: [
                    { label: "3 days or earlier", value: 5.00 },   
                    { label: "1-2 days earlier", value: 4.00 },   
                    { label: "On due date", value: 3.00 },   
                    { label: "1-3 days after", value: 2.00 },   
                    { label: "4 days after or later", value: 1.00 },  
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % number of CARRs submitted.",
                values: []
            },
        }
    },
    {
        contents: {
            Timeliness: {
                label: " Timeliness measures the timely submission of CARR.",
                values: [
                    { label: "3 days or earlier", value: 5.00 },   
                    { label: "1-2 days earlier", value: 4.00 },   
                    { label: "On due date", value: 3.00 },   
                    { label: "1-3 days after", value: 2.00 },   
                    { label: "14 days after or later", value: 1.00 },  
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measure the number of training attended",
                values: []
            },
        }
    },
    {
        contents: {
            Timeliness: {
                label: "Timeliness measures the timely submission of report",
                values: [
                    { label: "10 days or earlier", value: 5.00 },   
                    { label: "1-9 days earlier", value: 4.00 },   
                    { label: "14 days after", value: 3.00 },   
                    { label: "1-13 days later", value: 2.00 },   
                    { label: "14 days later", value: 1.00 },  
                ]
            }
        }
    },
    // END MFO 1

    // MFO 2
    {
        contents: {
            Quality: {
                label: "Quality measures the research level:",
                values: [
                    { label: "International Funding", value: 5.00 },   
                    { label: "National Funding", value: 4.00 },   
                    { label: "LGU/Institutional Funding", value: 3.00 },   
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency refers to the total number of fundend research project(s) where he/she is the principal investigator.",
                values: []
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the research level:",
                values: [
                    { label: "International Funding", value: 5.00 },   
                    { label: "National Funding", value: 4.00 },   
                    { label: "LGU/Institutional Funding", value: 3.00 },   
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency refers to the total amount of project cost where he/she is the Principal investigator.",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency refers to the number of copyrighted items filed.",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency refers to the number of Patented items filed.",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency refers to the number of students being advised.",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency refers to the number of students being advised.",
                values: []
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the paper indexing.",
                values: [
                    { label: "Non-indexed", value: 5.00 },   
                    { label: "Scopus indexed", value: 4.00 },   
                    { label: "ISI indexed", value: 3.00 },   
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficency refers to the number of papers published",
                values: []
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the paper indexing.",
                values: [
                    { label: "Non-indexed", value: 5.00 },   
                    { label: "Scopus indexed", value: 4.00 },   
                    { label: "ISI indexed", value: 3.00 },   
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficency refers to the number of papers published",
                values: []
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the wards received of the paper presented.",
                values: [
                    { label: "Best Paper Award", value: 5.00 },   
                    { label: "Best Presentation", value: 4.00 },   
                    { label: "None", value: 3.00 },   
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficency measures the number of papers presented",
                values: []
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the wards received of the paper presented.",
                values: [
                    { label: "Best Paper Award", value: 5.00 },   
                    { label: "Best Presentation", value: 4.00 },   
                    { label: "None", value: 3.00 },   
                ]
            }
        }
    },
    {
        contents: {
            Timeliness: {
                label: "Timeliness measures the timely submission of report",
                values: [
                    { label: "10 days or earlier", value: 5.00 },   
                    { label: "1-9 days earlier", value: 4.00 },   
                    { label: "14 days after", value: 3.00 },   
                    { label: "1-13 days later", value: 2.00 },   
                    { label: "14 days later", value: 1.00 },  
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficency measures the number of papers presented",
                values: []
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the wards received of the paper presented.",
                values: [
                    { label: "Resource Speaker", value: 5.00 },   
                    { label: "Committee Member", value: 4.00 },   
                    { label: "Participant", value: 3.00 },   
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficency measures the number of papers presented",
                values: []
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the % approval of the topic abstract by the Research Cluster",
                values: [
                    { label: "96%-100% approved", value: 5.00 },   
                    { label: "90%-95% approved", value: 4.00 },   
                    { label: "61%-89% approved", value: 3.00 },   
                    { label: "50%-60% approved", value: 2.00 },   
                    { label: "0%-59% approved", value: 1.00 },  
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures to the number of topic abstract submitted",
                values: []
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the % approval of the topic abstract by the Research Cluster",
                values: [
                    { label: "96%-100% approved", value: 5.00 },   
                    { label: "90%-95% approved", value: 4.00 },   
                    { label: "61%-89% approved", value: 3.00 },   
                    { label: "50%-60% approved", value: 2.00 },   
                    { label: "0%-59% approved", value: 1.00 },  
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures to the number of topic abstract submitted",
                values: []
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality refers to the participation of faculty member as Defense Panel",
                values: [
                    { label: "As Chairman", value: 5.00 },   
                    { label: "As Member", value: 4.00 },   
                    { label: "As Adviser", value: 3.00 },   
                    { label: "As Facilitator", value: 2.00 },   
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures to the number of sessions attended in the Panel Defense",
                values: []
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality refers to the participation of faculty member as Defense Panel",
                values: [
                    { label: "As Chairman", value: 5.00 },   
                    { label: "As Member", value: 4.00 },   
                    { label: "As Adviser", value: 3.00 },   
                    { label: "As Facilitator", value: 2.00 },   
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures to the number of sessions attended in the Panel Defense",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency refers to the number of groups advised",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % numbber of groups who successfully defended their Thesis/Project",
                values: []
            }
        }
    },
    {
        contents: {
            Timeliness: {
                label: "Timeliness measures the timely completion of Thesis/Project.",
                values: [
                    { label: "On time", value: 5.00 },   
                    { label: "1 semester after", value: 4.00 },   
                    { label: "14 days after", value: 3.00 },   
                    { label: "2 semesters after", value: 2.00 },   
                ]
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the % Attendance to All Sessions",
                values: [
                    { label: "96%-100% attendance", value: 5.00 },   
                    { label: "91%-95% attendance", value: 4.00 },   
                    { label: "90% attendance", value: 3.00 },   
                    { label: "61%-89% attendance", value: 2.00 },   
                    { label: "50%-60% attendance", value: 1.00 },  
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % number of activities participated.",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency refers to the number of groups advised",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures to the number of clusters where the faculty is a member",
                values: []
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the % Attendance to All Sessions",
                values: [
                    { label: "96%-100% attendance", value: 5.00 },   
                    { label: "91%-95% attendance", value: 4.00 },   
                    { label: "90% attendance", value: 3.00 },   
                    { label: "61%-89% attendance", value: 2.00 },   
                    { label: "50%-60% attendance", value: 1.00 },  
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % number of activities participated.",
                values: []
            }
        }
    },
    // END MFO 2

    // MFO 3
    {
        contents: {
            Quality: {
                label: "Qualift measures the role of faculty member in the extension project(s).",
                values: [
                    { label: "Project Leader", value: 5.00 },   
                    { label: "Coordinator", value: 4.00 },   
                    { label: "Extensionist", value: 3.00 },   
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the number of extension service participated",
                values: []
            }
        }
    },
    // END MFO 3

    // MFO 4
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the number of committees assigned to the faculty",
                values: []
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Efficiency measures the number of extension service participated",
                values: [
                    { label: "Accepted, No changes", value: 5.00 },   
                    { label: "Minor changes", value: 4.00 },   
                    { label: "Major changes", value: 3.00 },   
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % completion of assigned tasks on due date",
                values: []
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the number of mentees satisfied with the mentoring/coaching of the faculty.",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: " Efficiency measures the number of students mentored by the faculty.",
                values: []
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the % Attendance to All Sessions",
                values: [
                    { label: "96%-100% attendance", value: 5.00 },   
                    { label: "91%-95% attendance", value: 4.00 },   
                    { label: "90% attendance", value: 3.00 },   
                    { label: "61%-89% attendance", value: 2.00 },   
                    { label: "50%-60% attendance", value: 1.00 },  
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % number of meetings attendance.",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % number of documents submitted.",
                values: []
            }
        }
    },
    {
        contents: {
            Timeliness: {
                label: "Timeliness measures the timely uploading of grades",
                values: [
                    { label: "3 days or earlier", value: 5.00 },   
                    { label: "1-2 days earlier", value: 4.00 },   
                    { label: "On due date", value: 3.00 },   
                    { label: "1-3 days after", value: 2.00 },   
                    { label: "4 days after or later", value: 1.00 },  
                ]
            }
        }
    },
    // END MFO 4

    // MFO 5
    {
        contents: {
            Quality: {
                label: "Quality measures the acquired position within 2 years from graduation:",
                values: [
                    { label: "Management position", value: 5.00 },   
                    { label: "Middle-Level position", value: 4.00 },   
                    { label: "Entry-Level position", value: 3.00 },   
                    { label: "Unemployed", value: 2.00 },   
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficency measures the % number of graduates employed within 2 years",
                values: []
            }
        }
    },
    {
        contents: {
            Timeliness: {
                label: "Timeliness measures the employability of graduates",
                values: [
                    { label: "6-12 months after graduation", value: 5.00 },   
                    { label: "12-23 months after graduation", value: 4.00 },   
                    { label: "24 months after graduation", value: 3.00 },   
                    { label: "25 months or later", value: 2.00 },   
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the number of programs that had conducted tracer study.",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % increase in licensure examination result based on previous result.",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % number of documents submitted.",
                values: []
            }
        }
    },
    {
        contents: {
            Timeliness: {
                label: "Timeliness measures the timely uploading of grades",
                values: [
                    { label: "3 days or earlier", value: 5.00 },   
                    { label: "1-2 days earlier", value: 4.00 },   
                    { label: "On due date", value: 3.00 },   
                    { label: "1-3 days after", value: 2.00 },   
                    { label: "4 days after or later", value: 1.00 },  
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % number of documents prepared according to AW requirement.",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % number of documents submitted.",
                values: []
            }
        }
    },
    {
        contents: {
            Timeliness: {
                label: "Timeliness measures the timely uploading of grades",
                values: [
                    { label: "3 days or earlier", value: 5.00 },   
                    { label: "1-2 days earlier", value: 4.00 },   
                    { label: "On due date", value: 3.00 },   
                    { label: "1-3 days after", value: 2.00 },   
                    { label: "4 days after or later", value: 1.00 },  
                ]
            }
        }
    },
    {
        contents: {
            Timeliness: {
                label: "Quality measures the % Attendance in PAC Meeting",
                values: [
                    { label: "96%-100% attendance", value: 5.00 },   
                    { label: "91%-95% attendance", value: 4.00 },   
                    { label: "90% attendance", value: 3.00 },   
                    { label: "61%-89% attendance", value: 2.00 },   
                    { label: "50%-60% attendance", value: 1.00 },  
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % number of meetings attendance.",
                values: []
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the content and analysis of the class performance.",
                values: [
                    { label: "Excellent report", value: 5.00 },   
                    { label: "Good report", value: 4.00 },   
                    { label: "Satisfactory report", value: 3.00 },   
                    { label: "Needs Improvement", value: 2.00 },   
                    { label: "Poor Report", value: 1.00 },  
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % number of faculty who have submitted the CARR.",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency measures the % number of faculty members who submitted the moderated exam papers.",
                values: []
            }
        }
    },
    {
        contents: {
            Timeliness: {
                label: "Timeliness measures the timely submission of moderated exam papers.",
                values: [
                    { label: "7 days before or earlier", value: 5.00 },   
                    { label: "1-6 days earlier", value: 4.00 },   
                    { label: "On due date", value: 3.00 },   
                    { label: "1-13 days after", value: 2.00 },   
                    { label: "14 days after", value: 1.00 },  
                ]
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality measures the concerns relative to the assignment of faculty loading:",
                values: [
                    { label: "No concern", value: 5.00 },   
                    { label: "Minor concern", value: 4.00 },   
                    { label: "Major concern", value: 3.00 },   
                ]
            }
        }
    },
    {
        contents: {
            Timeliness: {
                label: "Efficiency refers to the%  number of approved course syllabi compliant with OBE",
                values: []
            }
        }
    },
    {
        contents: {
            Timeliness: {
                label: "Timeliness refers to the timely submission of DTRs.",
                values: [
                    { label: "16-20 days before classes", value: 5.00 },   
                    { label: "11-15 days before classes", value: 4.00 },   
                    { label: "10 days before  classes", value: 3.00 },   
                    { label: "1-9 days before", value: 2.00 },   
                    { label: "after 5 days", value: 1.00 },  
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency refers to the%  number of approved course syllabi compliant with OBE",
                values: []
            }
        }
    },
    {
        contents: {
            Timeliness: {
                label: "Timeliness refers to the timely submission of syllabus.",
                values: [
                    { label: "16 days before or earlier", value: 5.00 },   
                    { label: "11-15 days before", value: 4.00 },   
                    { label: "10 days before  first day of classes", value: 3.00 },   
                    { label: "6-9  days before", value: 2.00 },   
                    { label: "5 days after or later", value: 1.00 },  
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficeincy refers to number of meeting held with at least 90% attendance.",
                values: []
            }
        }
    },
    {
        contents: {
            Quality: {
                label: "Quality refers to the indexing of paper publications",
                values: [
                    { label: "ISI indexed", value: 5.00 },   
                    { label: "Scopus indexed", value: 4.00 },   
                    { label: "Peer Reviewed", value: 3.00 },   
                    { label: "Non Indexed", value: 2.00 },   
                ]
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency refers to number of faculty members who attended in meetings",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency refers to the % number of applicants who graduated",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency refers to the % number of graduates who finished on time (GOT)",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency refers to the % number of enrolled students during the semester.",
                values: []
            }
        }
    },
    {
        contents: {
            Efficiency: {
                label: "Efficiency refers to the % number of applicants who graduated",
                values: []
            }
        }
    },
    // END MFO 5
]

export default DOM_CONTENTS.values();
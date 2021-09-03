/**
 * This file contains all page content for the calculator. Routes are handled dynamically using the top-level keys of 
 * the object exported from this file. For example, the values within the key "landing0" are populated by 
 * Calculator.jsx at the route: /calculator/landing0. This route can then be linked to from other pages.
 * 
 * For custom styling, pass a className into the body[] object you want to style and then make the necessary changes 
 * in Calculator.css
 * 
 * SCHEMA (all fields are optional):
 * [page ID]: {
 *   header,
 *   body: [
 *     {
 *       type,
 *       text,
 *       href,
 *       className
 *     }
 *   ],
 *   buttons: [
 *     {
 *       text,
 *       href (can be a relative or absolute path),
 *       color (defaults to blue)
 *     }
 *   ],
 *   footerLink: {
 *     text,
 *     href (can be a relative or absolute path)
 *   },
 *   tooltip,
 *   disclaimer
 * }
 */

const CALC_PREFIX = "/calculator"
const DEFAULT_TOOLTIP_TEXT = "I'm not sure"
const DISCLAIMER = "The information provided by the Conviction Vacation Project is not intended to replace legal advice and does not in any way constitute an attorney-client relationship. If you need legal advice or assistance, we strongly recommend that you reach out to a licensed professional."

export default {
    landing0: {
        header: "Misdemeanor Calculator",
        body: [
            {
                type: "paragraph",
                text: "You can use our eligibility calculator to determine whether you are eligible to vacate your misdemeanor conviction.",   
            }
        ],
        buttons: [
            {
                text: "Start",
                href: CALC_PREFIX + "/landing1"
            }
        ],
        tooltip: "My conviction is not a misdemeanor or I’m not sure.",
    },
    "landing-ineligible0": {
        header: "Our calculator can’t determine your eligibility",
        body: [
            {
                type: "paragraph",
                text: "It looks like your conviction may not be a misdemeanor. Our calculator is unable to assist you with your conviction at this point. We would like to hear your input and learn about your experience as we continue building our calculator.",   
            }
        ],
        footerLink: {
            text: "Take Survey",
            href: "https://docs.google.com/forms/d/e/1FAIpQLSeuT2oIBnxFAMv6p8tsujNlSugWxFS5la4DUC4rTFekInrcqQ/viewform?usp=sf_link"
        },
    },
    landing1: {
        header: "Was this offense a misdemeanor?",
        buttons: [
            {
                text: "Yes",
                href: CALC_PREFIX + "/landing2"
            },
            {
                text: "No",
                href: CALC_PREFIX + "/landing-ineligible0"
            }
        ],
        tooltip: DEFAULT_TOOLTIP_TEXT
    },
    landing2: {
        header: "Does your conviction fall into any of these special cases?",
        buttons: [
            {
                text: "Possession of Marijuana Misdemeanor",
                href: CALC_PREFIX + "/marijuana0"
            },
            {
                text: "Prostitution Misdemeanor",
                href: CALC_PREFIX + "/prostitution0"
            },
            {
                text: "Violation of a Fishing Regulation",
                href: CALC_PREFIX + "/fishing0"
            },
            {
                text: "My conviction doesn’t fall into any of the special cases (most convictions fall in this category)",
                href: CALC_PREFIX + "/main0",
                color: "green"
            }
        ],
        tooltip: DEFAULT_TOOLTIP_TEXT
    },
    marijuana0: {
        header: "Did this offense involve possession of marijuana?",
        buttons: [
            {
                text: "Yes",
                href: CALC_PREFIX + "/marijuana1"
            },
            {
                text: "No",
                href: CALC_PREFIX + "/marijuana-ineligible0"
            }
        ]
    },
    marijuana1: {
        header: "Were you 21 years or older at the time of offense?",
        buttons: [
            {
                text: "Yes",
                href: CALC_PREFIX + "/marijuana2"
            },
            {
                text: "No",
                href: CALC_PREFIX + "/marijuana-ineligible0"
            }
        ]
    },
    marijuana2: {
        header: "Have you completed the terms of your sentence for this offense?",
        buttons: [
            {
                text: "Yes",
                href: CALC_PREFIX + "/marijuana-eligible0"
            },
            {
                text: "No",
                href: CALC_PREFIX + "/marijuana-ineligible1"
            }
        ]
    },
    "marijuana-ineligible0": {
        header: "As of now, it seems that you may NOT be eligible to vacate your marijuana misdemeanor conviction because you have not completed the terms of your offense.",
        disclaimer: DISCLAIMER
    },
    "marijuana-eligible0": {
        header: "From your answers, it seems that you may be eligible to vacate your marijuana misdemeanor conviction!",
        body: [
            {
                type: "paragraph",
                text: "It looks like your conviction may be one of the following:"
            },
            {
                type: "link",
                text: "RCW 69.50.4014",
                href: "https://app.leg.wa.gov/rcw/default.aspx?cite=69.50.4014"
            },
            {
                type: "link",
                text: "RCW 69.50.401(e)",
                href: "https://leg.wa.gov/CodeReviser/documents/sessionlaw/1979c67.pdf?cite=1979%20c%2067%20§%201"
            },
            {
                type: "link",
                text: "RCW 69.50.401(d)",
                href: "https://leg.wa.gov/CodeReviser/documents/sessionlaw/1971ex1c308.pdf?cite=1971%20ex.s.%20c%20308%20§%2069.50.406"
            },
            {
                type: "paragraph",
                text: "(Possession of forty grams or less of marijuana)",
            },
            {
                type: "paragraph",
                text: "Next steps",
                className: "calculator-subheader"
            },
            {
                type: "paragraph",
                text: "1. Fill out a Motion and Declaration for Order Vacating Marijuana Conviction (CrRLJ 09.0100):"
            },
            {
                type: "link",
                text: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38",
                href: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38"
            },
            {
                type: "paragraph",
                text: "2. See instructions for vacating a conviction in form CrRLJ 09.0300:"
            },
            {
                type: "link",
                text: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38",
                href: "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38"
            }
        ],
        disclaimer: DISCLAIMER
    },
    "marijuana-ineligible1": {
        header: "As of now, it seems that you may NOT be eligible to vacate your marijuana misdemeanor conviction because you have not completed the terms of your offense.",
        disclaimer: DISCLAIMER
    },
    main0: {
        header: "We will now ask a few questions about what your conviction was for, to assess your eligibility to vacate the conviction.",
        buttons: [
            {

            }
        ]
    }
}
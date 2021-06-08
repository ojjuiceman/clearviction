import React, { useEffect, useState } from "react";
import NonElligible from "./NonElligible";
import ResultYes from "./ResultYes";

// data import
import calculatorNonElligible from "../data/calculatorNonElligible.json";
//*!this page will carry the logic for determinig which result page to render --> will conditionally render the correct page based off user input

const CalculatorResults = ({ userResponse, setUserResponse }) => {
  const [result, setResult] = useState(null);
  const [nonElligible, setNonElligible] = useState([]);
  useEffect(() => {
    userResponse && handleCalculation();
  }, []);

  const handleCalculation = () => {
    let nonElligibleItems = [];
    for (const id in userResponse) {
      let value = userResponse[id];
      if (value === false) {
        const { text } = calculatorNonElligible.filter((q) => q.id == id)[0];
        nonElligibleItems.push(text);
      }
    }

    console.log(nonElligibleItems);
    if (nonElligibleItems.length > 0) {
      setNonElligible(nonElligibleItems);
      setResult("NonElligible");
    } else {
      setResult("ResultYes");
    }
  };

  return (
    <div>
      <h2>Results</h2>

      {result === "NonElligible" && (
        <NonElligible nonElligible={nonElligible} />
      )}
      {result === "ResultYes" && <ResultYes />}
    </div>
  );
};

export default CalculatorResults;

/*
{
    "id": "7",
    "text": "From your options, it seems that you may be eligible to vacate your marijuana misdemeanor conviction!",
    "sub_text": [
      "Your next step is to fill out a Motion and Declaration for Order Vacating Marijuana Conviction. ",
      "Steps to vacating a conviction in Washington state:"
    ],
    "links": [
      [
        "Court Form No. CrRLJ 09.0800",
        "https://www.courts.wa.gov/forms/?fa=forms.contribute&formID=38"
      ],
      [
        "How to vacate your conviction",
        "https://www.expeal.com/steps/#washington"
      ]
    ],
    "tooltip": "",
    "options": null,
    "next_card": null
  },
  {
    "id": "8",
    "text": "As of now, you may NOT be eligible for vacation for these reasons: ",
    "sub_text": [
      "Help us improve our eligibility calculator by telling us your story:"
    ],
    "tooltip": "",
    "options": ["Contact us"],
    "next_card": ["/contact"]
  },
  {
    "id": 9,
    "text": "As of now, we are only able to determine eligibility for marijuana possession misdemeanor cases for people who were over 21 years at the time of offense. In the future, we hope to help people with other types of convictions identify whether they are eligible.",
    "tooltip": "",
    "options": ["Contact us"],
    "next_card": ["/contact"]
  }*/

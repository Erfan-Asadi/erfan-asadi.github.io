import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import Styled from "styled-components";
import { AccountingContext } from "../contexts/AccountingContext";

const redPallete = [
  "#5C0A0B",
  "#7E0E0F",
  "#991214",
  "#B2191B",
  "#FF3538",
  "#E8080A",
  "#FF2022",
  "#FF1842",
  "#BD102F",
  "#AC0825",
];
const greenPallete = [
  "#0A5C12",
  "#3D7900",
  "#16A000",
  "#52C91A",
  "#5DFF35",
  "#08E846",
  "#24FF20",
  "#18FF90",
  "#0CA870",
  "#048B5B",
];
const PieComponent = Styled.div`
        .slices-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: flex-start;
            font-size: 14px;
            margin: 15px 0;

            .item {
                display: inline-flex;
                align-items: center;
                text-transform: capitalize;
                
                gap: 5px;
                span {
                    width: 28px;
                    height: 7px;
                    background: red;
                }
            }
        }
        .conic {
        width: 150px;
        height: 150px;
        background-image: conic-gradient(${(props) => props.gradient});
        position: relative;
        border-radius: 50%;
        margin: auto
        }
        .circle {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            background-color: white;
            transform: translate(-50%, -50%);
        }
`;
const PieChart = ({ percentages, type }) => {
  const { accounts } = useContext(AccountingContext);
  const filteredAccounts = accounts.filter(account => account.type === type);
  let palleteColor;
 
  function makeGradient(values) {
    const resultStack = [];
    let prev = 0;
    for (let i = 0; i < values.length; i++) {
       palleteColor = type === 'income' ? greenPallete : redPallete;
      // if we reach last item, we should generate different format gradient
      if(i+1 === undefined ) {
        resultStack.push(`${palleteColor[i]} ${prev}%`);
        break;
      }
      resultStack.push(`${palleteColor[i]} ${prev}%, ${palleteColor[i]} ${values[i]}%`);
      
      //The end value of the interval in the current round must be
      // the starting value of the interval in the next round
      prev = +values[i];
    }
    return resultStack.join(",");
  }

  return (
    <PieComponent gradient={makeGradient(percentages)}>
      <ul className="slices-list">
        {filteredAccounts.map((account, index) => (
          <li className="item" key={uuid()}>
            <span style={{backgroundColor: palleteColor[index]}}></span>{account.category}
          </li>
        ))}
      </ul>
      <div className="conic">
        <div className="circle"></div>
      </div>
    </PieComponent>
  );
};

export default PieChart;

import React from "react";
import Styled from "styled-components";

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
        background-image: conic-gradient(#E57C58 0deg, #E57C58 20%,
                            #BF2F10 20%, #BF2F1F 60%, #B01200 60%);
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
const PieChart = () => {
  return (
    <PieComponent>
      <ul className='slices-list'>
        <li className="item">
          <span></span>car
        </li>
        <li className="item">
          <span></span>Laptop
        </li>
        <li className="item">
          <span></span>Book
        </li>
      </ul>
      <div className="conic">
        <div className="circle"></div>
      </div>
    </PieComponent>
  );
};

export default PieChart;

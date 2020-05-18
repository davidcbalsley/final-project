import React, { useContext } from "react";
import FoodBankContext from "../../utils/FoodBankContext";

export default function Table(props) {
  const foodBankList = useContext(FoodBankContext);
  // console.log("hello", foodBankList.results);
  return (
    <div className="table">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">site</th>
            <th scope="col">first</th>
            <th scope="col">last</th>
            <th scope="col">email</th>
            <th scope="col">dob</th>
            <th scope="col">phone</th>
            <th scope="col">cell</th>
          </tr>
        </thead>
        <tbody>
          {foodBankList.results.length > 0
            ? foodBankList.results.map((foodBank) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td>
                    </td>
                        <td>{foodBank.data.site}</td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
    </div>
  );
}
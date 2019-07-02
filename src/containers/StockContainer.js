import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  render() {
    let { stocks, editPortfolioStatus} = this.props
    return (
      <div>
        <h2>Stocks</h2>
        {stocks.map(stock => (
          <Stock
            stock={stock}
            editPortfolioStatus={editPortfolioStatus}
          />
        ))}
      </div>
    );
  }
}

export default StockContainer;

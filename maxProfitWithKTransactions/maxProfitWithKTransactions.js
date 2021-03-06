function maxProfitWithKTransactions(prices, k) {
    // Write your code here.
      
      if (!prices.length) return 0;
      const profits = [];
      for (let t = 0; t < k + 1; t++){
          const row = new Array(prices.length).fill(0);
          profits.push(row)
      }
      for (let t = 1; t < k + 1; t++) {
          let currentMax = -Infinity;
          for (let d = 1; d < prices.length; d++) {
              currentMax = Math.max(currentMax, profits[t - 1][d - 1] - prices[d - 1]);
              profits[t][d] = Math.max(profits[t][d - 1], currentMax + prices[d])
          }
      }
      console.log(profits)
      return profits[k][prices.length - 1]
  }
  
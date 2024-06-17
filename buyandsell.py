class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        for i in range(len(prices)):
            for j in range(i + 1, len(prices)):
                if prices[j] -  prices[i] > profit and prices[j] - prices[i] > 0:
                    profit = prices[j] - prices[i]
        return profit
    
"""
Buy and Sell Crypto
You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.


Como resolvi:
Só percorro a array e comparo o valor atual pelo proximo, se a subtração do proximo pelo atual for maior que o valor atual de profit entao colocamos ele como profit



BIg O (n ** 2)
"""
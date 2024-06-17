class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        for i in range(len(prices)):
            for j in range(i + 1, len(prices)):
                if prices[j] -  prices[i] > profit and prices[j] - prices[i] > 0:
                    profit = prices[j] - prices[i]
        return profit
    
"""

Só percorro a array e comparo o valor atual pelo proximo, se a subtração do proximo pelo atual for maior que o valor atual de profit entao colocamos ele como profit



BIg O (n ** 2)
"""
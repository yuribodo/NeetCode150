class Solution(object):
    def isAnagram(self, s, t):
        s = sorted(s)
        t = sorted(t)

        if s == t:
            return True
        else:
            return False
             
"""
242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

--------------------------------------

Como resolvi:

peguei os 2 input, use o metodo sorted()  (Transforma o string em um array em ordem alfabetica)
Comparei se os valores eram iguais
Se sim return True
Se nao return False

"""
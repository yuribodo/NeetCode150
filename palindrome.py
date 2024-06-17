
"""
    s = "tab a cat"

Newstr = ""

for i in s:
    if i.isalnum():
        Newstr = Newstr + i.lower()
if Newstr[::-1] == Newstr:
    print("é palindromo")

    
    
"""

class Solution(object):
    def alphanum(self, c):
            return (ord('A') <= ord(c) <= ord('Z') or
                    ord('a') <= ord(c) <= ord('z') or
                    ord('0') <= ord(c) <= ord('9'))
    def isPalindrome(self, s):
        


        l , r = 0, len(s) -1

        while l < r:
            while l < r and not self.alphanum(s[l]):
                l += 1
            while r > l and not self.alphanum(s[r]):
                r -= 1
            if s[l].lower() != s[r].lower():
                return False
            l , r = l + 1, r -1 
        return True
    

"""

Como resolvi:

Usei Two pointers

Vem um do lado esquerdo e outro do lado direito comparando, faço comprações apenas se o valor for aplhanumerico

Se o valor for diferente ele ja retorna false



Ele para de comparar quando o lado direito e esquerdo se encontram
"""






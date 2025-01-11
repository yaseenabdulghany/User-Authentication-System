# ابدأ تكتب
def calculate_factorial(n):
    if n == 0:
        return 1
    else:
        return n * calculate_factorial(n - 1)
    
    number = int(input("Enter a number: "))
    lt = calculate_factorial(number)
    t(f"The factorial of {number} is {result}")
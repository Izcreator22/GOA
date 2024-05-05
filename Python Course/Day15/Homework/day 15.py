#პითონში უნდა შეიქმნას მათემატიკური პროგრამა, სადაც მომხარებელს შეექმნას რომელიმე მათემატიკური ფუნქცია , +,-./,*. სულ შეიძლება 2 რიცხვის შეტანა და შემდეგ პასუხის გაცემა.

def calculate_result():
    try:

        math_function = input("enter math function (+, -, *, /): ")

        num1 = float(input("enter the first number: "))
        num2 = float(input("enter the second number: "))

        if math_function == "+":

            result = num1 + num2
        elif math_function == "-":

            result = num1 - num2
        elif math_function == "*":

            result = num1 * num2
        elif math_function == "/":

            if num2 == 0:
                print("Error: division by zero is not allowed.")

                return
            result = num1 / num2

        else:
            print("error: math function is invalid.")
            return

        print("result: {}".format(result))

    except ValueError:
        print("error: enter valid numbers.")

calculate_result()



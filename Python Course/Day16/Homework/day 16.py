# Task 1:
num1 = 10
num2 = 5

print("Multiplication:", num1 * num2)
print("Division:", num1 / num2)
print("Addition:", num1 + num2)
print("Subtraction:", num1 - num2)

# Task 2:
book1_name, book1_price = "book1", 20
book2_name, book2_price = "book2", 30

discounted_price_10_percent = book1_price * 0.9
discounted_price_20_percent = book2_price * 0.8

print("Price of" + book1_name + "with 10% discount:", discounted_price_10_percent)
print("Price of" + book2_name + "with 20% discount:", discounted_price_20_percent)

# Task 3:
age1 = int(input("Enetr age of family member 1:"))
age2 = int(input("Enter age of family member 2:"))

age1_after_25_years = age1 + 25
age2_after_25_years = age2 + 25

print("Age of family member 1 after 25 years:", age1_after_25_years)
print("Age of family member 2 after 25 years:", age2_after_25_years)

# Task 4:
name = input("Enter name:")
lastname = input("Enter lastname:")
age = input("Enter age:")
residence = input("Enter place of residence:")
profession = input("Enter profession:")
hobby = input("Enter hobby:")

sentence = "My name's" + name + " " + lastname + ". I'm" + age + "years old and I live in" + residence + ". I work as a" + profession + "and my hobby is" + hobby + "."

print(sentence)

# Task 5:
number = int(input("Enter a number:"))

if number % 2 == 0:
    print("The number's even.")
else:
    print("The number's odd.")
    

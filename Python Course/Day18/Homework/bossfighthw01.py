def withdraw(balance,amount):
    if amount > 0:
        if amount <= balance:
            balance -=amount
            print(f"withdrew {amount}$,\nBalance: {balance}$")
        else:
            print("Insuficient funds. Try again.")
    else:
        print("Insufficient funds. Enter positive value.")
    return balance

def deposit(balance,amount):
    if amount > 0:
        balance +=amount
        print(f"Deposited {amount}$,\nBalance: {balance}$")
    else:
        print("Invalid value. Enter positive value.")
    return balance

starting_balance = float(input("Enter the balance: "))
current_balance = starting_balance

while True:
    print("1. Withdraw")
    print("2. Deposit")
    choice = input("Enter your choice 1 or 2:")

    if choice == "1":
        withdrawal_amount = float(input("Enter the withdrawal amount: "))
        current_balance = withdraw(current_balance, withdrawal_amount)
    elif choice == "2":
        deposit_amount = float(input("Enter the deposit amount: "))
        current_balance = deposit(current_balance, deposit_amount)
    else:
        print("Invalid choice. Please enter 1 or 2.")




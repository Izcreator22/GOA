import random

def roll_dice():
    return random.randint(1, 6)

def main():
    print("Welcome to Dice Thrilling Game")

    name = input("Enter your name:")

    input(f"Hello, {name}! Press ENTER to roll the dice")
    player_roll = roll_dice()
    print(f"{name}, you rolled {player_roll}!")

    input("Press ENTER for computer's turn")
    computer_roll = roll_dice()
    print(f"computer rolled {computer_roll}!")

    if player_roll > computer_roll:
        print(f"{name} You Won! you get a point! Confgratulations!")
    elif player_roll < computer_roll:
        print("Computer won! It gets a point! Congrats to it!")
    else:
        print("It's a tie!")
if __name__ == "__main__":
    main()
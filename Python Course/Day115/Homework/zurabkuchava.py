# დაწერე python კოდი რომელიც ორობით რიცხვს გადაიყვანს ათობითში.

def binary_to_decimal(binary_str):
    """
    Converts a binary string to its decimal (integer) equivalent.

    Args:
        binary_str: A string representing a binary number (e.g., "101101").

    Returns:
        The decimal integer, or None if the input is invalid.
    """
    if not isinstance(binary_str, str):
      return None
    for bit in binary_str:
        if bit not in '01':
            return None
    decimal_value = 0
    power = len(binary_str) - 1
    for bit in binary_str:
        decimal_value += int(bit) * (2 ** power)
        power -= 1
    return decimal_value

# დაწერე python კოდი რომელიც ათობით რიცხვს გადაიყვანს ორობითში
def decimal_to_binary(decimal_num):
    """
    Converts a decimal (integer) to its binary string representation.

    Args:
        decimal_num: An integer representing the decimal number.

    Returns:
        A string representing the binary number, or None if the input is invalid.
    """
    if not isinstance(decimal_num, int) or decimal_num < 0:
        return None  # Invalid input
    if decimal_num == 0:
        return "0" # Base case
    binary_str = ""
    while decimal_num > 0:
        remainder = decimal_num % 2
        binary_str = str(remainder) + binary_str
        decimal_num = decimal_num // 2
    return binary_str


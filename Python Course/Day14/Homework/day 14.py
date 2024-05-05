#CodeWars: Write 6 CodeWars codes.


#makeUpperCase:

def make_upper_case(s):
    result = s.upper()
    return result
input_string = "Hello, World!"
uppercase_result = make_upper_case(input_string)
print(uppercase_result)



#Sum Arrays:

def sum_array(a):
    result = sum(a)
    return result
numbers = [1, 2, 3, 4, 5]
sum_result = sum_array(numbers)
print(sum_result)



#Are You Playing Banjo?:

def are_you_playing_banjo(name):
    if name[0].lower() == 'r':
        return f"{name} plays banjo"
    else:
        return f"{name} does not play banjo"
    
result1 = are_you_playing_banjo("Sandro")
result2 = are_you_playing_banjo("Giorgi")

print(result1)
print(result2)



#Invert Values:

def invert(lst):
    invert_list = [-x for x in lst]
    return invert_list

result1 = invert([1, 2, 3, 4, 5])
result2 = invert([1, -2, 3, -4, 5])
result3 = invert([])

print(result1)
print(result2)
print(result3)


#Calculate Average

def find_average(numbers):
    if not numbers:
        return 0

    average = sum(numbers) / len(numbers)
    return average

numbers1 = [1, 2, 3, 4, 5]
numbers2 = []

average1 = find_average(numbers1)
average2 = find_average(numbers2)

print(average1)
print(average2)



#Is He Gonna Survive?

def hero(bullets, dragons):

    total_bullets_needed = dragons * 2
    
    return bullets >= total_bullets_needed


bullets_available = 10
dragons_to_defeat = 5

result = hero(bullets_available, dragons_to_defeat)
print(result)


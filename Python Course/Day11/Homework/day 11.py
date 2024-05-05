# 1

# (..., ..., ...) არის ფუნქციის არგუმენტი

def triangle_possible(a, b, c):
    if a+b > c and a+c > b and b+c > a:
        print("the triangle can exist")
    else:
        print("this kinda triangle cannot exist")

triangle_possible(5, 3, 3)
# (5, 3, 3) არის ფუნქციის არგუმენტი


# 2
#split
def ZZ_butt(name_split):
    names = name_split.split()
    print(names)

names = "giorgi, ilia, mate, janeza"

ZZ_butt(names) 


#join
def ZZ_butt(name_join):
    names = name_join.join()
    print(names)

names = "giorgi, ilia, mate, janeza"

ZZ_butt(names)
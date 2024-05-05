from turtle import * 

def draw_square():
    for i in range(4):
        forward(100)
        left(90)

def kalmis_wageba(x,y):
    penup()
    goto(x,y)
    pendown() 

draw_square()
kalmis_wageba(0,200)

draw_square()
kalmis_wageba(-200,200)

#third square
draw_square()
kalmis_wageba(-200,0)

#fourth square
draw_square()

exitonclick()



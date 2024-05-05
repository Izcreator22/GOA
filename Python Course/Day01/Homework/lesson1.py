from turtle import *


#I want to paint house

#step 1: draw a square
speed(5)
width(7)
color("green")
begin_fill()
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
forward(200)
left(90)
end_fill()

#end of square

#drawing a door

forward(70)
color("brown")
begin_fill()
left(90)
forward(120)
right(90)
forward(60)
right(90)
forward(120)
end_fill()


penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()


penup()
goto(200, 200)
pendown()

color("pink")
right(60)
forward(70)
right(270)
forward(50)
right(270)
forward(70)
right(270)
forward(50)
right(270)
forward(35)
right(270)
forward(50)


penup()
goto(200, 200)
pendown()

right(90)
forward(200)
right(270)
forward(50)
right(270)
forward(70)
right(270)
forward(50)
right(270)
forward(35)
right(270)
forward(50)



#end of the house


exitonclick()



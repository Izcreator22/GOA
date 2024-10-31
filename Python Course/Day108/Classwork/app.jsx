import React from "react"


/*


bg-colorname-300
                 
flex---display flex
[start end center]
justify---justify-content
iem---align items

w - screen
h - screen
w-full

text-center ----- 
ext-green-500 ----

sm: tele
md: medium
lg: large
xl: large x1
2xl: 2 large xl
4xl: 4 large xl
*/

const Tailwind = () => {
    return (
        <div>
            <div className='mx-[1rem] bg-black w-10 h-[2.5rem] p-2'>
                <div className='w-5 h-5 bg-slae-500/80'>
                    <p className='text-center text-red-500/.[.5] text-'></p>
                </div> 
            </div>
        </div>
    )
}

export default Tailwind
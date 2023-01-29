import React from 'react';

let previosu

const Lr3 = () => {

    //Question 1
    let length = 0;
    let arithmeticalMean = prompt('Введите числа через запятую').split(',').filter((i)=>typeof(parseInt(i)) === 'number')
        .map((i)=>{
            length++;
            return Math.pow(parseInt(i),3)
        }).reduce((previousValue, currentValue,currentIndex,array)=>previousValue+currentValue)/length;
    console.log(arithmeticalMean);

    //Question 2

    let coordinate1 = Object.assign(prompt('Введите первую точку x,y через запятую').split(',')).map((i)=>parseInt(i));
    let coordinate2 = Object.assign(prompt('Введите вторую точку x,y через запятую').split(',').map((i)=>parseInt(i)))
    let coordinate3 = Object.assign(prompt('Введите третью точку x,y через запятую').split(',').map((i)=>parseInt(i)))
    console.log(coordinate1, coordinate2, coordinate3);

    function trianglePerimeterAndArea(point1, point2, point3) {
        let a = distance(point1, point2);
        let b = distance(point2, point3);
        let c = distance(point3, point1);

        let p = (a + b + c) / 2;

        let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

        return {
            perimeter: a + b + c,
            area: area
        };
    }

    function distance(point1, point2) {
        return Math.sqrt(Math.pow(point2[0] - point1[0], 2) + Math.pow(point2[1] - point1[1], 2));
    }

    console.log(trianglePerimeterAndArea(coordinate1, coordinate2, coordinate3));


    //Question 3
    let array = [5,123,43,22,66];
    console.log(array);
    console.log(array.sort((a,b)=>a-b));

    return (
        <div>

        </div>
    );
};

export default Lr3;
function calc(){

    function sum(x,y){

        if(typeof x === 'number' && typeof y === 'number'){
            const result = x + y;
            const description = `${x} + ${y} = ${result}`;
            return {description, result};
        }else{
            throw(`Both input parameters have to be numbers: ${x}, ${y}`);
        }
        
    }

}
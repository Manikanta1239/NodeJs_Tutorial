try{
    let nume = 10;
    let deno = 0;
    let res = nume / deno;
    console.log('the result is ' ,res);
} catch (error) {
    console.error('An error occurred:', error.message);
} finally {
    console.log('Finally block executed.');
}
console.log('Program continues......');
function numberOfPrimes(N)
{
   let count=0;
   for (let i = 2; i <= N; i++) { 
        if (isPrime(i)) 
            count++; 
    } 
    return count; 
} 
function isPrime(n) 
{  
    if (n <= 1) 
        return false; 
    for (let i = 2; i*i <=n ; i++) 
        if (n % i == 0) 
            return false; 
  
    return true; 
}
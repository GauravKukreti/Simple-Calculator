function backspace(x)
{
    var size = x.length;
    var x1=x.substring(0,size-1);
    return x1;
}

function power1(x)
{
    var p=x.split(',');
    var ans = Math.pow(Number(p[0]),Number(p[1]));
    return ans;
}

function factorial(x)
{
    if(x==0)
      return 1;
    for(var i=x-1;i>=1;i--)
        x*=i;
    return x;
}
#include <stdio.h>

int main()
{
  int fnum, snum, temp, sum;

  fnum = 1;
  snum = 2;
  temp = 0;
  sum = 0;

  for (int i = 0; snum < 4000000; i++) {
    if (snum % 2 == 0)
      sum += snum; 
    
    temp = fnum;
    fnum = snum;
    snum = temp + snum;
  } 
  printf("%d\n", sum);

}

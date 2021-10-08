#include <stdio.h>
#define Max_length 50
typedef struct{
    int Data[Max_length];
    int Size;
}Stack;

void makeNullStack(Stack *S){
    S->Size = 0;
}
int emptyStack(Stack S){
    return S.Size == 0;
}
void pushStack(Stack *S, int x){
    S->Data[S->Size] = x;
    S->Size++;
}
int pullStack(Stack *S){
    int temp = S->Data[S->Size - 1];
    S->Size--;
    return temp;
}
int memberStack(int x, Stack S){
    for (int i = 0; i < S.Size; i++){
        if(S.Data[i] == x){
            return 1;
        }
    }
    return 0;
}

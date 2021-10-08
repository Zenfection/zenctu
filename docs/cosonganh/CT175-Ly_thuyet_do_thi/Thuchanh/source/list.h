#include <stdio.h>

#define Max_length 50
typedef struct{
    int Data[Max_length];
    int Size;
}List;

void makeNullList(List *L){
    L->Size = 0;
}
int emptyList(List L){
    return L.Size == 0;
}
void insertList(int x, List *L){
    L->Data[L->Size] = x;
    L->Size++;
}
int elementAt(List *L){
    int temp = L->Data[0];
    for (int i = 0; i < L->Size; i++){
        L->Data[i] = L->Data[i+1];
    }
    L->Size--;
    return temp;
}
int memberList(int x, List L){
    for (int i = 0; i < L.Size; i++){
        if(L.Data[i] == x){
            return 1;
        }
    }
    return 0;
}
int memberDoubleList(List L1,List L2){
    for (int i = 0; i < L1.Size; i++){
        if(memberList(L1.Data[i], L2)){
            return 1;
        }
    }
    return 0;
}
void printPath(List L){
    for (int i = 0; i < L.Size; i++){
        printf("%d ",L.Data[i]);
    }
}

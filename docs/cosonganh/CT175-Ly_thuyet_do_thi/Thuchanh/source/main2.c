#include <stdio.h>
#include <stdbool.h>
#define MAX 50       // có thể thay thế

//! Thư viện List
typedef struct{ //cấu trúc danh sách
    int Data[MAX];
    int Size;
}List;

void makeNullList(List *L){ //tạo danh sách rỗng
    L->Size = 0;
}
bool emptyList(List L){ //kiểm tra danh sách rỗng
    return L.Size == 0;
}
void insertList(int x, List *L){ //thêm x vào trong danh sách
    L->Data[L->Size] = x;
    L->Size++;
}
int elementAt(List *L){ //lấy từ phần tử đầu tiên trong danh sách
    int temp = L->Data[0];
    for (int i = 0; i < L->Size; i++){
        L->Data[i] = L->Data[i+1];
    }
    L->Size--;
    return temp;
}
bool memberList(int x, List L){ //kiểm tra x có trong danh sách không
    for (int i = 0; i < L.Size; i++){
        if(L.Data[i] == x)
            return true;
    }
    return false;
}
//kiểm tra có phần tử nào trong L1 có trong L2 không
bool memberDoubleList(List L1,List L2){
    for (int i = 0; i < L1.Size; i++){
        if(memberList(L1.Data[i], L2))
            return true;
    }
    return false;
}
void printPath(List L){ // in danh sách ra
    for (int i = 0; i < L.Size; i++)
        printf("%d ",L.Data[i]);
}
void copyList(List  *L1,  List  *L2){ // copy danh sách L1 qua L2
    makeNullList(L2);
    for (int i = 0; i < L1->Size; i++){
        int x = L1->Data[i];
        insertList(x,L2);
    }
}
int getPos(List L,int x){ //trả về vị trí của phần tử x trong danh sách
    for (int i = 0; i < L.Size; i++){
        if(L.Data[i] == x)
            return i;
    }
    return -1; // nếu không có trả về -1
}
int maxList(List L){ //trả về phần tử lớn nhất trong danh sách
    int max = L.Data[0];
    for(int i = 1; i < L.Size; i++){
        if(max < L.Data[i])
            max = L.Data[i];
    }
    return max;
}
int minList(List L){ // trả về phần tử nhỏ nhất trong danh sách
    int min = L.Data[0];
    for(int i = 1; i < L.Size; i++){
        if(min > L.Data[i])
            min = L.Data[i];
    }
    return min;
}
int sumList(List L){ //tính tổng các phần tử trong danh sách
    int sum = 0;
    for(int i = 0; i < L.Size; i++){
        sum += L.Data[i];
    }
    return sum;
}
// ! Thư viện Stack
typedef struct{ //cấu trúc của ngăn xếp
    int Data[MAX];
    int Size;
}Stack;

void makeNullStack(Stack *S){ //tạo ngăn xếp rỗng
    S->Size = 0;
}
bool emptyStack(Stack S){ //kiểm tra ngăn xếp rỗng không
    return S.Size == 0;
}
void pushStack(Stack *S, int x){ //thêm x vào ngăn xếp
    S->Data[S->Size] = x;
    S->Size++;
}
int pullStack(Stack *S){ //lấy x ra từ ngăn xếp
    int temp = S->Data[S->Size - 1];
    S->Size--;
    return temp;
}
bool memberStack(int x, Stack S){ //kiểm tra x có trong ngăn xếp không
    for (int i = 0; i < S.Size; i++){
        if(S.Data[i] == x)
            return true;
    }
    return false;
}

//! Thư viện Graph danh sách cung

typedef struct {
    int u, v;
    int w;
} Edge;
typedef struct {
    int n, m;
    Edge edges[MAX];
} Graph;

//* Hàm cơ bản
void makeNullGraph(Graph *G);   //tạo đồ thị rỗng
void initGraph(Graph *G,int n); //khởi tạo đồ thị
void addEdge(Graph *G, int x, int y, int z); //thêm cung vào đồ thị
int inDegree(Graph G, int x); //tính bậc trong của đỉnh
int outDegree(Graph G, int x); //tính bậc ngoài của đỉnh
List neighbors(Graph G, int x); //trả về danh sách các định kề


//* Tìm đường đi ngắn nhất
void bellmanFord(Graph G, int s, List *cost, List *parrent); //giải thuật bellmanFord

//* Cây khung nhỏ nhất
void swap(Edge *a, Edge *b);
void bubbleSort(Graph *G);
void kruskal(Graph G, Graph *T);



//! Hàm main

int main(int argc, char const *argv[]){
    Graph G;
    makeNullGraph(&G);
    freopen("dt.txt","r",stdin);
    int n,m;
    scanf("%d%d",&n,&m);
    initGraph(&G, n);
    for(int i = 0; i < m; i++){
        int x,y,z;
        scanf("%d%d%d",&x,&y,&z);
        addEdge(&G,x,y,z);
    }
    Graph T;
    makeNullGraph(&T);
    int min_cost = kruskal(G, &T);
    printf("%d\n",min_cost);

    for(int i = 0; i < T.m; i++){
        printf("%d %d %d\n",T.edges[i].u, T.edges[i].v, T.edges[i].w);
    }
    return 0;
}


void makeNullGraph(Graph *G){
    G->m = 0;
    G->n = 0;
}
void initGraph(Graph *G,int n){
    G->n = n;
    for(int i = 0; i < n; i++){
        G->edges[i].u = 0;
        G->edges[i].v = 0;
        G->edges[i].w = 0;
    }
}
void addEdge(Graph *G, int x, int y, int z){
    G->edges[G->m].u = x;
    G->edges[G->m].v = y;
    G->edges[G->m].w = z;

    G->m++;
}
int inDegree(Graph G, int x){
    int count = 0;
    for(int i = 0; i < G.m; i++){
        if(G.edges[i].v == x)
            count++;
    }
    return count;
}
int outDegree(Graph G, int x){
    int count = 0;
    for(int i = 0; i < G.m; i++){
        if(G.edges[i].u == x)
            count++;
    }
    return count;
}

List neighbors(Graph G, int x){
    List L;
    makeNullList(&L);
    for(int i = 0; i <= G.m; i++){
        if(G.edges[i].u == x){
            int v = G.edges[i].v;
            if(!memberList(v, L))
                insertList(v, &L);
        }
    }
    return L;
}

void bellmanFord(Graph G, int s, List *cost, List *parrent){
    for(int i=1; i<= G.n; i++){ // khởi tạo ban đầu
        cost->Data[i] = 999;
        parrent->Data[i] = 0;
    }

    cost->Size = parrent->Size = G.n;
    cost->Data[s] = 0; //có thể thay đổi
    parrent->Data[s] = -1; //có thể thay đổi

    for(int it = 1; it < G.n; it++){
        for(int k = 1; k <= G.m; k++){
            int u = G.edges[k].u;
            int v = G.edges[k].v;
            int w = G.edges[k].w;
            int x = cost->Data[u] + w;
            if(x < cost->Data[v]){
                cost->Data[v] = x;
                parrent->Data[v] = u;
            }
        }
    }
}

void swap(Edge *a, Edge *b){
    Edge temp = *a;
    *a = *b;
    *b = temp;
}
void bubbleSort(Graph *G){
    int n = G->m;
    for(int i = 0; i < n - 1; i++){
        for(int j = n - 1; j >= i + 1; j--){
            if(G->edges[j].w < G->edges[j-1].w)
                swap(&G->edges[j], &G->edges[j-1]);
        }
    }
}
int findRoot(int u, int parent[]){
    while (parent[u] != u){
        u = parent[u];
    }
    return u;
}
int kruskal(Graph G, Graph *T){
    int parent[MAX];
    int sumW = 0;

    initGraph(T, G.n);
    bubbleSort(&G);

    for(int i = 1; i <= G.n; i++){
        parent[i] = i;
    }

    for(int e = 0; e < G.m; e++){
        int u = G.edges[e].u;
        int v = G.edges[e].v;
        int w = G.edges[e].w;

        int rootU = findRoot(u, parent);
        int rootV = findRoot(v, parent);
        if(rootU != rootV){
            addEdge(T, u,v,w);
            parent[rootV] = rootU;
            sumW += w;
        }
    }
    return sumW;
}

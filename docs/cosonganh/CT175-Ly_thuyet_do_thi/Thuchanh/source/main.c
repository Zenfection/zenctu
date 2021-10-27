#include <stdio.h>   // thư viện cơ bản của C
#include <stdbool.h> // hỗ trợ true/false cho C
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

//! Thư viện Graph
typedef struct{
    int A[MAX][MAX];
    int n; //số đỉnh
    int m; //số cung
}Graph;

void makeNullGraph(Graph *G);  //khởi tạo đồ thị rỗng
void init_Graph(Graph *G, int n); //khởi tạo đồ thị với n đỉnh
void add_edge(Graph *G, int x, int y); //thêm 1 cung vào đồ thị vô hướng
void add_edgeDirection(Graph *G, int x,int y); //thêm 1 cung vào đồ thị có hướng
void printGraph(Graph G); // in ma trận đồ thị
int inDegree(Graph G, int x); //tính bậc trong của đồ thị
int outDegree(Graph G, int x); //tính bậc ngoài của đồ thị
bool multiEdge(Graph G); //kiểm tra có chứa đa cung không
List neighbors(Graph G, int x); //trả về danh sách các đỉnh kề
List arrayGraph(Graph G); // trả về danh sách các đỉnh trong đồ thị
void DFS_Re(Graph G, int v, bool visited[]); //duyệt đệ quy đồ thị
bool connectedGraph(Graph G,int x); //kiểm tra đồ thị liên thông
bool connectedStrongGraph(Graph G); //kiểm tra đồ thị liên thông mạnh
int countSubConnectedGraph(Graph G); //đếm số bộ phận liên thông mạnh
bool isCycle(Graph G, bool visited[], int v, int parrent); //bổ trỡ hàm cycle
bool cycle(Graph G); //kiểm tra chu trình

//! Hàm main
int main(int argc, char const *argv[]){
    Graph G;
    makeNullGraph(&G);
    freopen("dt2.txt","r",stdin);
    scanf("%d%d",&G.n,&G.m);
    init_Graph(&G, G.n);
    for(int i = 1; i <= G.m; i++){ // thay đổi theo bài toán
        int x,y;
        scanf("%d%d",&x,&y);
        add_edge(&G,x,y);
    }
    cycle(G) ? printf("YES") : printf("NO");
    return 0;
}

//* -----
void makeNullGraph(Graph *G){
    G->m = 0;
    G->n = 0;
}

void init_Graph(Graph *G, int n){
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= n; j++)
            G->A[i][j] = 0;
}

void add_edge(Graph *G, int x, int y){
    if(G->A[x][y] > 0 && G->A[x][y] > 0) //trường hợp đa cung
        G->A[x][y] = G->A[y][x] += 1;
    else
        G->A[x][y] = G->A[y][x] = 1;
}

void add_edgeDirection(Graph *G, int x,int y){
    if(G->A[x][y] > 0){ //trường hợp đa cung
        G->A[x][y] += 1;
    }
    G->A[x][y] = 1;
}

void printGraph(Graph G){
    for (int i = 1; i <= G.n; i++){
        for (int j = 1; j <= G.n; j++){
            printf("%d ",G.A[i][j]);
        }
        printf("\n");
    }
}
int inDegree(Graph G, int x){
    int count = 0;
    for (int i = 1; i <= G.n; i++){
        if(G.A[x][i] == 1)
            count++;
    }
    return count;
}
int outDegree(Graph G, int x){
    int count = 0;
    for(int i = 1; i <= G.n; i++){
        if(G.A[i][x] == 1)
            count++;
    }
    return count;
}
bool multiEdge(Graph G){
    for (int i = 1; i <= G.n; i++){
        for (int j = 1; j <= G.n; j++)
            if(G.A[i][j] > 1) // hoặc == 2 đều được
                return true;
    }
    return false;
}
List neighbors(Graph G, int x){
    List L; makeNullList(&L);
    for (int i = 1; i <= G.n; i++){
        if(G.A[x][i] == 1)
            insertList(i,&L);
    }
    return L;
}
List arrayGraph(Graph G){
    List L;
    makeNullList(&L);
    for (int i = 1; i <= G.n; i++){
        insertList(i,&L);
    }
    return L;
}
void DFS_Re(Graph G, int v, bool visited[]){
    visited[v] = true;
    //printf("%d ",v);
    List temp = neighbors(G, v);
    for (int i = 0; i < temp.Size; i++){
        int u = temp.Data[i];
        if(!visited[u]){
            DFS_Re(G, u, visited);
        }
    }
}
bool connectedGraph(Graph G,int x){
    bool visited[G.n + 1]; // bắt đầu từ đỉnh 1 thay vì 0
    for (int i = 1; i <= G.n; i++){ // khởi tạo ban đầu là false
        visited[i] = false;
    }
    DFS_Re(G,x,visited);
    for(int i = 1; i <= G.n; i++){
        if(!visited[i])
            return false;
    }
    return true;
}
bool connectedStrongGraph(Graph G){
    for (int i = 1; i <= G.n; i++){
        if(!connectedGraph(G,i))
            return false;
    }
    return true;
}
int countSubConnectedGraph(Graph G){
    int count = 0;
    for(int i = 1; i <= G.n; i++){
        if (connectedGraph(G,i))
            count++;
    }
    return count;
}
bool isCycle(Graph G,bool visited[], int v, int parrent){
    visited[v] = true;
    List L = neighbors(G,v);
    for(int i = 0; i < L.Size; i++){
        int u = L.Data[i];
        if(!visited[u]){
            if(isCycle(G, visited, u, v))
                return true;
        }
        else if(u != parrent)
            return true;
    }
    return false;
}
bool cycle(Graph G){
    bool visited[G.n + 1];
    for(int i = 1; i <= G.n; i++)
        visited[i] = false;

    for(int i = 1; i <= G.n; i++){
        if(!visited[i])
            if(isCycle(G,visited,i,-1))
                return true;
    }
    return false;
}

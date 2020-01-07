负责处理业务逻辑，为 Page 做数据、状态的读写、变换、暂存等。

一个简单的 model 示例如下：https://www.yuque.com/ant-design/course/abl3ad
```
app.model({
    
    namespace: 'todoList',
    
    state: {},
    
    effects: { // 定义 effects 成员
        *query({ _ }, { put, call }) {
            const rsp = yield call(queryTodoListFromServer);
            const todoList = rsp.data;
            yield put({ type: 'save', payload: todoList });
        },
    },
    
    reducers: {
        save(state, { payload: todoList }) {
            return [...state, todoList];
        },
    },

});
```

dva 中一个典型的 effect 的写法是：
```
getData: function* ({ payload }, { call, put }) {
    const data = yield call(SomeService.getEndpointData, payload, 'maybeSomeOtherParams');
    yield put({ type: 'getData_success', payload: data });
}
```
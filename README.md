# iview-table-merge

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## API

### Attributes

| 属性            | 说明                                                                                        | 类型           | 默认值                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cell          | 要合并的列，顺序必须以table的columns顺序一致       | String&#124;Object&#124;Array | null                                                                                                                                      |
| columns          | 表格的列                                                                               | Array         | 表格的columns属性                                                                                                                                      |
| data            | 表格的数据                                                                     | Array         | 表格的data属性                                                                                                                                                     |

### Example

```html
<template>
    <div>
        <!-- 这里可以简写为 v-merge-cell="{cell}" 会自动取当前表格实例的columns与data -->
        <Table v-merge-cell="{cell, columns, data}" ref="table" :columns="columns" :data="data"/>
        <Button type="primary" @click="load">加载...</Button>
    </div>
</template>

<script>
import MergeCell from 'ivu-table-merge';

export default {
    name: 'App',
    directives: { MergeCell },
    data () {
        return {
            cell: ['number', { key: 'product', field: 'productId' }],
            columns: [{
                title: '订单号',
                key: 'number'
            }, {
                title: '金额',
                key: 'money'
            }, {
                title: '产品',
                key: 'product'
            }, {
                title: '数量',
                key: 'quantity'
            }],
            data: [{
                number: 123456789,
                money: 1,
                product: 'Mac Air D32',
                productId: 1,
                quantity: 1
            }, {
                number: 123456789,
                money: 2,
                product: 'Mac Air D32',
                productId: 1,
                quantity: 1
            }, {
                number: 123456789,
                money: 2,
                product: 'Mac Air D42',
                productId: 2,
                quantity: 2
            }, {
                number: 987456123,
                money: 20,
                product: 'Mac Air D42',
                productId: 2,
                quantity: 20
            }]
        };
    },
    methods: {
        load () {
            this.data.push({
                number: Date.now(),
                money: 1,
                product: 'Mac Air D42',
                productId: 2,
                quantity: 20
            });
        }
    }
};
</script>
```

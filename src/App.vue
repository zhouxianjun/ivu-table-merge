<template>
    <div>
        <Table v-merge-cell="{cell}" ref="table" :columns="columns" :data="data"/>
        <Button type="primary" @click="load">加载...</Button>
    </div>
</template>
<script>
import MergeCell from '../src';
// const MergeCell = window['ivu-table-merge'];
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

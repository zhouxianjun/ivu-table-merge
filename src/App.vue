<template>
    <div>
        <Row :gutter="16">
            <Col span="12">
            <Table border v-merge-cell="{cell: cell1}" :columns="columns1" :data="data1"></Table>
            </Col>

            <Col span="12">
            <Table border v-merge-cell="{cell: cell2 }" :columns="columns2" :data="data2"></Table>
            </Col>
        </Row>
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
            cell1: ['number', { key: 'product', field: 'productId' }],
            cell2: ['number', { key: 'product', field: 'productId' }],
            columns1: [{
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
            columns2: [{
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
            data1: [{
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
            }],
            data2: [{
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
            this.data1.push({
                number: Date.now(),
                money: 1,
                product: 'Mac Air D42',
                productId: 2,
                quantity: 20
            });
            this.data2.push({
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

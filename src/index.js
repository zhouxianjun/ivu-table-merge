import { rowSpanTable } from './util';
const apply = (el, binding) => {
    let { cell, columns, data } = binding.value;
    cell = !cell ? null : Array.isArray(cell) ? cell : [ cell ];
    if (!cell || !cell[0]) {
        console.warn('请配置需要合并的列表', el);
        return;
    }
    columns = columns || el.__vue__?.columns;
    data = data || el.__vue__?.data;
    if (!data?.length || !columns?.length) {
        return;
    }
    clearImmediate(binding.def.task);
    binding.def.task = setImmediate(() => {
        const { length } = el.getElementsByClassName('ivu-table-row');
        if (length !== data.length) {
            return;
        }
        rowSpanTable(el, Array.isArray(cell) ? cell : [ cell ], data, columns);
        clearImmediate(binding.def.task);
    }, 100);
};
export default {
    bind (el, binding) {
        apply(el, binding);
    },
    componentUpdated (el, binding) {
        apply(el, binding);
    },
    unbind (el) {
        el.querySelectorAll('[data-merge-cell=Y]').forEach(node => {
            node.dataset.mergeCell = '';
            node.removeAttribute('data-merge-cell');
            node.removeAttribute('rowspan');
            node.style.display = null;
        });
    }
};

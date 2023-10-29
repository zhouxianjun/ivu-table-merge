import { rowSpanTable } from './util';
const TASK_SCOPED = '__merge_cell_task__';
const clearTask = (id) => (window.clearImmediate || window.clearTimeout)(id);
const addTask = (fn, delay = 100) => (window.setImmediate || window.setTimeout)(fn, delay);
const apply = (el, binding) => {
    const { delay = 100 } = binding.value;
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
    clearTask(el[TASK_SCOPED]);
    el[TASK_SCOPED] = addTask(() => {
        const { length } = el.getElementsByClassName('ivu-table-row');
        if (length !== data.length) {
            return;
        }
        rowSpanTable(el, Array.isArray(cell) ? cell : [ cell ], data, columns);
        clearTask(el[TASK_SCOPED]);
    }, delay);
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

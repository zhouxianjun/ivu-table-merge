/**
 * 最后一个相邻数据的下标
 * @param data 数据
 * @param value 值
 * @param field 字段
 * @param index 当前数据下标
 * @returns {number} 下标
 */
export const lastAdjacentIndex = (data, value, field, index) => {
    let last = 0;
    const slice = data.slice(index);
    for (let i = 0; i < slice.length; i++) {
        if (slice[i][field] === value) {
            last = index + i;
        } else {
            return last;
        }
    }
    return last;
};
/**
 * 合并表格
 * @param el 表格VUE实例对象
 * @param cols 列KEY
 * @param data
 * @param columns
 */
export const rowSpanTable = (el, cols, data, columns) => {
    const rows = el.getElementsByClassName('ivu-table-row');
    if (rows && data?.length) {
        cols.forEach(col => {
            let j = 0;
            const key = typeof col === 'string' ? col : col.key;
            const field = typeof col === 'string' ? col : col.field;
            const colIndex = columns.findIndex(n => n.key === key);
            if (colIndex === -1) {
                return;
            }
            data.forEach((item, index) => {
                if (index >= j) {
                    const lastIndex = lastAdjacentIndex(data, item[field], field, index);
                    const rowSpan = lastIndex - index + 1;
                    if (rowSpan > 1) {
                        for (let i = 1; i < rowSpan; i++) {
                            const element = rows[index + i].querySelector(`td:nth-of-type(${colIndex + 1})`);
                            element.dataset.mergeCell = 'Y';
                            element.style.display = 'none';
                        }
                        const element = rows[index].querySelector(`td:nth-of-type(${colIndex + 1})`);
                        element.dataset.mergeCell = 'Y';
                        element.setAttribute('rowspan', rowSpan);
                    }
                    j = lastIndex + 1;
                }
            });
        });
    }
};

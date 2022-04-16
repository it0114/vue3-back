import fs from 'file-saver'
// import XLSX from 'xlsx' // 删了默认导出, 需要用下面的方式导出
import {utils, write} from 'xlsx'

export default (json, fields, filename = '测试数据.xlsx') => {
    json.forEach(item => {
        for (let i in item) {
            if (fields.hasOwnProperty(i)) {
                item[fields[i]] = item[i];
            }
            delete item[i]; //删除原先的对象属性
        }
    })
    //excel的文件名称
    let sheetName = filename
    //工作簿对象包含一SheetNames数组，以及一个表对象映射表名称到表对象。XLSX.utils.book_new实用函数创建一个新的工作簿对象。
    let wb = utils.book_new()
    //将JS对象数组转换为工作表。
    let ws = utils.json_to_sheet(json, {header: Object.values(fields)})
    wb.SheetNames.push(sheetName)
    wb.Sheets[sheetName] = ws
    //设置表格的样式
    const defaultCellStyle = {
        font: {name: "Verdana", sz: 13, color: "FF00FF88"},
        fill: {fgColor: {rgb: "FFFFAA00"}},
        alignment: {
            /// 自动换行
            wrapText: 1,
            // 居中
            horizontal: "center",
            vertical: "center",
            indent: 0
        }
    };
    let wopts = {
        bookType: 'xlsx',
        bookSST: false,
        type: 'binary',
        cellStyles: true,
        defaultCellStyle: defaultCellStyle,
        showGridLines: false
    }  //写入的样式
    let wbout = write(wb, wopts)
    let blob = new Blob([s2ab(wbout)], {type: 'application/octet-stream'})
    fs.saveAs(blob, filename + '.xlsx')
}
const s2ab = s => {
    if (typeof ArrayBuffer !== 'undefined') {
        let buf = new ArrayBuffer(s.length)
        let view = new Uint8Array(buf)
        for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
        return buf
    } else {
        let buf = new Array(s.length);
        for (let i = 0; i !== s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
}

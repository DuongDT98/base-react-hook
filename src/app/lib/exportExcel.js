import { saveAs } from '@progress/kendo-file-saver';
import * as XLSX from 'xlsx';
import JSZip from "jszip";
import JSZipUtils from "jszip-utils";
const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const fileExtension = '.xlsx';
const fileZipExtension = '.zip';
const filePdfExtension = '.pdf';

export const exportExcelAndDownload = (fileName, arrayData, widthCols) => {
    const worksheet = XLSX.utils.json_to_sheet(arrayData);
    worksheet["!cols"] = widthCols
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    saveAs(data, fileName + fileExtension);
}

export const exportExcel = (fileName, arrayData) => {
    const worksheet = XLSX.utils.json_to_sheet(arrayData);
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    let returnData = {
        fileName: fileName + fileExtension,
        data
    }
    return returnData;
}

export const zipFile = (fileZipName, dataZips) => {
    var zip = new JSZip();
    dataZips.forEach((item, idx) => {
        zip.file(item.fileName, item.data);
    });
    zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, `${fileZipName}${fileZipExtension}`);
    });
}

export const downloadFileZipFromLink = (fileZipName, urls) => {
    var zip = new JSZip();
    var count = 0;
    urls.forEach(function (item) {
        JSZipUtils.getBinaryContent(item.url, function (err, data) {
            if (err) {
                throw err;
            }
            zip.file(item.fileName + filePdfExtension, data, { binary: true });
            count++;
            if (count == urls.length) {
                zip.generateAsync({ type: "blob" }).then(function (content) {
                    saveAs(content, fileZipName + fileZipExtension);
                });
            }
        });
    });
}
var fileName= "pdfData.jpg";
if (fileName[0] == "#" || fileName.endsWith(".pdf") || fileName.endsWith(".docx")){
    console.log("Store");
}
else{
    console.log("Delete");
}

// Output
// Delete
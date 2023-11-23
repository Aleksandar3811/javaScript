function colorize() {
    // TODO
    const rows=Array.from(document.querySelectorAll("tr:nth-child(even)"));
    rows.forEach((row)=>{
        row.style.background="teal";
    })
}
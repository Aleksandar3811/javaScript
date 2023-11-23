function extractText() {
    let itemsNodes=document.querySelectorAll("li");
    let textArea=document.getElementById("result");
    let result=[];
    for(const item of Array.from(itemsNodes)){
        result.push(item.textContent);
    }
    textArea.textContent=result.join("\n");
//     for(let node of itemsNodes){
//         textArea.value+=node.textContent+"\n";
//     }
}
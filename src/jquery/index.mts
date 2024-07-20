import "./style.css"

const onClickAdd = () => {
    const inputBox = document.getElementById("add-text") as HTMLInputElement;
    const inputText = inputBox.value
    inputBox.value = "";

    createIncompleteTodo(inputText);
}

const createIncompleteTodo = (todo: string) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "list-row"
    const p = document.createElement("p");
    p.className = "todo-item"
    p.innerText = todo
    
    
    const completeButton = document.createElement("button")
    completeButton.innerText = "完了"
    completeButton.addEventListener("click", () => {
        const completeTarget = completeButton.closest("li")!;
        completeButton.nextElementSibling?.remove();
        completeButton.remove();
        const backButton = document.createElement("button")
        backButton.innerText = "戻す"
        backButton.addEventListener("click", () => {
            const todoPElement = backButton.previousElementSibling! as HTMLElement;
            const todoText = todoPElement.innerText;
            createIncompleteTodo(todoText);
            backButton.closest("li")!.remove();
        })
        completeTarget.firstElementChild?.appendChild(backButton)
        const completeList = document.getElementById("complete-list");
        completeList?.appendChild(completeTarget);
    })

    const deleteButton = document.createElement("button")
    deleteButton.innerText = "削除"
    deleteButton.addEventListener("click", () => {
        const deleteTarget = deleteButton.closest("li")!;
        document.getElementById("incomplete-list")?.removeChild(deleteTarget);
    })

    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    
    document.getElementById("incomplete-list")?.appendChild(li);
}

document.getElementById("add-button")?.addEventListener("click", onClickAdd);

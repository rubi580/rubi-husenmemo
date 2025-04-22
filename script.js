document.getElementById("addButton").addEventListener("click", function () {
    const input = document.getElementById("newMemoInput");
    const text = input.value.trim();
    if (text === "") return;
  
    const li = document.createElement("li");
    li.classList.add("memo");
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
  
    const span = document.createElement("span");
    span.textContent = text;
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🌼";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function () {
      li.remove();
    });
  
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
  
    document.getElementById("memoList").appendChild(li);
    input.value = "";
  });
  
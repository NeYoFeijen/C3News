function newComment() {
    //get text input
    newTitleText = document.getElementById("newTitleInput").value;
    newCommentText = document.getElementById("newCommentInput").value;
    document.getElementById("newTitleInput").value = "";
    document.getElementById("newCommentInput").value = "";

    // make container div
    let commentDiv = document.createElement('div');
    commentDiv.classList.add("d-flex", "mt-4");

    // make profile picture div
    let commentImageDiv = document.createElement('div');
    commentImageDiv.classList.add("me-3")
    let commentImage = document.createElement('img');
    commentImage.src = "../images/commentPage/blank-profile.png";
    commentImage.style.width = "64px";
    commentImageDiv.appendChild(commentImage);

    commentDiv.appendChild(commentImageDiv);

    // make comment body
    let commentBodyDiv = document.createElement('div');
    // title
    let commentBodyTitle = document.createElement('h5');
    commentBodyTitle.classList.add("fw-bold");
    commentBodyTitle.innerText = newTitleText + " ";
    // date
    let commentBodyDate = document.createElement('small');
    commentBodyDate.classList.add('text-muted');
    let currDate = new Date().toLocaleDateString('en-GB', {hour12: false, hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric'});
    commentBodyDate.innerText = currDate;
    commentBodyTitle.appendChild(commentBodyDate);
    // body text
    let commentBodyText = document.createElement('p');
    commentBodyText.innerText = newCommentText;
    // reply button
    let commentButton = document.createElement('button');
    commentButton.classList.add("btn", "btn-warning")
    commentButton.addEventListener("click", newInputField);
    commentButton.innerText = "Reageer";
    // add to body
    commentBodyDiv.appendChild(commentBodyTitle);
    commentBodyDiv.appendChild(commentBodyText);
    commentBodyDiv.appendChild(commentButton);
    commentDiv.appendChild(commentBodyDiv);
    
    //add to html
    document.getElementById("comment-container").appendChild(commentDiv);
}

function newReaction(e, parentElement) {
    let targetElement = e.target.parentNode;

    //get text input
    let newTitleText;
    let newCommentText;

    let elementList = targetElement.childNodes;

    for (let i = 0; i < elementList.length; i++) {
        if (elementList[i].classList.contains('replyTitleInput')) {
            newTitleText = elementList[i].value;
        }
        if (elementList[i].classList.contains('replyBodyTextInput')) {
            newCommentText = elementList[i].value;
        }
    }

    // make container div
    let commentDiv = document.createElement('div');
    commentDiv.classList.add("d-flex", "mt-4");

    // make profile picture div
    let commentImageDiv = document.createElement('div');
    commentImageDiv.classList.add("me-3")
    let commentImage = document.createElement('img');
    commentImage.src = "../images/commentPage/blank-profile.png";
    commentImage.style.width = "64px";
    commentImageDiv.appendChild(commentImage);

    commentDiv.appendChild(commentImageDiv);

    // make comment body
    let commentBodyDiv = document.createElement('div');
    // title
    let commentBodyTitle = document.createElement('h5');
    commentBodyTitle.classList.add("fw-bold");
    commentBodyTitle.innerText = newTitleText + " ";
    // date
    let commentBodyDate = document.createElement('small');
    commentBodyDate.classList.add('text-muted');
    let currDate = new Date().toLocaleDateString('en-GB', {hour12: false, hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric'});
    commentBodyDate.innerText = currDate;
    commentBodyTitle.appendChild(commentBodyDate);
    // body text
    let commentBodyText = document.createElement('p');
    commentBodyText.innerText = newCommentText;
    // reply button
    let commentButton = document.createElement('button');
    commentButton.classList.add("btn", "btn-warning")
    commentButton.addEventListener("click", newInputField);
    commentButton.innerText = "Reageer";
    // add to body
    commentBodyDiv.appendChild(commentBodyTitle);
    commentBodyDiv.appendChild(commentBodyText);
    commentBodyDiv.appendChild(commentButton);
    commentDiv.appendChild(commentBodyDiv);
    
    //add to html
    console.log(targetElement);
    parentElement.append(commentDiv);
}

function newInputField(e) {
    let targetElement = e.target.parentNode;

    let containerDiv = document.createElement('div');
    containerDiv.classList.add("container-lg");

    let titleInput = document.createElement('textarea');
    titleInput.classList.add("form-control", "mt-4", "replyTitleInput");
    titleInput.rows = 1;
    titleInput.setAttribute('type', 'text');

    let bodyTextInput = document.createElement('textarea');
    bodyTextInput.classList.add("form-control", "mt-1", "replyBodyTextInput");
    bodyTextInput.rows = 4;
    bodyTextInput.setAttribute('type', 'text');

    let replyButton = document.createElement('button');
    replyButton.classList.add("btn", "btn-warning", "mt-2", "w-100");
    replyButton.addEventListener('click', handleReplyConfirm);
    replyButton.innerText = "Reageer";

    containerDiv.appendChild(titleInput);
    containerDiv.appendChild(bodyTextInput);
    containerDiv.appendChild(replyButton);

    targetElement.appendChild(containerDiv);
}

function handleReplyConfirm(e) {
    let targetElement = e.target.parentNode;
    targetElement.id = "deletingDiv"
    let parentElement = document.getElementById('deletingDiv').parentNode;
    targetElement.remove();
    newReaction(e, parentElement);
}
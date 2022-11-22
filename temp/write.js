 
  function toMoreInfo(){ // This takes us back to the login page
    window.location.href = "more_info.html";
} 

let time = document.querySelector(".time")

const now = new Date();
const current = now.getHours() + ':' + now.getMinutes();

function tick()
{
  const now = new Date();
  const current = now.getHours() + ':' + now.getMinutes();
  time.innerHTML = current

  t = setTimeout('tick()',60000);
}

tick();




function newPage() { 

  let buttonPlace= document.getElementById("buttonPlace")
  buttonPlace.remove()

  let one = document.getElementById("one")

  let page = document.createElement("page")
  page.setAttribute("class", "page")
  // Outer rim
  let content = document.createElement("section")
  content.setAttribute("class", "content")

  // Inner rim
  let titleWrite = document.createElement("div")
  titleWrite.setAttribute("class", "titleWrite")
  titleWrite.innerHTML = "제목"

  let titleText = document.createElement("input")
  titleText.setAttribute("type", "text")
  titleText.setAttribute("class", "titleText")
  titleText.setAttribute("placeholder", "제목을 작성해주세요")

  content.appendChild(titleWrite)
  content.appendChild(titleText)
  page.appendChild(content)

  // Photo
  let sidebar = document.createElement("aside")
  sidebar.setAttribute("class", "sidebar")

  let photoTitle = document.createElement("div")
  photoTitle.setAttribute("class", "photoTitle")
  photoTitle.innerHTML = "사진"

  let photoInput = document.createElement("div")
  photoInput.setAttribute("class", "photoInput")
  photoInput.setAttribute("style", "background-image:url(/write/img/camera.png)")

  sidebar.appendChild(photoTitle)
  sidebar.appendChild(photoInput)
  page.appendChild(sidebar)

  // Text

  let sidebarText = document.createElement("aside")
  sidebarText.setAttribute("class", "sidebar")

  let inputTitle = document.createElement("div")
  inputTitle.setAttribute("class", "photoTitle")
  inputTitle.innerHTML = "내용"

  let inputfield = document.createElement("input")
  inputfield.setAttribute("type", "text")
  inputfield.setAttribute("class", "contentText")
  inputfield.setAttribute("placeholder", "어떤 내용을 작성하실건가요?")

  sidebarText.appendChild(inputTitle)
  sidebarText.appendChild(inputfield)
  page.appendChild(sidebarText)

  // Button place

  let buttonAgain = document.createElement("aside")
  buttonAgain.setAttribute("class", "sidebar")
  buttonAgain.setAttribute("id", "buttonPlace")

  let pageAdd = document.createElement("button")
  pageAdd.setAttribute("class", "addPageButton")
  pageAdd.setAttribute("onclick", "newPage()")
  pageAdd.innerHTML = "페이지 추가"

  let pageFinish = document.createElement("button")
  pageFinish.setAttribute("class", "finish")
  pageFinish.innerHTML = "완료"

  buttonAgain.appendChild(pageAdd)
  buttonAgain.appendChild(pageFinish)
  page.appendChild(buttonAgain)

  one.appendChild(page)


  
}
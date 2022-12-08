import './App.css';

function App() {

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
    photoInput.setAttribute("style", "background-image:url(img/camera.png)")
  
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
  return (
    <div>

     <header>
         <div id="box1" className="time"></div>
         <div id="box2"><i className="bi bi-reception-4"></i></div>
         <div id="box3"><i className="bi bi-wifi"></i></div>
         <div id="box4"><i className="bi bi-battery-full"></i>
         </div>
 
     </header>
 

     <section className="hero">
         <div id="box1">술 이야기</div>
         <div id="box2"><i className="bi bi-search"></i>
         </div>
         <div id="box3"><i className="bi bi-person-fill"></i>
         </div>
           
     </section>
 
     <div id="one">
     <div className="page">
     <section className="content">
         <div className="titleWrite">제목</div>
         <input type="text" className="titleText" placeholder="제목을 작성해주세요" />
 
     </section>
 
     <aside className="sidebar">
       <div className="photoTitle">사진</div>
       <div className="photoInput"></div>
         
     </aside>
 
     <aside className="sidebar">
       <div className="photoTitle">내용</div>
       <input type="text" className="contentText" placeholder="어떤 내용을 작성하실건가요?" />
 
         
     </aside>
 
     <aside className="sidebar" id="buttonPlace">
       <button className="addPageButton" onClick={newPage}>페이지 추가</button>
       <button className="finish">완료</button>
     </aside>
     </div>
     </div>
 
     <script type="text/javascript" src="write.js"></script>
 
 
 </div>
  );
}

export default App;

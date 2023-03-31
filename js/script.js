var whatElement = document.querySelector(".header__what-we-do");
var whoElement = document.querySelector(".header__who");
var insightsElement = document.querySelector(".header__insights");
var careersElement = document.querySelector(".header__careers");
var body = document.querySelector("body");
var header = document.querySelector(".header");
// import "../json/info.json"
var what = document.querySelector(".what");
var who = document.querySelector(".who");
var insights = document.querySelector(".insights");
var careers = document.querySelector(".careers");

var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");
var line3 = document.querySelector(".line3");
var line4 = document.querySelector(".line4");

//tags
const newButton = document.querySelector(".newsss");
const solutionButton = document.querySelector(".solutionss");
const whiteButton = document.querySelector(".whitee");
const caseStudies = document.querySelector(".casess");
const allButton = document.querySelector(".allta");
// cross buttons
const allCross = document.querySelector(".tags__allcross");
const newsCross = document.querySelector(".tags__cnewscross");
const solutionCross = document.querySelector(".tags__solutioncross");
const whiteCross = document.querySelector(".tags__papercross");
const caseCross = document.querySelector(".tags__casecross");

//first item
const overviewButton = document.querySelector(".overview");
const industryButton = document.querySelector(".industries");
const servicesButton = document.querySelector(".services");
const raiButton = document.querySelector(".rai");
const papButton = document.querySelector(".pap");
// overviewButton.addEventListener("mouseleave", () => {
//   overviewButton.classList.remove("select");
// });
industryButton.addEventListener("mouseleave", () => {
  overviewButton.classList.add("select");
});
servicesButton.addEventListener("mouseleave", () => {
  overviewButton.classList.add("select");
});
raiButton.addEventListener("mouseleave", () => {
  overviewButton.classList.add("select");
});
papButton.addEventListener("mouseleave", () => {
  overviewButton.classList.add("select");
});
//remove on hovering
industryButton.addEventListener("mouseenter", () => {
  overviewButton.classList.remove("select");
});
servicesButton.addEventListener("mouseenter", () => {
  overviewButton.classList.remove("select");
});
raiButton.addEventListener("mouseenter", () => {
  overviewButton.classList.remove("select");
});
papButton.addEventListener("mouseenter", () => {
  overviewButton.classList.remove("select");
});

//who section
const woverviewButton = document.querySelector(".woverview");
const whoAbout = document.querySelector(".industries");
const leader = document.querySelector(".services");
const inNews = document.querySelector(".rai");
woverviewButton.addEventListener("mouseleave", () => {
  woverviewButton.classList.remove("select");
});
whoAbout.addEventListener("mouseenter", () => {
  woverviewButton.classList.remove("select");
});
leader.addEventListener("mouseenter", () => {
  woverviewButton.classList.remove("select");
});
inNews.addEventListener("mouseenter", () => {
  woverviewButton.classList.remove("select");
});

//add
whoAbout.addEventListener("mouseleave", () => {
  woverviewButton.classList.add("select");
});
leader.addEventListener("mouseleave", () => {
  woverviewButton.classList.add("select");
});
inNews.addEventListener("mouseleave", () => {
  woverviewButton.classList.add("select");
});
//insight section
const insightOverButton = document.querySelector(".inoverview");
const custButton = document.querySelector(".cust");
const persButton = document.querySelector(".pers");
const topicButton = document.querySelector(".topic");
insightOverButton.addEventListener("mouseleave", () => {
  insightOverButton.classList.remove("select");
});
whoAbout.addEventListener("mouseleave", () => {
  insightOverButton.classList.remove("select");
});
leader.addEventListener("mouseleave", () => {
  insightOverButton.classList.remove("select");
});
inNews.addEventListener("mouseleave", () => {
  insightOverButton.classList.remove("select");
});

//insight section
const careerButton = document.querySelector(".career-overview");
const indiautton = document.querySelector(".india");
const amerButton = document.querySelector(".america");
const asiaButton = document.querySelector(".asia");
careerButton.addEventListener("mouseleave", () => {
  careerButton.classList.remove("select");
});
indiautton.addEventListener("mouseleave", () => {
  careerButton.classList.remove("select");
});
amerButton.addEventListener("mouseleave", () => {
  careerButton.classList.remove("select");
});
asiaButton.addEventListener("mouseleave", () => {
  careerButton.classList.remove("select");
});

const remove = () => {
  line1.classList.remove("show_nav");
  line2.classList.remove("show_nav");
  line3.classList.remove("show_nav");
  line4.classList.remove("show_nav");
  who.classList.remove("show-section");
  what.classList.remove("show-section");
  insights.classList.remove("show-section");
  careers.classList.remove("show-section");
  // overviewButton.classList.remove("select")
  // woverviewButton.classList.remove("select")
  // insightOverButton.classList.remove("select")
  // careerButton.classList.remove("select")
};

const show = (section, line, buttonsh) => {
  remove();
  line.classList.add("show_nav");
  section.classList.add("show-section");
  buttonsh.classList.add("select");
};

whatElement.addEventListener("mouseenter", () =>
  show(what, line1, overviewButton)
);
whoElement.addEventListener("mouseenter", () =>
  show(who, line2, woverviewButton)
);
insightsElement.addEventListener("mouseenter", () =>
  show(insights, line3, insightOverButton)
);
careersElement.addEventListener("mouseenter", () =>
  show(careers, line4, careerButton)
);

what.addEventListener("mouseenter", () => show(what, line1, overviewButton));
who.addEventListener("mouseenter", () => show(who, line2, woverviewButton));
insights.addEventListener("mouseenter", () =>
  show(insights, line3, insightOverButton)
);
careers.addEventListener("mouseenter", () =>
  show(careers, line4, careerButton)
);

whatElement.addEventListener("mouseleave", () => remove());
whoElement.addEventListener("mouseleave", () => remove());
insightsElement.addEventListener("mouseleave", () => remove());
careersElement.addEventListener("mouseleave", () => remove());

what.addEventListener("mouseleave", () => remove());
who.addEventListener("mouseleave", () => remove());
insights.addEventListener("mouseleave", () => remove());
careers.addEventListener("mouseleave", () => remove());

// body.addEventListener("mouseenter",()=>{
//    remove()
// })

//header.addEventListener("mouseenter",()=>remove());

// navbar
var taskList = document.querySelector(".accordian");
var nav = document.querySelector(".ul");
var getMenu = document.querySelector(".getMenu");
var closeMenu = document.querySelector(".closeMenu");

getMenu.addEventListener("click", () => {
  getMenu.classList.add("hide");
  taskList.classList.add("show_accordian");
  // nav.classList.add("showlist");
  closeMenu.classList.add("show");
});

closeMenu.addEventListener("click", () => {
  getMenu.classList.remove("hide");
  taskList.classList.remove("show_accordian");
  // nav.classList.remove("showlist");
  closeMenu.classList.remove("show");
});

var getMenu1 = document.querySelector(".getMenu1");
var closeMenu1 = document.querySelector(".closeMenu1");

getMenu1.addEventListener("click", () => {
  getMenu1.classList.add("hide");
  taskList.classList.add("show_accordian");
  closeMenu1.classList.add("show");
});

closeMenu1.addEventListener("click", () => {
  getMenu1.classList.remove("hide");
  taskList.classList.remove("show_accordian");
  closeMenu1.classList.remove("show");
});

// careers sevction

//what

// load images when button clicking

var newClicked = false;
var solutionClicked = false;
var whiteClicked = false;
var caseClicked = false;
var searchOption = false;

// search bar
var searchText = document.querySelector("input");
var find = document.querySelector(".find");
var searchBar = document.querySelector(".search");
var cross = document.querySelector(".search__cross");

find.addEventListener("click", () => {
  //  document.querySelector(".list").classList.add("addSearch");
  document.querySelector("body").classList.add("no-scroll");
  searchBar.classList.add("showSearch");
  searchText.focus();
  closeMenu.click();
  closeMenu1.click();
  document.querySelector(".options").classList.add("addOptions");
});

cross.addEventListener("click", () => {
  document.querySelector("body").classList.remove("no-scroll");
  document.querySelector(".options").classList.remove("addOptions");
  searchOption = false;
  //removeDesign()
  console.log(opt);
  if (!opt) showAll();
  searchBar.classList.remove("showSearch");
});

// handlebar

var templatefile = document.querySelector("#template").innerHTML;
//const loadButton = document.querySelector(".load");
const htmlDisplay = document.querySelector("#content");

//fetching the data

const getCharacters = async () => {
  // var data=
  let charactersData = await fetch("../json/info.json");
  let characters = await charactersData.json();
  //console.log(characters)
  return characters;
};
//console.log(getCharacters())
//generate templates with given data
const generateTemplates = (data) => {
  var template = Handlebars.compile(templatefile);
  var templatedata = {
    characters: data,
  };
  var templateHtml = template(templatedata);
  htmlDisplay.innerHTML += templateHtml;
};

//showing the first two characters
var characters = getCharacters();
var startCharacter = 0;
var endCharacter = 3;

function showAll() {
  allClick = true;
  removeDesign();
  document.querySelector(".tags__all").classList.add("add-design");
  startCharacter = 0;
  endCharacter = 3;
  characters.then((data) => {
    htmlDisplay.innerHTML = "";
    var showcharacter = data.slice(startCharacter, endCharacter);
    generateTemplates(showcharacter);
  });
}

showAll();

//loading two more images
const performCharacters = () => {
  startCharacter += 3;
  endCharacter += 3;
  characters.then((data) => {
    var showcharacter = data.slice(startCharacter, endCharacter);
    generateTemplates(showcharacter);
  });
};

//remove all classes
function removeDesign() {
  document.querySelector(".tags__news-room").classList.remove("add-design");
  document.querySelector(".tags__solution").classList.remove("add-design");
  document.querySelector(".tags__white-paper").classList.remove("add-design");
  document.querySelector(".tags__case-studies").classList.remove("add-design");
  newsCross.classList.remove("show-tag");
  solutionCross.classList.remove("show-tag");
  whiteCross.classList.remove("show-tag");
  caseCross.classList.remove("show-tag");
  // allButton.classList.remove("add-design");
  newClicked = false;
  solutionClicked = false;
  whiteClicked = false;
  caseClicked = false;
}

// genertae filtered template
//  function printData(text){
//    // htmlDisplay.innerHTML = "";

// })
//  }
//News Room
newButton.addEventListener("click", () => {
  opt = false;
  //  removeDesign();
  allClick = false;
  newClicked = true;
  document.querySelector(".tags__all").classList.remove("add-design");
  newsCross.classList.add("show-tag");
  //printData("News Room");
  makeTags();
});

//solution
solutionButton.addEventListener("click", () => {
  opt = false;
  allClick = false;
  // removeDesign();
  // if(solutionClicked) return;
  solutionClicked = true;
  document.querySelector(".tags__all").classList.remove("add-design");
  solutionCross.classList.add("show-tag");
  makeTags();
});

//case studies
caseStudies.addEventListener("click", () => {
  opt = false;
  allClick = false;
  // removeDesign();
  caseClicked = true;
  document.querySelector(".tags__all").classList.remove("add-design");
  caseCross.classList.add("show-tag");
  makeTags();
});

whiteButton.addEventListener("click", () => {
  opt = false;
  allClick = false;
  whiteClicked = true;
  document.querySelector(".tags__all").classList.remove("add-design");
  // removeDesign();
  whiteCross.classList.add("show-tag");
  makeTags();
});

//all
var allClick = true;
allButton.addEventListener("click", () => {
  opt = false;
  removeDesign();
  document.querySelector(".tags__all").classList.add("add-design");
  htmlDisplay.innerHTML = "";
  allClick = true;
  showAll();
});

function makeTags() {
  //  console.log(newClicked)
  var newData = [];
  htmlDisplay.innerHTML = "";
  // console.log(newClicked);
  if (newClicked) {
    document.querySelector(".tags__news-room").classList.add("add-design");
    characters.then((data) => {
      var data = data.filter((ele) => ele.tag === "News Room");
      console.log(data);
      newData.push(...data);
      generateTemplates(data);
      // console.log(newData)
    });
  }
  // for solution
  if (solutionClicked) {
    document.querySelector(".tags__solution").classList.add("add-design");
    characters.then((data) => {
      var data = data.filter((ele) => ele.tag === "Solution");
      console.log(data);
      newData.push(...data);
      generateTemplates(data);
      // console.log(newData)
    });
  }

  // for case studies
  if (caseClicked) {
    document.querySelector(".tags__case-studies").classList.add("add-design");
    characters.then((data) => {
      var data = data.filter((ele) => ele.tag === "Case Studies");
      console.log(data);
      newData.push(...data);
      generateTemplates(data);
      // console.log(newData)
    });
  }
  // for White Paper
  //whiteClicked=true;
  if (whiteClicked) {
    document.querySelector(".tags__white-paper").classList.add("add-design");
    characters.then((data) => {
      var data = data.filter((ele) => ele.tag === "White Paper");
      console.log(data);
      newData.push(...data);
      generateTemplates(data);
      // console.log(newData)
    });
  }
  if (!newClicked && !solutionClicked && !whiteClicked && !caseClicked)
    showAll();
}

//cross button
newsCross.addEventListener("click", () => {
  //    console.log(newClicked)
  allClick = true;
  newClicked = false;
  document.querySelector(".tags__news-room").classList.remove("add-design");
  newsCross.classList.remove("show-tag");
  makeTags();
});

solutionCross.addEventListener("click", () => {
  allClick = true;
  solutionClicked = false;
  document.querySelector(".tags__solution").classList.remove("add-design");
  solutionCross.classList.remove("show-tag");
  makeTags();
});

whiteCross.addEventListener("click", () => {
  allClick = true;
  whiteClicked = false;
  document.querySelector(".tags__white-paper").classList.remove("add-design");
  whiteCross.classList.remove("show-tag");
  makeTags();
});

caseCross.addEventListener("click", () => {
  allClick = true;
  caseClicked = false;
  document.querySelector(".tags__case-studies").classList.remove("add-design");
  caseCross.classList.remove("show-tag");
  makeTags();
});

//scrolling bottom
document.addEventListener("scroll", function (e) {
  if (
    document.querySelector(".tags__all").classList.contains("add-design") &&
    !opt
  ) {
    let documentHeight = document.body.scrollHeight;
    console.log(documentHeight);
    let currentScroll = window.scrollY + window.innerHeight;
    let modifier = 10;
    if (currentScroll + modifier > documentHeight) {
      if (
        !newClicked &&
        !solutionClicked &&
        !whiteClicked &&
        !caseClicked &&
        !searchOption &&
        !opt
      )
        console.log(
          newClicked,
          "",
          searchOption,
          solutionClicked,
          whiteClicked,
          caseClicked,
          opt
        );
      performCharacters();
    }
  }
});

var opt = false;
var tagsShow = document.querySelectorAll(".tags__show");
searchText.addEventListener("change", (e) => {
  // searchOptions.textContent = "";
  // e.target.value =""
  opt = true;
  console.log(opt);
  allClick = false;
  cross.click();
  document.querySelector("body").classList.remove("no-scroll");
  // removeDesign()
  searchOption = true;
  let value = e.target.value;
  characters.then((data) => {
    var newda = []; //data to store filtered data
    //loop though all tags
    Array.from(tagsShow).forEach((ele) => {
      console.log(ele.children[0].firstChild.data);
      if (ele.classList.contains("add-design")) {
        var data1 = data.filter(
          (el) => el.tag === ele.children[0].firstChild.data
        );
        newda.push(...data1);
      }
    });
    if (newda.length == 0) newda.push(...data); //push all if empty
    var finalData = [];
    var data = newda.filter((ele) => {
     // console.log(ele.title);
      let string1 = ele.title.split(" ");
     // console.log(string1);
      let res = string1.some((inner) => {
        if (inner.toLowerCase().indexOf(value.toLowerCase()) == 0) {
          return true;
        }
      });
      if (res) {
        finalData.push(ele);
        return true;
      } else if (value.indexOf(" ") > -1) {
        if (ele.title.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          finalData.push(ele);
        }
        return true;
      } else return false;

      //return ele.title.toLowerCase().indexOf(value.toLowerCase()) > -1
    });
    // console.log(finalData)
    htmlDisplay.innerHTML = "";
    //console.log(data);
    if (finalData.length == 0) {
      finalData.push(...[{ title: "No results found" }]);
    }

    generateTemplates(finalData);
    // e.target.value = "";
    // searchOptions.textContent = "";
  });
});

//suggestions
var searchOptions = document.querySelector(".search__options");
searchText.addEventListener("input", (e) => {
  allClick = false;
  let value = e.target.value;
  searchOption.textContent = "";
  characters.then((data) => {
    if (value == "") searchOption.textContent = "";
    else {
      var newda = [];
      //loop through all tags
      Array.from(tagsShow).forEach((ele) => {
        console.log(ele.children[0].firstChild.data);
        if (ele.classList.contains("add-design")) {
          var data1 = data.filter(
            (el) => el.tag === ele.children[0].firstChild.data
          );
          newda.push(...data1);
        }
      });
     // console.log(newda);
      if (newda.length == 0) newda.push(...data); //push all if empty
      //console.log(newda);
      let finalData=[];
      var data = newda.filter((ele) => {
      //  console.log(ele.title);
        let string1 = ele.title.split(" ");
      //  console.log(string1);
        let res = string1.some((inner) => {
          if (inner.toLowerCase().indexOf(value.toLowerCase()) == 0) {
            finalData.push(ele);
            return true;
          }
        });
        if(res) {
          finalData.push(ele);
          return true;
        } else if (value.indexOf(" ") > -1) {
          if (ele.title.toLowerCase().indexOf(value.toLowerCase()) > -1) {
            finalData.push(ele);
          }
          return true;
        } else return false;
        //return ele.title.toLowerCase().indexOf(value.toLowerCase()) > -1
      });
      console.log(finalData)
      searchOptions.textContent = "";
      let listBucket = document.createElement("div");
      listBucket.classList.add("Fget");
      searchOptions.append(listBucket);

      if (finalData.length == 0) {
        let lists = document.createElement("div");
        lists.classList.add("options__list");
        lists.textContent += "No Results Found";
        listBucket.append(lists);
      }
      //let i = 0
      finalData.map((ele) => {
        //  console.log(ele.title)
        if (finalData.length < 12) {
          let lists = document.createElement("div");
          lists.classList.add("options__list");
          lists.textContent += ele.title;
          lists.classList.add("options__lists");
          lists.tabIndex = 2;
          lists.addEventListener("click", () => {
            // console.log(e.target)
            var printData = data.filter((ele1) => ele1.title === ele.title);
            console.log(printData);
            opt = true;
            // console.log(opt)
            cross.click();
            console.log(e.target);
            e.target.value = "";

            searchOptions.textContent = "";
            htmlDisplay.innerHTML = "";
            generateTemplates(printData);
          });

          listBucket.append(lists);
        }
      });
    }
  });
});

//accordian
const list = document.querySelectorAll(".list");
function accordion(e) {
  e.stopPropagation();

  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else if (this.parentElement.parentElement.classList.contains("active")) {
    this.classList.add("active");
  } else {
    for (i = 0; i < list.length; i++) {
      list[i].classList.remove("active");
    }

    this.classList.add("active");
  }
}

for (i = 0; i < list.length; i++) {
  list[i].addEventListener("click", accordion);
}

//document
document.addEventListener("scroll", () => {
  let x = window.scrollY;
  if (x > 100) {
    // console.log(x)
    header.classList.remove("header-height");
    header.classList.add("changeNav");
  } else {
    header.classList.remove("changeNav");
    header.classList.add("header-height");
  }
});

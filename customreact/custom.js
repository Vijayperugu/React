function customRender(reactElement,mainContainer){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute('href',reactElement.props.herf);
    domElement.setAttribute('target',reactElement.props.target);
    mainContainer.append(domElement);
}


const reactElement = {
    type: 'a',
    props:{
        herf:"https://www.google.com",
        target: "_blank",
    },
    children:"Click Me"
}
const mainContainer = document.querySelector("#index");
customRender(reactElement,mainContainer);
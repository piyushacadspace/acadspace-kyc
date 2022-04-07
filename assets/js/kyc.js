




const embedElement = document.getElementById('tfembed')
const email = localStorage.getItem('email')
const mobile = localStorage.getItem('mobile')
const childsName = localStorage.getItem('name')



if (email === null || mobile === null || childsName === null ){
	window.location.href = "/";
}
const attr = document.createAttribute("data-tf-hidden");
attr.value = `phone=${mobile},email=${email},name=${childsName}`;

embedElement.setAttributeNode(attr)